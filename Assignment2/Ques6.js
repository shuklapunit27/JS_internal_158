const readline=require("readline/promises");
const {stdin:input, stdout:output}=require("process");
const rl=readline.createInterface({input, output});

async function main(){
    const s=await rl.question("String - ");
    console.log(s.length);
    rl.close();
}
main();