function positiveSum(arr) {
var positiveSum = 0;
for (i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
positiveSum = positiveSum + arr[i];
}
}
return positiveSum;
}

//________________________________
//Daily Calorie Requiremen

function calorie (member){
const factor = {
"little activity": 1.20,
"moderately active": 1.55,
"very active": 1.70,
"extremely active": 1.9
}
let energy = 0;
if (member[1] === "f") {
  energy = (10 * member[4] + 6.25 * member[3] - 5 * member[2] - 161) * factor[member[5]];
} else if (member[1] === "m"){
  energy = (10 * member[4] + 6.25 * member[3] - 5 * member[2] + 5) * factor[member[5]];
}
energy = energy *100;
var ccall = Math.round(energy)/100;
ccall = ccall.toFixed(2);
member = member[0] + "´s" + " daily calorie requirement is " + ccall + " kcal.";
return member;
}
