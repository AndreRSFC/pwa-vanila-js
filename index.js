import { emptyState } from "./components/emptyState/index.js";
import userCard, { userCardEvents } from "./components/userCard/index.js";

const newUser = document.querySelector(".newUser");
const formModal = document.querySelector(".formModal");
const formModalForm = document.querySelector(".formModal-form");
const filter = document.querySelector('.filter')
const modalClose = document.querySelector('.header-close')

const outsideClick = (e) => {
  if (e?.target == filter) {
    filter.style.display = "none";
  }
};

window.addEventListener("click", outsideClick);

newUser.addEventListener("click", () => {
  formModal.style.display = "flex";
});

formModalForm.addEventListener("submit", (e) => {
  let currentUsers = JSON.parse(localStorage.getItem("users")) || [];

  let addNewUser = {};
  e.preventDefault();
  const formData = new FormData(formModalForm);
  for (const pair of formData.entries()) {
    addNewUser = { ...addNewUser, [pair[0]]: pair[1] };
  }

  addNewUser.id = "id" + Math.random().toString(16).slice(2)

  localStorage.setItem("users", JSON.stringify([...currentUsers, addNewUser]));

  updateList();

  formModal.style.display = "none";
});

modalClose.addEventListener('click',()=>{
  formModal.style.display = "none";
})

export const updateList = async () => {
  const userCardList = document.querySelector(".userCard-list");

  var currentUsers = JSON.parse(localStorage.getItem("users"));

  if (currentUsers && currentUsers?.length) {
    const list = currentUsers
      .map((user, index) =>
        userCard(user.name, user.date, user.phone, user.description, index, user.id)
      )
      .join("");

    userCardList.innerHTML = list;
    userCardEvents()
  } else {
    userCardList.innerHTML = emptyState;
  }
};

updateList();


const headerFilter = document.querySelector(".header-filter");

headerFilter.addEventListener('click', () => {
  filter.style.display = "flex"
})

const filterButton = document.querySelector('.filter-button')

filterButton.addEventListener('click', async () =>{
  const radios = document.querySelectorAll('input[name="filter"]');

   const filterType = [...radios].find(item=>item.checked).value

  const users =   JSON.parse(localStorage.getItem('users'))

   if(filterType === 'crescent') {
    users.sort((a, b) => a.name.localeCompare(b.name));
   } else if (filterType === 'decrescent') {
    users.sort((a, b) => b.name.localeCompare(a.name));
   } else {
    users.sort((a,b) => a.index - b.index);
   }

   localStorage.setItem('users', JSON.stringify(users))

   filter.style.display = "none"

   updateList()
})