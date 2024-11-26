
let material = "iron"

function clickhandler2(anyag){
    switch(anyag) {
        case 'Wood':
          material = "wood"
          clickhandler('Pickaxe')
     
          break;
        case 'Stone':
            material = "stone"
            clickhandler('Pickaxe')
          // code block
          break;
          case 'Iron':
            material = "iron"
            clickhandler('Pickaxe')
            // code block
            break;
            case 'Gold':
                material = "gold"
                clickhandler('Pickaxe')
                // code block
                break;
                case 'Diamond':
                    material = "diamond"
                    clickhandler('Pickaxe')
                    // code block
                    break;
                    case 'Netherite':
                        material = "netherite"
                        clickhandler('Pickaxe')
                      // code block
                      break;
        default:
            material = "iron"
          alert("material error")
      }





}

function clickhandler(tool) {
    switch(tool) {
        case 'Pickaxe':
          
          fetch('../jsons/pickaxe.json')
                .then(response => response.json())
                .then(tool_data => { 
                  
                  document.querySelector("#name").innerHTML = tool_data.name
                  document.querySelector("#durability").innerHTML = tool_data[material + '_durability']
                  document.querySelector("#speed").innerHTML = tool_data[material + '_speed']
                  document.querySelector("#other").innerHTML = tool_data[material + '_other']
                  document.querySelector("#tool_descripton").innerHTML = tool_data.descripton
                  document.querySelector("#mod_image").style = tool_data[material + '_image']
                  document.querySelector("#speed_info").innerHTML = tool_data.speed_explonation
                })
          break;
        case 'Axe':
          fetch('../jsons/axe.json')
          .then(response => response.json())
          .then(tool_data => { 
            
            document.querySelector("#name").innerHTML = tool_data.name
            document.querySelector("#durability").innerHTML = tool_data[material + '_durability']
            document.querySelector("#speed").innerHTML = tool_data[material + '_speed']
            document.querySelector("#other").innerHTML = tool_data[material + '_other']
            document.querySelector("#tool_descripton").innerHTML = tool_data.descripton
            document.querySelector("#mod_image").style = tool_data[material + '_image']
            document.querySelector("#speed_info").innerHTML = tool_data.speed_explonation
          })

          break;
          case 'Hoe':
            fetch('../jsons/Hoe.json')
            .then(response => response.json())
            .then(tool_data => { 
              
              document.querySelector("#name").innerHTML = tool_data.name
              document.querySelector("#durability").innerHTML = tool_data[material + '_durability']
              document.querySelector("#speed").innerHTML = tool_data[material + '_speed']
              document.querySelector("#other").innerHTML = tool_data[material + '_other']
              document.querySelector("#tool_descripton").innerHTML = tool_data.descripton
              document.querySelector("#mod_image").style = tool_data[material + '_image']
              document.querySelector("#speed_info").innerHTML = tool_data.speed_explonation
            })

          break;
          case 'Shovel':
            fetch('../jsons/shovel.json')
            .then(response => response.json())
            .then(tool_data => { 
              
              document.querySelector("#name").innerHTML = tool_data.name
              document.querySelector("#durability").innerHTML = tool_data[material + '_durability']
              document.querySelector("#speed").innerHTML = tool_data[material + '_speed']
              document.querySelector("#other").innerHTML = tool_data[material + '_other']
              document.querySelector("#tool_descripton").innerHTML = tool_data.descripton
              document.querySelector("#mod_image").style = tool_data[material + '_image']
              document.querySelector("#speed_info").innerHTML = tool_data.speed_explonation
            })

          break;
        default:
          alert("Tool error")
      }



}


