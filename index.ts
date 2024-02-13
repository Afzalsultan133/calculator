import inquirer from "inquirer";
async function ATM() {
    const maxAttempts = 5;
    let attempts = 0;
    let isValidUser = false;
    let remainingBalance = 1000; 

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
                default: Math.floor(Math.random()) 
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
startAgain();


