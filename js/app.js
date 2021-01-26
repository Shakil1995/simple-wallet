//login Btn event handler
const loginBtn=document.getElementById('loginBtnID');
loginBtn.addEventListener("click",function(){
    const loginArea=document.getElementById("login-area");
    loginArea.style.display="none";
    const transactionArea=document.getElementById('transaction-area');
    transactionArea.style.display="block";
})

//Deposit Btn event handler

const depositBtn=document.getElementById("addDepositBtn");
depositBtn.addEventListener("click",function(){

const depositNumber=getInputNumber("depositAmountId");

updateSpanText("currentDeposit",depositNumber);
updateSpanText("currentBalance",depositNumber);
  
  document.getElementById("depositAmountId").value="";

})


//withDraw btn handler
const withDrawBtn=document.getElementById("addWithdrawAmountId");
withDrawBtn.addEventListener("click",function(){

 const withDrawNumber=getInputNumber("withdrawAmountId");
 console.log(withDrawNumber);

})

function getInputNumber(id){
    const amount=document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id ,depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount=depositNumber+currentNumber;
    document.getElementById(id).innerText=totalAmount;
}


