const express = require('express')
 
 //Function for sending message
function phoneAuth() {
    var number = document.getElementById('number').value
    firebase.auth().signInWithPhoneNumber(number,
    window.recaptchaVerifier).then(function(confirmationResult){
        window.confirmationResult = confirmationResult
        coderesult = confirmationResult
        console.log('OTP Sent')
        //document.getElementById('sender').style.display = 'none'
        document.getElementById('verifier').style.display = 'block'
    }).catch(function(error){
        alert(error.message)
    })
}

module.exports = phoneAuth()