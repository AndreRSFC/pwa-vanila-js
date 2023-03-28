const userDiv = (name, description, date, phone) => `
    <div class="user-highlights">
        <img class="user-image" src="../../icons/user-icon.svg" alt="}"/>
        <h2 class="user-name">${name}</h2>
    </div>
    <div class="infos-iconsContainer">
        <img class="infos-icons" src="./icons/text.svg"/>
        <div>${description}</div>
    </div>
    <div class="infos-iconsContainer">
        <img class="infos-icons" src="./icons/date.svg"/>
        <div>${date}</div>
    </div>
    <div class="infos-iconsContainer">
        <img class="infos-icons" src="./icons/phone.svg"/>
        <div>${phone}</div>
    </div>
`;

export default userDiv;
