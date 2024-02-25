let timer =30;
let ele =document.querySelector(".timer");
function printNumber(){
    timer--;
    ele.innerHTML = "00:" +timer;
    if (timer==0){
        clearInterval(printer);
    }
    // console.log(timer);
}
const printer =setInterval(printNumber,1000)

// (function (){
//     let sec =30;
//     timer =setInterval(() =>{
//         ele.innerHTML =''  +sec;
//         sec--;
//     },)
//         if(timer==0){
//             clearInterval(ele);
//         }

// })()
// console.log(tim);
