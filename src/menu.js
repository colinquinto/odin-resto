import './menu.css';
import foodImg from './food.svg';
import drinkImg from './drinks.svg';
import dessertImg from './dessert.svg';

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

                    foodIcon.src = foodImg;
                    drinkIcon.src = drinkImg;
                    dessertIcon.src = dessertImg;  

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

export { renderMenu };