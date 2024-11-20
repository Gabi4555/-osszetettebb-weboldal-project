

function clickhandler(mob) {
    switch(mob) {
        case 'Skeleton':
          
          fetch('../jsons/skeleton.json')
                .then(response => response.json())
                .then(mob_data => { 
                  document.querySelector("#health").innerHTML = mob_data.health
                  document.querySelector("#damage").innerHTML = mob_data.damage
                  document.querySelector("#other").innerHTML = mob_data.other
                  document.querySelector("#behivor").innerHTML = mob_data.behivor
                  document.querySelector("#mod_image").style = mob_data.image
                })
          break;
        case 'Zombie':
          // code block
          break;
        default:
          alert("Mob error")
      }



}


