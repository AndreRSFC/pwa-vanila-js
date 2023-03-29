import { updateList } from "../../index.js";

const userCard = (name, date, phone, description, index, id) => `
    <div class="userCard" data-name="${name}" data-description="${description}" data-date="${date}" data-phone="${phone}" data-index="${index}" data-id="${id}" >
        <img class="userCardImage" src="../../icons/user-icon.svg" alt="${name}"/>
        <div class="userCard-content">
        <div class="userCard-name">${name}</div>
        <div class="infos">
            <div class="infos-iconsContainer">
            <img class="infos-icons" src="./icons/date.svg"/>
            <div>${date}</div>
            </div>
            <div class="infos-iconsContainer">
            <img class="infos-icons" src="./icons/phone.svg"/>
            <div>${phone}</div>
            </div>
        </div>
        </div>
        <img class="userCard-trash" src="./icons/trash.svg" alt="${name}"/>
    </div> 
`;

export const userCardEvents = () => {
  const cards = [...document.querySelectorAll(".userCard")];
  const users = JSON.parse(localStorage.getItem("users"));

  cards.map((card) => {
    card.addEventListener("click", async (e) => {
      await localStorage.setItem(
        "activeUser",
        JSON.stringify({
          name: card.getAttribute("data-name"),
          date: card.getAttribute("data-date"),
          phone: card.getAttribute("data-phone"),
          description: card.getAttribute("data-description"),
          index: card.getAttribute("data-index"),
          id: card.getAttribute("data-id"),
        })
      );
      history.replaceState({ page: 1 }, "User", "/user");
      history.go();
    });

    card.querySelector(".userCard-trash").addEventListener("click", async (e) => {
      e.stopImmediatePropagation()
      const newUSers = users.filter(
        (user) => user.id !== card.getAttribute("data-id")
      );

      await localStorage.setItem('users', JSON.stringify(newUSers))

      updateList()
    });
  });
};

export default userCard;
