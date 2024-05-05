/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/logo.svg
const logo_namespaceObject = __webpack_require__.p + "f51d43996ff3c3a7fa7a.svg";
;// CONCATENATED MODULE: ./src/food-icon.svg
const food_icon_namespaceObject = __webpack_require__.p + "668e2d0adecfbdcd0fce.svg";
;// CONCATENATED MODULE: ./src/call-icon.svg
const call_icon_namespaceObject = __webpack_require__.p + "f4d588eb143ef8cb22d5.svg";
;// CONCATENATED MODULE: ./src/landing-page.js





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
            myLogo.src = logo_namespaceObject;
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




;// CONCATENATED MODULE: ./src/food.svg
const food_namespaceObject = __webpack_require__.p + "c672701e1e42d6d81c9d.svg";
;// CONCATENATED MODULE: ./src/drinks.svg
const drinks_namespaceObject = __webpack_require__.p + "848ac5a04fdd945f9e55.svg";
;// CONCATENATED MODULE: ./src/dessert.svg
const dessert_namespaceObject = __webpack_require__.p + "c27ecbaf770f0b8b5a02.svg";
;// CONCATENATED MODULE: ./src/menu.js





const renderMenu = () => {
    const menuContent = document.querySelector("#content"),
          menuDiv = document.createElement("div");
            menuDiv.classList.add("menu-items");

          for (let i = 1; i < 4; i++) { 
            const menuItems = document.createElement("div");
            menuItems.classList.add("item-" + i);
            menuDiv.append(menuItems);
          }
          menuContent.append(menuDiv)

          const food = document.querySelector(".item-1"),
                drinks = document.querySelector(".item-2"),
                dessert = document.querySelector(".item-3"),
                foodTitle = document.createElement("h1"),
                drinkTitle = document.createElement("h1"),
                dessertTitle = document.createElement("h1"),
                foodIcon = new Image(),
                drinkIcon = new Image(),
                dessertIcon = new Image();

                    foodIcon.src = food_namespaceObject;
                    drinkIcon.src = drinks_namespaceObject;
                    dessertIcon.src = dessert_namespaceObject;  

                    food.append(
                        foodIcon,
                        foodTitle,
                    )
                    drinks.append(
                        drinkIcon,
                        drinkTitle,
                    )
                    dessert.append(
                        dessertIcon,
                        dessertTitle,
                    )

                    foodTitle.textContent = "FOOD";
                    drinkTitle.textContent = "DRINKS";
                    dessertTitle.textContent = "DESSERT";



                    const setCategory = (title, elem) => {
                        const target = document.createElement("h2");
                                target.textContent = title;
                                elem.append(target);
                    }
                    
                    for (let i = 0; i < 10; i++) {
                        const foodPara = document.createElement("p"),
                              items = {
                                "Pares": 110,
                                "Mami": 120,
                                "Pares Mami": 130,
                                "Bacsilog": 140,
                                "Overload": 150,
                              };
                        i === 5 ? setCategory("PRICE", food) : null;
                        if (i < 5 ) {
                            if (i === 0) {
                                setCategory("DISH", food);
                            }
                            foodPara.textContent = Object.keys(items)[i];

                        }
                        else if (i >= 5 && i < 10) {
                            foodPara.textContent = "$ "+Object.values(items)[i-5];
                        }
                        food.append(foodPara);
                    }

                    for (let i = 0; i < 10; i++) {
                        const drinksPara = document.createElement("p"),
                              items = {
                                "Water": 10,
                                "Coke": 20,
                                "Coffee": 30,
                                "Tea": 40,
                                "Alcohol": 50,
                              };
                        i === 5 ? setCategory("PRICE", drinks) : null;
                        if (i < 5 ) {
                            if (i === 0) {
                                setCategory("BEVERAGE", drinks);
                            }
                            drinksPara.textContent = Object.keys(items)[i];
                        }
                        else if (i >= 5 && i < 10) {
                            drinksPara.textContent = "$ "+Object.values(items)[i-5];
                        }
                        drinks.append(drinksPara);
                    }

                    for (let i = 0; i < 10; i++) {
                        const dessertPara = document.createElement("p"),
                              items = {
                                "Small Cake": 60,
                                "Medium Cake": 70,
                                "Cake": 80,
                                "Large Cake": 90,
                                "Very Large Cake": 100,
                              };
                        i === 5 ? setCategory("PRICE", dessert) : null;
                        if (i < 5 ) {
                            if (i === 0) {
                                setCategory("SWEETS", dessert);
                            }
                            dessertPara.textContent = Object.keys(items)[i];
                        }
                        else if (i >= 5 && i < 10) {
                            dessertPara.textContent = "$ "+Object.values(items)[i-5];
                        }
                        dessert.append(dessertPara);
                    }
}


;// CONCATENATED MODULE: ./src/map.svg
const map_namespaceObject = __webpack_require__.p + "a98779f1203cea8c767a.svg";
;// CONCATENATED MODULE: ./src/contact.js



const renderContact = () => {
    const contactContent = document.querySelector("#content"),
          contactDiv = document.createElement("div"),
          detailsDiv = document.createElement("div"),
          contTitle = document.createElement("h1"),
          contTxt = document.createElement("h2"),
          locTxt = document.createElement("h2"),
          locImg = new Image();


          contTitle.textContent = "Have any concerns or questions?";
          contTxt.textContent = "Contact us by using the details below";
          locTxt.textContent = "Or visit us in our location";
          locImg.src = map_namespaceObject;
          
          contactDiv.classList.add("cont");
          detailsDiv.classList.add("details");

          for (let i = 0; i < 2; i++) {
            const detailTitle = document.createElement("h2"),
                  detailTxt = document.createElement("p");
            i === 0 ? detailTitle.textContent = "Telephone Number:" :
                      detailTitle.textContent = "Email:";
            detailsDiv.append(detailTitle)

            i === 0 ? detailTxt.textContent = "+123-456-7890" :
                      detailTxt.textContent = "placeholder@email.com"
            detailTitle.appendChild(detailTxt);       
          }  
          
        contactDiv.append(
            contTitle,
            contTxt,
            detailsDiv,
            locTxt,
            locImg,
        );

        contactContent.append(contactDiv);
}


;// CONCATENATED MODULE: ./src/index.js






const render =(() => {
    const getContainer = document.querySelector("#content");
    const getBtn = document.querySelectorAll("button");
    renderLanding();

    const getAbout = document.querySelector(".about");
    getAbout.addEventListener("click", () => {
        getBtn.forEach((button) => button.classList.remove("active"));
        getContainer.innerHTML = "";
        renderLanding();
    });

    const getMenu = document.querySelector(".menu");
    getMenu.addEventListener("click", (e) => {
        getBtn.forEach((button) => button.classList.remove("active"));
        getMenu.classList.add("active");
        getContainer.innerHTML = "";
        renderMenu();
    })

    const getContact = document.querySelector(".contact");
    getContact.addEventListener("click", () => {
        getBtn.forEach((button) => button.classList.remove("active"));
        getContact.classList.add("active");
        getContainer.innerHTML = "";
        renderContact();
    })
})();


/******/ })()
;