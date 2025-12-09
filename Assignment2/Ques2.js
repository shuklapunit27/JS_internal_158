const readline=require("readline/promises");
const {stdin:input, stdout:output}=require("process");
// create readline interfcae
const rl=readline.createInterface({input, output});
async function main(){
    const name=await rl.question("Enter name ");
    console.log(`Hello ${name}`);
    rl.close();
}
main();