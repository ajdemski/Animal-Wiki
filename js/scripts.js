window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
  
    animalName = document.getElementById("black-bear");
    animalName.setAttribute("class", "hidden");
    animalName = document.getElementById("beaver");
    animalName.setAttribute("class", "hidden");
    animalName = document.getElementById("mountain-lion");
    animalName.setAttribute("class", "hidden");
    
    if (animalName === black-bear) {  
        animalName.removeAttribute("class");
      } else if (animalname === beaver) { 
        animalName.removeAttribute("class");
      } else (animalName === mountain-lion); { 
        animalName.removeAttribute("class");
      }
        otherAnimalMessage.removeAttribute("class");
        window.alert("Please choose from the above animals and try again");
      }
    };