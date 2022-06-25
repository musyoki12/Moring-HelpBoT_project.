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

// let name =document.getElementsById(`name`).value;
// console.log(name)
// let helpBot = ()=>{
// const url = `https://enigmatic-coast-25791.herokuapp.com/softwares ${name}`
// fetch(url)
// .then(response => response.json())
//   .then(response => console.log(response));
// }


// gethelpBot();
// let name=document.getElementById("name");
// console.log(name);
// let getSoftware =()=>{
//   console.log("Software")

// }
// getSoftware();

const search =document.getElementById('search');
const matchList= document.getElementById('match-list')

// search softwares.json and filiter it
const searchSoftwares =async searchText=>{
  const res = await fetch('https://enigmatic-coast-25791.herokuapp.com/softwares')
  const softwares = await res.join();

 // console.log(softwares)
  // get matches tocurrent text input
}
// search  softwares.json and filiter it
let matches=softwares.filiter(software =>{
  const regex = newRegExp(`^${searchText}`,'gi');
  return search.name.match(regex) || software.description.match(regex);
});
if (searchText.length === 0) {
  matches = [];
}
// console.log(matches);

//show results in html
const outputHtml = matches =>{
  if(matches.length > 0){
    const html = matches.map(match =>
      `<div class="card card-body mb-1">
      <h4>${match.name}(${match.description}) <span class="text-primary">${match.capital}</span></h4>
      <small>author:${match.version}/version:${match.version}</small>
      </div> `
       ).join(" ");
      //  console.log(html)
      matchList.innerHTML =html;
  }
}

search.addEventListener('input', ()=> searchSoftwares(search.value));