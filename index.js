const express = require('express') 
// import {signUp} from '/routes/signUp'

//Creating New express App
const app = express()

app.get('/', (req, res) => {
    res.sendStatus(200)
})

//Adding Signup page
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Getting the port to listen on
// const port = process.env.APP_PORT;

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
    recaptchaVerifier.render()
}

// Listening on the given port
app.listen(5000, ()=>{
    console.log("Server running on port 5000!");
})