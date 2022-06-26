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
      function openTab(evt, Services, arrows) {
    var i, tabcontent, tablinks, tabArrow;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
     
    tabArrow = document.getElementsByClassName("arrow");
    for (i = 0; i < tabArrow.length; i++) {
      tabArrow[i].style.display = "none";
    }
   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
     
    document.getElementById(arrows).style.display = "block";
    document.getElementById(Services).style.display = "block";
    evt.currentTarget.className += " active";
   
  }
   
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
const select = document.querySelector('.option')


const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let softwares = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  softwares.forEach(software => {
    const isVisible =
      software.name.toLowerCase().includes(value) ||
      software.current_releases.toLowerCase().includes(value)
    software.element.classList.toggle("hide", !isVisible)
    console.log(softwares)
  })
})

fetch("https://enigmatic-coast-25791.herokuapp.com/softwares")
  .then(res => res.json())
  .then(data => {
    softwares = data.map(software => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = software.name
      body.textContent = software.current_releases
      userCardContainer.append(card)
      return { name: software.name, current_releases: software.current_releases ,element: card }
    })
  })










  