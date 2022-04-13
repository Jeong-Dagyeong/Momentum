const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // 크롬의 localstorage의 key값과 같다 

let toDos = []; 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // setItem => 데이터 추가
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // target?
    li.remove();
    // console.log(typeof li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // console.log(li.id);
    saveToDos();
}

function paintToDo(newToDo) { // list만드는 함수
    // console.log("I will paint", newToDo);
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; // obj의 text
    const button = document.createElement("button");
    button.innerText = "X"; 
    // setAttribute 정리
    // button.setAttribute("todo-list", "pngwing.com.png");
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    // console.log(li); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { // input=text에 들어가는 부분 
    event.preventDefault();
    // console.log(toDoInput.value);
    const newToDo = toDoInput.value; //input의 value를 새로운 변수에 복사
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj); // Array로 만든다
    paintToDo(newToDoObj);  // paintToDo의 ()안에 newToDoObj주기
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit); // input에 enter 쳤을 때 submit

function sayHello(item) {
    console.log("This is the trun of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY); // getItem => 데이터 읽기

// console.log(savedToDos);
if(savedToDos !== null) { // 저장된 todo
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 이전의 todo 저장된것 불러오기
    // console.log(savedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
}

