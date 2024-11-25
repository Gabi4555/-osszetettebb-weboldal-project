

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
                  document.querySelector("#mob_name").innerHTML = mob_data.name
                  document.querySelector("#mob_descripton").innerHTML = mob_data.descripton
                })
          break;
        case 'Zombie':
          fetch('../jsons/zombie.json')
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
          case 'Creeper':
            fetch('../jsons/creeper.json')
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
          case 'Spider':
            fetch('../jsons/spider.json')
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
          case 'Cow':
            fetch('../jsons/cow.json')
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
          case 'Lamb':
            fetch('../jsons/lamb.json')
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
          case 'Pig':
            fetch('../jsons/pig.json')
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
        default:
          alert("Mob error")
      }



}


