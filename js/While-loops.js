// let i = 1;
// while (i < 65536){
//     i *= 2
//     console.log(i)
// }


let allCones = Math.floor(Math.random() * 50) + 50;
do{
let soldCones = Math.floor(Math.random() * 5) + 1;
    if (allCones < soldCones){
        console.log("Cannot sell you " + soldCones + " cones I only have " + allCones);
    continue;
    }


    allCones -= soldCones;
    console.log(soldCones + " cones sold....")
}while(allCones > 0)
console.log("Yay! I sold them all!")

