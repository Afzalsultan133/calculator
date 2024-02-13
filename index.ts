import inquirer from "inquirer";

async function askQuestion() {
    await inquirer.prompt([
        {
            type:'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Addition', 'Subtraction','Multiplication','Division']
        },{
            type:'number',
            name:'num1',
            message:'Enter first number'
        },{
            type:'number',
            name:'num2',
            message:'Enter second number'
        }
    ]).then((answer)=>{
if(answer.action=='Addition'){
    console.log(`${answer.num1}+${answer.num2}=${answer.num1+answer.num2}`)
}
else if (answer.action==='Subtraction'){
    console.log(`${answer.num1}-${answer.num2}=${answer.num1-answer.num2}`)
}
else if (answer.action==="Multiplication"){
    console.log(`${answer.num1}*${answer.num2}=${answer.num1*answer.num2}`)
}
else if(answer.action=='Division'){
    console.log(`${answer.num1}/${answer.num2}=${answer.num1/answer.num2}`)
}
    })
}
//askQuestion()
async function startAgain() {
    do{
        await askQuestion();
        var answer=await inquirer.prompt(
            {
                type:'input',
                name:'restart',
                message:"Do you want to perform another operation?(yes/no)" }
                )
    }while (answer.restart=='Y'||answer.restart=='y') {
        
    }
}
startAgain()


