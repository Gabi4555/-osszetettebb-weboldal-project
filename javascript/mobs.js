

function clickhandler(mob) {
    switch(mob) {
        case 'Skeleton':
          
          fetch('../jsons/skeleton.json')
                .then(response => response.json())
                .then(mob_data => { 
                //  document.querySelector()

                
                })
          break;
        case 'Zombie':
          // code block
          break;
        default:
          alert("Mob error")
      }



}


