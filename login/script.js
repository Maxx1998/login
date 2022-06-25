"use strict";
const account1={
    owner:"Tina Sharma",
    username:"Tina01",
    pin:1234,
    balance:9000
};

const account2={
    owner:"Aisha Khan",
    username:"Aisha02",
    pin:4321,
    balance:15000
};

const account3={
    owner:"Gurpreet Singh",
    username:"Gurpreet03",
    pin:1111,
    balance:4000
};

const account4={
    owner:"Mary Thomas",
    username:"Mary03",
    pin:2222,
    balance:8000
};

const accounts=[account1,account2,account3,account4];
let currentAccount;
document.querySelector(".login-btn").addEventListener("click",function(e)
{
e.preventDefault();

currentAccount=accounts.find(acc=>acc.username===(document.querySelector(".username").value));
if(currentAccount)
{
    //console.log(currentAccount);
if(currentAccount?.pin===(Number(document.querySelector(".pin").value)))
{
document.querySelector(".username").value= document.querySelector(".pin").value="";
document.querySelector(".balance").textContent=`₹${currentAccount.balance}`;
document.querySelector(".balance").style.opacity=100;
document.querySelector(".message").textContent=`${currentAccount.owner.split(" ")[0]},
 your balance is`;
}
else
{
alert("Enter correct pin!");
}
}
else
{
    alert("Enter correct username!");
}
});

document.querySelector(".logout").addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector(".balance").style.opacity=0;

});