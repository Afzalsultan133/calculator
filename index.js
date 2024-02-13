import inquirer from "inquirer";
/*async function askQuestion() {
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
startAgain()*/
/*async function ATM() {
    const maxAttempts = 5; // Set the maximum number of attempts
    let attempts = 0;
    let isValidUser = false;
    let remainingBalance = 1000; // Assuming an initial balance of 1000, you can set this to any value

    while (!isValidUser && attempts < maxAttempts) {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "UserID",
                message: "Please enter your User ID"
            },
            {
                type: "number",
                name: "Password",
                message: "Enter your password"
            }
        ]);

        const validUserId = 123;
        const validPassword = 789;

        if (Number(answer.UserID) === validUserId && answer.Password === validPassword) {
            isValidUser = true;
            console.log("You can proceed");
        } else {
            attempts++;
            console.log(`Invalid User ID or Password. Please try again. Attempt ${attempts}/${maxAttempts}`);
        }
    }

    if (isValidUser) {
        // Once a valid user is identified, proceed with the rest of the prompts
        const transactionDetails = await inquirer.prompt([
            {
                type: "list",
                name: "accountType",
                message: "Choose an account type",
                choices: ["Current", "Savings"]
            },
            {
                type: "list",
                name: "transaction",
                message: "Select a transaction",
                choices: ["Fast cash", "Withdraw"]
            },
            {
                type: "number",
                name: "amount",
                message: "Enter your amount",
                default: Math.floor(Math.random())  // Generates a random amount between 1 and 500
            }
        ]);

        const transactionAmount = transactionDetails.amount;

        if (transactionAmount > remainingBalance) {
            console.log("Insufficient balance. Transaction cannot be completed.");
        } else {
            remainingBalance -= transactionAmount;

            console.log("Transaction successful!");
            console.log("Remaining balance:", remainingBalance);
        }
    } else {
        console.log("Exceeded maximum attempts. Exiting the program.");
    }
}

async function startAgain() {
    do{
        await ATM();
        var again=await inquirer.prompt(
            {
                type:'input',
                name:'continue',
                message:`Do you want to continue? (yes/no)`
            }
        )
    }
    while (again.continue=='y'||again.continue=='Y') {
        
    }
}
startAgain();*/
/*let toDoes: string[]=[];
let loop=true;
while (loop){
    const answers :{
        TODO:string,
        addMore:boolean,
    }= await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message:"What do you want to add in your todo?"
        },{
            type:"confirm",
            name:"addMore",
            message:"Do you want to add more tasks?",
            default:false
        }
    ])
    const {TODO,addMore}=answers;
    console.log(answers)
    loop=addMore;
    if(TODO){
        toDoes.push(TODO)
    }
    else{
        console.log("Kindly add valid input")
    }
}
if(toDoes.length>0){
    console.log("Your Todos are as follows:\n");
    toDoes.forEach(toDoe=>{
        console.log(toDoe)

    })
}
else{
    console.log("No TODOES found")
}*/
let todo = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Enter a task"
        }, {
            type: "confirm",
            name: "ADMORE",
            message: "Do You Want To Add More Tasks?",
            default: false
        }
    ]);
    const { TODO, ADMORE } = answer;
    console.log(answer);
    loop = ADMORE;
    if (todo.length > 0) {
        console.log("Your Todos are as follows:\n");
        todo.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("No todes found");
    }
}
