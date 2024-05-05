import './landing-page.css';
import logo from './logo.svg';
import food from './food-icon.svg';
import contact from './call-icon.svg';

const renderLanding = () => {
    const landingContent = document.querySelector("#content"),
          btn = document.querySelector(".about");
            btn.classList.add("active");

    // Create section
    const firstDiv = document.createElement("div"),
          myLogo = new Image(),
          bigText = document.createElement("h1"),
          smallText = document.createElement("p");
          
            firstDiv.setAttribute("class", "first");
            myLogo.src = logo;
            myLogo.setAttribute("class", "logo");
            myLogo.setAttribute("alt", "Logo image");
            bigText.textContent = "THE GREATEST PARES OF TODAY";
            smallText.textContent = 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            bigText.append(smallText);

    firstDiv.append(
        myLogo,
        bigText,
    );

    landingContent.append(
        firstDiv,
    );
};

export { renderLanding }

