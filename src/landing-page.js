import logo from './logo.png';
import food from './food-icon.svg';
import contact from './call-icon.svg';

const renderLanding = () => {
    const content = document.querySelector("#content");
    const btn = document.querySelector(".about");
    btn.classList.add("active");
    // Create first section
    const firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "first");

    const myLogo = new Image();
    myLogo.src = logo;
    myLogo.setAttribute("class", "logo");
    myLogo.setAttribute("alt", "Logo image");

    const bigText = document.createElement("h1");
    bigText.textContent = "PINARES, PINIPAW, INOVERLOAD";
    const smallText = document.createElement("p");
    smallText.textContent = 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    bigText.append(smallText);

    firstDiv.append(
        myLogo,
        bigText,
    );

    // Create second section
    const secondDiv = document.createElement("div");
    secondDiv.setAttribute("class", "second");
    // second section part 1
    const secondDivP1 = document.createElement("div");
    secondDivP1.setAttribute("class", "second-p1");
    const foodImg = new Image();
    foodImg.src = food;
    foodImg.setAttribute("class", "food");
    foodImg.setAttribute("alt", "Food image");

    const p1h1 = document.createElement("h1");
    p1h1.textContent = "Hungry?";
    const p1h2 = document.createElement("h2");
    p1h2.textContent = "Check out our menu!";
    const p1btn = document.createElement("button");
    p1btn.textContent = "Click here";


    secondDivP1.append(
        foodImg,
        p1h1,
        p1h2,
        p1btn
    );
    // second section part 2
    const secondDivP2 = document.createElement("div");
    secondDivP2.setAttribute("class", "second-p2");
    const contactImg = new Image();
    contactImg.src = contact;
    contactImg.setAttribute("class", "contact-img");
    contactImg.setAttribute("alt", "Contact us image");

    const p2h1 = document.createElement("h1");
    p2h1.textContent = "Have concerns?";
    const p2h2 = document.createElement("h2");
    p2h2.textContent = "Contact Us!";
    const p2btn = document.createElement("button");
    p2btn.textContent = "Click here";


    secondDivP2.append(
        contactImg,
        p2h1,
        p2h2,
        p2btn,
    );


    secondDiv.append(
        secondDivP1,
        secondDivP2,
    )


    content.append(
        firstDiv,
        secondDiv,
    );

    return content;
};

export { renderLanding }

