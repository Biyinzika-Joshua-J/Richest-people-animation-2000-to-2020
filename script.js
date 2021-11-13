import { data } from "./richest.js";
import { CreateAnimations } from "./createAnimations.js";

let theRichestMen = [...data];
let richestContainer = document.querySelector(".richest_list");
let year = document.querySelector('.year');
const timer = ms => new Promise(res => setTimeout(res, ms));
let interval;

let animations = CreateAnimations(theRichestMen);
console.log(animations);

function animate(data,i,j, currentyear){


    
   
    year.textContent = `${currentyear}`
    richestContainer.innerHTML = null;
    for (let t = 0; t < data[i][j].length; t++) {
      let name = data[i][j][t].name;
      let networth = data[i][j][t].netwoth;
      let position = data[i][j][t].position;
      let image = data[i][j][t].image;
      let nation = data[i][j][t].nation;

      let richMan = `<div class='position'>${position}</div>  <div class="person_worth" style="width:${networth}%">
                                          <h3 class='name'>${name}</h3>
                                      </div>
                                          <img class="avatar" src="${image}" alt="image">
                                          <img class="flag" src="${nation}" alt="nation">
                                          <h3 class='money'>$${networth} billion</h3>`;

      let richManContainer = document.createElement("div");
      richManContainer.className = "person";
      richManContainer.innerHTML = richMan;

      richestContainer.appendChild(richManContainer);
     
  }

}

async  function displayTheRichestPeopleData (data) {
  let currentYear = 2000;


  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      await timer(100);
     animate(data,i,j, currentYear)
    
      
  }

  currentYear++;
}


};

displayTheRichestPeopleData(animations);



