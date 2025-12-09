const readline=require("readline/promises");
const {stdin:input, stdout:output}=require("process");
const rl=readline.createInterface({input, output});

async function main(){
    const n1= Number(await rl.question("Number 1 -"))
    const n2= Number(await rl.question("Number 2 -"));
    const n3= Number(await rl.question("Number 3 -"));
    let largest;
    if(n1>=n2 && n1>=n3) largest=n1;
    else if(n2>=n3 && n2>=n1) largest=n2;
    else largest=n3;
    console.log(`largest - ${largest}`);
    rl.close();
}
main();