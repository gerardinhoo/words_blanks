const button = document.querySelector("button");
const paragraph = document.querySelector("#paragraph");
const container = document.querySelector(".container");

let name = "Ronaldinho";
let nationality = "Brazil";
let firstClub = "Gremio";
let jerseyNumber = 10;



const ballIsLife = () => {
  const something = () => {
    let dinhoLife;
    dinhoLife = `${name} is a legend soccer player from ${nationality}. His first soccer club was ${firstClub}. He wears the legendary number ${jerseyNumber}.`
    paragraph.innerHTML = dinhoLife;
  }

  
  button.addEventListener("click", () => {
    if(paragraph.style.display === "none") {
      paragraph.style.display = "block"
    } else {
      paragraph.style.display = "none"
    }
    something()
  })
}

ballIsLife();





