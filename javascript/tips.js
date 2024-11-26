

let random_szam = 1
let elobbi_szam = 1
let mas = false
function clickhandler() {
    mas = false
while (mas == false) {
    random_szam = Math.floor(Math.random() * 10) + 1;
    if (random_szam != elobbi_szam) {
         mas = true
         elobbi_szam = random_szam

        

         
    }
}




fetch('../jsons/tips.json')
.then(response => response.json())
                .then(tips => { 
                    document.querySelector("#tippek").innerHTML =  tips['tip_' + random_szam]
                    





                })



}
