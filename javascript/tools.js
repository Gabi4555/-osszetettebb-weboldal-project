
let material = "iron"

function clickhandler2(anyag){
    switch(anyag) {
        case 'Wood':
          material = "wood"
     
          break;
        case 'Stone':
            material = "stone"
          // code block
          break;
          case 'Iron':
            material = "iron"
            // code block
            break;
            case 'Gold':
                material = "gold"
                // code block
                break;
                case 'Diamond':
                    material = "diamond"
                    // code block
                    break;
                    case 'Netherite':
                        material = "netherite"
                      // code block
                      break;
        default:
            material = "iron"
          alert("material error")
      }





}

function clickhandler(tool) {
    switch(tool) {
        case 'Skeleton':
          
          fetch('../jsons/skeleton.json')
                .then(response => response.json())
                .then(mob_data => { 
                  document.querySelector("#health").innerHTML = mob_data.health
                  document.querySelector("#damage").innerHTML = mob_data.damage
                  document.querySelector("#other").innerHTML = mob_data.other
                  document.querySelector("#behivor").innerHTML = mob_data.behivor
                  document.querySelector("#mod_image").style = mob_data.image
                  document.querySelector("#mob_name").innerHTML = mob_data.name
                  document.querySelector("#mob_descripton").innerHTML = mob_data.descripton
                })
          break;
        case 'Zombie':
          // code block
          break;
        default:
          alert("Tool error")
      }



}


