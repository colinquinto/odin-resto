import './menu.css';

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

export { renderMenu };