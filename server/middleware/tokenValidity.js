const express = require('express')
const router = express.Router()

const admin = require('firebase-admin')
const { decode } = require('jsonwebtoken')

router.get('/tokenIsOk', (req,res)=>{
    let idToken
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1]
    }
    else{
        console.error('No token found')
        return res.status(403).json({error: 'Unauthorized', tokenOk: false})
    }
    admin.auth().verifyIdToken(idToken)
    .then((decodedToken)=>{
        // console.log(decodedToken)
        res.json({tokenOk: true})
    })
    .catch(err=>{
        console.log(err)
        res.json({tokenOk:false})
    })
})

module.exports = router