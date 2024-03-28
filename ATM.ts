#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 3455;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",

})

if(pinAnswer.pin === myPin){
    console.log("Your Pin is Correct");
    
    let operationAns = await inquirer.prompt([
        {

            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "fast case", "check balance"],
    }]);

    //if user select withdraw
    if(operationAns.operation === "withdraw"){

        let amountAns = await inquirer.prompt([
            {

                name: "Amount",
                message: "Enter Your Amount",
                type: "number",

        }])
        if(amountAns.Amount <= myBalance){
            let balance = myBalance - amountAns.Amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else{
            console.log(`You Have Insufficient balance`);
        }
    }
    // if user select fast case
    else if (operationAns.operation === "fast case"){
        let fastcaseAns = await inquirer.prompt([{

            name: "amount",
            type: "list",
            choices: ["1000","3000","5000","15000"]

        }]);
        if (fastcaseAns.amount <= myBalance){
            let balance2 = myBalance - fastcaseAns.amount;
            console.log(`The remaning balance is ${balance2}`);
        }
        else{
            console.log(`You have insufficient amount`);
        }
        
        }
        else if (operationAns.operation === "check balance"){
            console.log(myBalance);
            
        }
    }

else{
    console.log("Your Pin is Worang");
}
