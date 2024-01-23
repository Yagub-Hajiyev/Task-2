document.body.style.background="black"
document.title = "Task 2 (Yagub Hajiyev)"

const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const uni=document.querySelector('#uni')
const city=document.querySelector('#city')
const male=document.querySelector('#male')
const female=document.querySelector('#female')
const myForm=document.querySelector('.form')

myForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user={
        username:username.value,
        email:email.value,
        password:password.value,
        uni:uni.value,
        city:city.value,
        male:male.value,
        female:female.value
    }
    console.log(user);
    setTimeout(()=>{
window.location.href='about.html'
    },2000)
})

