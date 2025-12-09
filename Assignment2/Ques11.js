const readline=require("readline/promises")
const {stdin:input, stdout:output}=require("process")
const rl=readline.createInterface({input, output});

async function main() {
    const n=Number(await rl.question("Enter number - "));
    for(let i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
    rl.close();
}
main();