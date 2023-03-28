import userDiv from './components/user/index.js'

const userContainer = document.querySelector('.user')
const user = JSON.parse(localStorage.getItem("activeUser"));

userContainer.innerHTML = userDiv(user.name, user.description, user.date, user.phone)


