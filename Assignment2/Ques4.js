const readline=require("readline/promises");
const {stdin:input, stdout:output}=require("process");
const rl=readline.createInterface({input, output});

async function main(){
    const input=await rl.question("Enter in Celsius ")
    const c=Number(input);
    const f=((9*c)/5)+32;
    console.log(`In Fahrenheit = ${f}`);
    rl.close();
}
main();