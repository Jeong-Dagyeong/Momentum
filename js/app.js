const num = document.querySelector(".box1");
const randomNum = document.querySelector(".box2");
//const btnClick = document.querySelector(".end_form input:nth-child(1)");

//const form1 = document.querySelector(".middle_form");
const form2 = document.querySelector(".end_form");
//const form3 = document.querySelector(".hidden");
//const empty = document.querySelector(".empty");

const numMsg = document.querySelector(".numMsg");
const resultMsg = document.querySelector(".resultMsg");

function clickSubmit(event) {
    event.preventDefault();

    const rangeNum = parseInt(num.value, 10); // 입력한 범위 지정 수
    const myNum = parseInt(randomNum.value, 10); // 내가 입력한 수

    const guessNum = Math.ceil(Math.random() * rangeNum); // 범위에 맞춰서 컴퓨터가 랜덤으로 생성 한 수
    //console.log(guessNum);

    numMsg.innerText = "You chose: " + myNum + " , the machine chose: " + guessNum + ".";
    if(myNum == guessNum){
        resultMsg.innerText = "You won!";
    }
    else {
        resultMsg.innerText = "You lost!";
    }
}
//form2.addEventListener("click", clickSubmit);






