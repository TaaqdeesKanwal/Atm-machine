#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance=20000
let pinCode=12345

let pinAnswer= await inquirer.prompt([{
    name:"pin",
    type:"number",
    message:"Enter Your Pin Number",

}])

if (pinAnswer.pin === pinCode){
    console.log("Correct Pin code")


   let operationAns= await inquirer.prompt([{
        name:"operation",
        message:"Please Select option",
        type:"list",
        choices:["Withdraw","Fast Cash","Check Balance",]
    }])


    if(operationAns.operation === "Withdraw"){
      let amountAns =await  inquirer.prompt([{
            name:"amount",
            type:"number",
            message:"Enter Your Amount",
        }])


       if (amountAns.amount <= myBalance ){
        let newBalance=myBalance -= amountAns.amount
console.log(`Your transaction successfully completed and your remaining balance is ${newBalance}`) 
       }
       else{
        console.log("you have insufficient balance");
       }
    }

    else if (operationAns.operation === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([{
            name : "fastCash",
            type : "list",
            message:"Please select your Amount",
            choices:["5000","10000","15000"]
        }])
        let newBalance=myBalance -= fastCashAns.fastCash
        console.log(`Your transaction successfully completed and your remaining balance is ${newBalance}`) 
    }

    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Current Balance is ${myBalance}`)}
    
else{
    console.log("Incorrect Pin code")
}}