const readline=require("readline/promises")
const {stdin:input, stdout:output}=require("process");
// create readline interface
const rl=readline.createInterface({input, output});
async function main(){
    const num=await rl.question("Number ");
    const num1=Number(num);
    if(num1%2==0){
        console.log("Even")
    }
    else{ console.log("Odd")};
    rl.close();
}
main();