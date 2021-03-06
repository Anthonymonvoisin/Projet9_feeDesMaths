const express = require('express')
const router = express.Router()
const FBAuth = require('../middleware/requireLogin')

const admin = require('firebase-admin')

//acces aux posts, cree un post == LOGIN
router.get('/cours', FBAuth, (req, res) => {
    admin.firestore().collection("cours").get()
        .then(data => {
            let cours = []
            data.forEach(doc => {
                cours.push(doc.data())
            })
            return res.json(cours)
        })
        .catch(err => {
            console.error(err)
        })
})

///TODO : modifier la maniere de créer un cours
//Changer dans addlesson comment add un cours + gestion de si nn authorisé
router.post('/createpost', FBAuth ,(req, res)=>{
    const {matiere, chapitre, lecon, description, cours, photo, pdf} = req.body
    if(!matiere || !chapitre || !lecon || !description || !cours){
        res.status(422).json({error:"please add all the fields"})
    }

    let idToken, uid, rank
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1]
    }
    else{
        console.error('No token found')
        return res.status(403).json({error: 'Unauthorized'})
    }
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken=>{
        uid = decodedToken.uid
        // console.log(uid)
        return uid
    })
    .then(()=>{
        admin.firestore().collection('users').where('userId', '==', uid).limit(1).get()
        .then(data=>{
            let profilInfo =[]
            data.forEach(doc => {
                profilInfo.push(doc.data())
            })
            // console.log(profilInfo)
            rank = profilInfo[0].rank
            //////
            // console.log(uid)
            // console.log(rank)

            if(rank === "admin" || rank === "professor"){
                const lesson = admin.firestore().collection('cours').doc()
                // console.log(lesson.id)
                const newLesson = {
                    matiere,
                    chapitre,
                    lecon,
                    description,
                    cours,
                    photo,
                    pdf,
                    lessonId:lesson.id,
                    postedBy:uid
                }
                lesson.set(newLesson)
                .then(()=>{
                    res.json({message: `Lesson ${lesson.id} created successfully`, allow:true})
                })
                .catch(err=>{
                    res.status(500).json({error: 'something went wrong'})
                    console.log(err)
                })
            }
            else{
                return res.json({error:"you're not allow to access at this function, you're rank is too low"})
            }
            //////
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',FBAuth, (req, res)=>{
    ///use Token to access db and get rank
    let idToken
    let uid
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1]
    }
    else{
        console.error('No token found')
        return res.status(403).json({error: 'Unauthorized'})
    }
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken=>{
        uid = decodedToken.uid
        return uid
    })
    .then(()=>{
        // console.log(uid)
        admin.firestore().collection('users').where('userId', '==', uid).limit(1).get()
        .then(data=>{
            let profilInfo =[]
            data.forEach(doc => {
                profilInfo.push(doc.data())
            })
            rank = profilInfo[0].rank
            //////
            console.log(rank)
            if(rank === "admin" || rank === "professor"){
  
              admin.firestore().collection('cours').where('postedBy', '==', req.user.uid).get()
              .then(data=>{
                  let mesCours =[]
                  data.forEach(doc => {
                      mesCours.push(doc.data())
                  })
                  // console.log(mesCours)
                  return res.json({mesCours, allow:true})
              })
              .catch(err=>{
                  console.log(err)
              })
  
            }
            else{
                return res.json({error:"you're not allow to access at this function, you're rank is too low"})
            }
            //////
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
  })

router.get('/precis/:postId', FBAuth, (req, res) => {
    const postId = req.params.postId
    let postById
    let postedByName
    // console.log(postId)
    admin.firestore().collection('cours').where('lessonId', '==', postId).get()
        .then(data => {
            let mesCours = []
            data.forEach(doc => {
                mesCours.push(doc.data())
            })
            postById = mesCours[0].postedBy
            // console.log(postById)
            admin.firestore().collection('users').where('userId', '==', postById).get()
                .then(data => {
                    let postedInfo = []
                    data.forEach(doc => {
                        postedInfo.push(doc.data())
                    })
                    postedByName = postedInfo[0].name
                    // console.log(postedByName)
                    mesCours.push({postedByName: postedByName})
                    // console.log(mesCours)
                    return res.json(mesCours)
                })
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete('/deletepost/:postId', FBAuth, (req, res) => {
    const postId = req.params.postId
    // console.log(postId)
    ///use Token to access db and get rank
    let idToken
    let uid
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1]
    }
    else{
        console.error('No token found')
        return res.status(403).json({error: 'Unauthorized'})
    }
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken=>{
        uid = decodedToken.uid
        return uid
    })
    .then(()=>{
        // console.log(uid)
        admin.firestore().collection('users').where('userId', '==', uid).limit(1).get()
        .then(data=>{
            let profilInfo =[]
            data.forEach(doc => {
                profilInfo.push(doc.data())
            })
            rank = profilInfo[0].rank
            //////
            console.log(rank)
            if(rank === "admin" || rank === "professor"){
  
                admin.firestore().collection('cours').doc(postId).delete()
                .then(() => {
                    res.json({message: "document successfully delete", allow:true})
                })
                .catch(err => {
                    console.error(err)
                })
  
            }
            else{
                return res.json({error:"you're not allow to access at this function, you're rank is too low"})
            }
            //////
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router