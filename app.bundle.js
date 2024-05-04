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

;// CONCATENATED MODULE: ./src/logo.png
const logo_namespaceObject = __webpack_require__.p + "b2bb8f690d3696108781.png";
;// CONCATENATED MODULE: ./src/food-icon.svg
const food_icon_namespaceObject = __webpack_require__.p + "668e2d0adecfbdcd0fce.svg";
;// CONCATENATED MODULE: ./src/call-icon.svg
const call_icon_namespaceObject = __webpack_require__.p + "f4d588eb143ef8cb22d5.svg";
;// CONCATENATED MODULE: ./src/landing-page.js





const renderLanding = () => {
    const landingContent = document.querySelector("#content"),
          btn = document.querySelector(".about");
            btn.classList.add("active");

    // Create first section
    const firstDiv = document.createElement("div"),
          myLogo = new Image(),
          bigText = document.createElement("h1"),
          smallText = document.createElement("p");
          
            firstDiv.setAttribute("class", "first");
            myLogo.src = logo_namespaceObject;
            myLogo.setAttribute("class", "logo");
            myLogo.setAttribute("alt", "Logo image");
            bigText.textContent = "PINARES, PINIPAW, INOVERLOAD";
            smallText.textContent = 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            bigText.append(smallText);

    firstDiv.append(
        myLogo,
        bigText,
    );

    // Create second section
    const secondDiv = document.createElement("div");
            secondDiv.setAttribute("class", "second");

    // second section part 1
    const secondDivP1 = document.createElement("div"),
          foodImg = new Image(),
          p1h1 = document.createElement("h1"),
          p1h2 = document.createElement("h2"),
          p1btn = document.createElement("button");

            secondDivP1.setAttribute("class", "second-p1");
            foodImg.src = food_icon_namespaceObject;
            foodImg.setAttribute("class", "food");
            foodImg.setAttribute("alt", "Food image");
            p1h1.textContent = "Hungry?";
            p1h2.textContent = "Check out our menu!";
            p1btn.textContent = "Click here";


    secondDivP1.append(
        foodImg,
        p1h1,
        p1h2,
        p1btn
    );

    // second section part 2
    const secondDivP2 = document.createElement("div"),
          contactImg = new Image(),
          p2h1 = document.createElement("h1"),
          p2h2 = document.createElement("h2"),
          p2btn = document.createElement("button");

            secondDivP2.setAttribute("class", "second-p2");
            contactImg.src = call_icon_namespaceObject;
            contactImg.setAttribute("class", "contact-img");
            contactImg.setAttribute("alt", "Contact us image");
            p2h1.textContent = "Have concerns?";
            p2h2.textContent = "Contact Us!";
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

    landingContent.append(
        firstDiv,
        secondDiv,
    );

    return landingContent;
};




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
                foodTitle = document.createElement("h1");

                const dish = document.createElement("h2");
                      
                    food.append(
                        foodTitle,
                        dish
                    )

                    foodTitle.textContent = "FOOD";
                    
                   
                    const price = document.createElement("h2");
                    
                    for (let i = 1; i < 11; i++) {
                        const foodPara = document.createElement("p"),
                              items = ["Pares", "Mami", "Pares Mami", "Pares Overload", "Pipaw Overload",
                                       "100", "110", "120", "130", "140"];
                       
                        if (i < 6 ) {
                            dish.textContent = "DISH";
                            foodPara.textContent = items[i-1];
                        }
                        else if ( i === 6){
                            food.append(price);
                            price.textContent = "PRICE";
                            foodPara.textContent = items[i-1];
                        }
                        else {
                            foodPara.textContent = items[i-1];
                            
                        }
                        food.append(foodPara);
                    }


                
                


    return menuContent;
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
        renderLanding()
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
    })
})();


/******/ })()
;