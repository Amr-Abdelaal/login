const signName = document.getElementById('signName')
const signEmail = document.getElementById('signEmail')
const signPassword = document.getElementById('signPassword')
const loginBtn = document.getElementById('loginBtn')
const emailExist = document.getElementById('emailExist')


let users = []

if(JSON.parse(localStorage.getItem('usersInfo')) != null){
users = JSON.parse(localStorage.getItem('usersInfo'))
}

function signUp(){
    if(signName.value == '' || signEmail.value == '' || signPassword.value == '' ){
        emailExist.innerHTML = `<span class='text-danger my-3'>All inputs are required</span>`
    }
    else{
        for( var i = 0 ; i < users.length ; i++){
            if(users[i].email.toLowerCase() == signEmail.value.toLowerCase()){
                emailExist.innerHTML = `<span class='text-danger my-3'>Email is already exist</span>`
                return false
            }
        }
        userData()
        emailExist.innerHTML = `<span class='text-success my-3'>Success</span>`

    }
}


function userData(){
let user = {
    name:signName.value,
    email:signEmail.value,
    pass:signPassword.value,
}
users.push(user)
localStorage.setItem( 'usersInfo' , JSON.stringify(users))
location.href = "index.html"
}

loginBtn?.addEventListener('click' , function(){
    signUp()
})

//signin


const signInEmail = document.getElementById('signInEmail')
const signInPassword = document.getElementById('signInPassword')
const logBtn = document.getElementById('logBtn')
const checkInput = document.getElementById('checkInput')



function signIn(){
if(signInEmail.value == '' || signInPassword.value == ''){
    checkInput.innerHTML = `<span class='text-danger my-3'>All inputs are required</span>`
}
else{
    for( var i = 0 ; i < users.length ; i++){
if(signInEmail.value.toLowerCase() == users[i].email.toLowerCase() && signInPassword.value.toLowerCase() == users[i].pass){
    checkInput.innerHTML = `<span class="text-success my-3">success</span>`
    localStorage.setItem('userName' , JSON.stringify(users[i].name))
    location.href = 'home.html'
}
    }
}
}

logBtn?.addEventListener('click' , function(){
signIn()
})


//home

const homeUser = document.getElementById('homeUser')

var userLoged = localStorage.getItem('userName')
homeUser.innerHTML = `<h2 class='text-info'>Welcom${userLoged}</h2>`






