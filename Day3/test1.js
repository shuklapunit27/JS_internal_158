let fruits=["apple", "banana", "mango", "grapes", "papaya"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
fruits.push("papaya2");
fruits.pop();
fruits.unshift("kiwi")
fruits.shift();
let x=fruits.includes("mango");
console.log(" mango presest - ", x);
console.log("index of banana - ", fruits.indexOf("banana"));
for(let val in fruits){
    console.log(val);
}