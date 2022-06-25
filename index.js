function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";

  }



const search =document.getElementById('search');
const matchList= document.getElementById('match-list')
const searchButton = document.getElementById('form')
searchButton.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(e.target.name.value === "Node js"){
    let card = document.createElement("h3")
    card.setAttribute("class","details")
    card.textContent = "Node.js (Node) is an open source development platform for executing JavaScript code server-side"
    matchList.appendChild(card)
  }
  else if(e.target.name.value === "visual code studio"){
  let card = document.createElement("h3")
  card.setAttribute("class","details")
  card.textContent = "vs code  is an open source code editor for all languages"
  matchList.appendChild(card)

  }
  else if(e.target.name.value === "Ruby on Rails"){
    let card = document.createElement("h3")
    card.setAttribute("class","details")
    card.textContent = "Rails is a full-stack framework"
    matchList.appendChild(card)
  
    }
    else if(e.target.name.value === "Github desktop App"){
      let card = document.createElement("h3")
      card.setAttribute("class","details")
      card.textContent = "RGitHub Desktop is an open source tool that enables you to be more productive"
      matchList.appendChild(card)
    
      }
else{
  console.log("sorry sofy can't get you what you wanted.please buy me a cup of coffee ")
}
})
// console.log(searchButton)
// search softwares.json and filiter it
let searchSoftwares = () => {
    const url = "https://enigmatic-coast-25791.herokuapp.com/softwares";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          })
  // get matches to current text input
  
}

let initialize = () => {
        searchSoftwares();
  
      };
      initialize();
  