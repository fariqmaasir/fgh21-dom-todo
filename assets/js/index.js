const id = document.getElementById("div-todo");
const form = document.getElementById("form-todo");
const list = document.getElementById("to-do-list");
const control = document.getElementById("control");
let data = [
  { text: "TEST", timestamp: 1720703799565, finish: false },
  { text: "TEST", timestamp: 1720703799565, finish: false },
];
const checkData = window.localStorage.getItem("DATA");
const dataParse = JSON.parse(checkData);
if (checkData !== null) {
  data = dataParse;
}
const setTime = new Date().getTime();
console.log(setTime);
let setMonth = new Date(setTime).getMonth();
let setDay = new Date(setTime).getDay();
let setDate = new Date(setTime).getDate();

if (setMonth === 0) {
  setMonth = "Jan";
}
if (setMonth === 1) {
  setMonth = "Feb";
}
if (setMonth === 2) {
  setMonth = "Mar";
}
if (setMonth === 3) {
  setMonth = "Apr";
}
if (setMonth === 4) {
  setMonth = "May";
}
if (setMonth === 5) {
  setMonth = "Jun";
}
if (setMonth === 6) {
  setMonth = "Jul";
}
if (setMonth === 7) {
  setMonth = "Aug";
}
if (setMonth === 8) {
  setMonth = "Sep";
}
if (setMonth === 9) {
  setMonth = "Oct";
}
if (setMonth === 10) {
  setMonth = "Nov";
}
if (setMonth === 11) {
  setMonth = "Dec";
}
if (setDay === 0) {
  console.log();
  setDay = "Sunday";
}
if (setDay === 1) {
  setDay = "Monday";
}
if (setDay === 2) {
  setDay = "Tuesday";
}
if (setDay === 3) {
  setDay = "Wednesday";
}
if (setDay === 4) {
  setDay = "Thursday";
}
if (setDay === 5) {
  console.log("setDay");
  setDay = "Friday";
}
if (setDay === 6) {
  setDay = "Saturday";
}

(() => {
  const div = document.createElement("div");
  const date = document.createElement("div");
  const button = document.createElement("button");
  const tasks = document.createElement("div");
  date.textContent = setDay + "," + setDate + " " + setMonth;
  tasks.textContent = dataParse.length + " tasks";
  button.setAttribute("id", "addData");
  button.setAttribute("type", "button");
  button.textContent = "+";
  div.appendChild(date);
  div.appendChild(button);
  control.appendChild(div);
  control.appendChild(tasks);
})();
const btn = document.getElementById("addData");
function btnDel(num) {
  const containterData = dataParse;
  containterData.splice(num, 1);
  window.localStorage.setItem("DATA", JSON.stringify(containterData));
  displayData();
}
function btnEdt(num) {
  const containterData = dataParse;
  containterData.splice(num, 1);
  window.localStorage.setItem("DATA", JSON.stringify(containterData));
  id.classList.toggle("hide");
}
function displayData() {
  list.innerHTML = "";
  data.forEach((item, index) => {
    const divToDo = document.createElement("div");
    const control = document.createElement("div");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const divToDoList = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const time = document.createElement("div");
    const hr = document.createElement("hr");
    control.setAttribute("class", "control-display");
    button1.setAttribute("class", "control-button");
    button1.setAttribute("onclick", "btnDel(" + index + ")");
    button1.setAttribute("type", "button");
    button2.setAttribute("class", "control-button");
    button2.setAttribute("onclick", "btnEdt(" + index + ")");
    button2.setAttribute("type", "button");
    img1.setAttribute("src", "./assets/icon/trash.svg");
    img1.setAttribute("alt", "");
    img2.setAttribute("src", "./assets/icon/edit.svg");
    img2.setAttribute("alt", "");
    divToDo.setAttribute("class", "todo");
    input.setAttribute("id", "list" + (index + 1));
    input.setAttribute("type", "checkbox");
    label.setAttribute("for", "list" + (index + 1));
    label.textContent = item.text;
    button1.appendChild(img1);
    button2.appendChild(img2);
    console.log(button2);
    control.appendChild(button1);
    control.appendChild(button2);
    divToDo.appendChild(control);
    divToDoList.appendChild(input);
    divToDoList.appendChild(label);
    const times = new Date(item.timestamp);
    time.textContent =
      times > 12
        ? (times.getHours() % 12) + ":" + times.getMinutes() + " PM"
        : times.getHours() + ":" + times.getMinutes() + " AM";
    divToDo.appendChild(divToDoList);
    divToDo.appendChild(time);
    list.appendChild(divToDo);
    list.appendChild(hr);
  });
}
displayData();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target.doData.value;
  if (text === "") {
    window.alert("Reminder has not been filled in");
    return;
  }
  const rawData = {
    text,
    timestamp: new Date().getTime(),
    finish: false,
  };
  data.push(rawData);
  console.log(data);
  id.classList.toggle("hide");
  form.reset();
  window.localStorage.setItem("DATA", JSON.stringify(data));
  displayData();
});
btn.addEventListener("click", (event) => {
  id.classList.toggle("hide");
});
id.addEventListener("click", (event) => {
  id.classList.toggle("hide");
});
form.addEventListener("click", (event) => {
  event.stopPropagation();
});
