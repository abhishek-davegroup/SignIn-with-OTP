const express = require('express')

//Function for verifying OTP
function codeVerify(){
    var code = document.getElementById('verificationcode').value
    coderesult.confirm(code).then(function() {
        document.getElementsByClassName('p-conf')[0].style.display = 'block'
        document.getElementsByClassName('n-conf')[0].style.display = 'none'
    }).catch(function(){
        document.getElementsByClassName('p-conf')[0].style.display = 'none'
        document.getElementsByClassName('n-conf')[0].style.display = 'block'
    })
}

module.exports = codeVerify()