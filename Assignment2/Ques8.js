const readline=require("readline/promises");
const {stdin:input, stdout:output}=require("process");
const rl=readline.createInterface({input, output});

async function main(){
    let x=await rl.question("String 1 - ");
    let y=await rl.question("String 2 - ");
    x+=y;
    console.log("After concatenation - ", x);
    rl.close();
}
main();