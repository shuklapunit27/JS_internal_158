// const readline=require("readline");
// const { Readline } = require("readline/promises");
// const rl=Readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
const readline=require("readline/promises");
const {stdin:input, stdout:output}=require("process");
// create readline interface
const rl=readline.createInterface({input, output});

async function main(){
    const n1= await rl.question(" enter 1st number ");
    const n2= await rl.question(" enter 2nd number ");
    const sum=Number(n1)+Number(n2);
    console.log(`The sum is ${sum}`);
    rl.close();
}
main()