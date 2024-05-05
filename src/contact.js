import './contact.css';
import location from './map.svg';

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
          locImg.src = location;
          
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

export { renderContact }