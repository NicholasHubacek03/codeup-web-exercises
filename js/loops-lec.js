//--------------------------------------while------------------------------------
// let i = 1;
//
// while(i <= 10){
//     console.log("while loop iteration #" + i);
//     i++
//     // i += 2;
//     // 1. i + 2
//     // 2. i = i + 2
// }


// let yes = true;
// while(yes){
//     yes = confirm("click okay to continue");
// }


//--------------------------------------do-while------------------------------------
// let yes;
//
// do{
//     yes = confirm("click okay to continue");
// }while(yes);

// let y = 0;
// do{
//     console.log('while loop iteration #' + y)
//     y++;
// }while(y < 10);

//---------------------------------------for-loop------------------------------------
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let school = "codeup";

// for(let i = 0; i < school.length; i++){
//     console.log(school.charAt(i))
// }


//---------------------------------------breaks and continues------------------------------------
// for(let i = 1; i <= 10; i++){
//     console.log("current iteration: " + i)
//     if(i % 2 !== 0) {
//        continue;
//     }
//     console.log(i);
// }

let cont;
for(let i = 1; i <= 10; i++){
    console.log("here is book " + i);
    cont = confirm("click okay to continue");
    if(!cont){
        continue;
    }
    console.log("you finished book");
}
