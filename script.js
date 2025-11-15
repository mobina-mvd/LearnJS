// console.log("Hello Friends");
// console.error("Error Log");
// console.group("name");
// console.log("L1");
// console.error("E1");
// console.warn("W1");
// console.groupEnd();

// let x, y, z;
// const arr = [1, 3, 5];
// const obj = {
//   name: "ali",
//   family: "mvd",
//   age: 25,
// };
// console.log(arr, typeof arr);
// console.log(obj, typeof obj);

// let x = "10.5";
// x = Math.round(x);
// let x = 2131;
// x = x.toString();
// let jx = JSON.stringify(x);
// let jxP = JSON.parse(jx);

// let jArr = JSON.stringify(arr);
// x = Boolean(x);
// console.log(jArr, typeof jArr);

// let string = "mobina";
// let arr = Array.from(string);
// console.log(arr, typeof arr);
// arr.forEach((element) => {
//   console.log(element);
// });

// let arr = string...;
// let y = JSON.stringify(obj);
// let yy = JSON.parse(y);
// let xx = string.split("i");
// console.log(xx, typeof xx);

// const s = new String("mobina");

// console.log(s);
// console.log(parseInt(Math.random() * 10));

// console.log(Math.random(1, 10));

// اگر بخوای اعداد صحیح بین min و max (شامل هر دو) بگیری:
// let max = 10;
// let min = 0;
// let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomInt);

// تمرین 2 : ماشین حساب ساده

// let Num1 = Number(prompt("عدد اول"));
// let Num2 = Number(prompt("عدد دوم"));

// console.log(Num1, typeof Num1, Num2, typeof Num2);

// let Sum = Num1 + Num2;
// let Changed = Num2 > Num1 ? ([Num1, Num2] = [Num2, Num1]) : false;

// let Subtraction = Num1 - Num2;
// let Multiplication = Num1 * Num2;
// let Division = Num1 / Num2;

// if (Changed) {
//   [Num1, Num2] = [Num2, Num1];
// }
// console.log(
//   `Numbers Are ${Num1} and ${Num2}. and Sum ${Sum} , Subtraction ${Subtraction} , Multiplication ${Multiplication} AND Division Is ${Division}. Finish`
// );

// تمرین 3 : آرایه اسامی

// let NameArr = [];
// for (let i = 1; i <= 5; i++) {
//   NameArr.push(prompt(`اسم شماره ${i}:`));
// }

// console.log(NameArr, NameArr.length);

// NameArr.forEach((e) => {
//   console.log(e);
// });
// let NewNameArr = NameArr.splice(2);
// console.log(NameArr);

let friends = ["نگار", "علی", "محمد", "رضا", "سعید"];

// friends.pop();
// friends.push("ستاره");

// console.log(friends.length);

// friends.splice(2, 1);
// friends.push("سحر");

// friends.splice(2, 1, "سحر");

// console.log(`تعداد اولیه آرایه : `, friends.length);

// friends.splice(1, 1);

// console.log(`تعداد آرایه بعد از حذف : `, friends.length);

// friends.splice(1, 0, "کیانا");

// friends.forEach((e, i) => {
//   console.log(i + 1 + "- " + e);
// });

// تمرین شماره 4 - آبجکت

// let userObj = {
//   name: "mobina",
//   age: 21,
//   city: "tehran",
// };

// console.log(userObj.name);

// userObj.job = "No Job";

// console.log(userObj);
// console.log(Object.keys(userObj).length);
// console.log(Object.values(userObj));
// let userObjArr = Object.entries(userObj);
// let userArr = userObjArr.flat();
// console.log(userArr);

// تمرین شماره 5 - شرط ها

// let userAge = prompt("سن خود را وارد کنید:");

// userAge = parseInt(userAge);

// if (userAge >= 18) {
//   console.log("به برنامه من خوش آمدی گل قشنگم!!!");
// } else {
//   console.error("بچه پر رو کی اجازه داد بیاد سر سیستم؟؟؟؟");
// }

// userAge >= 18
//   ? console.log("به برنامه من خوش آمدی گل قشنگم!!!")
//   : console.error("بچه پر رو کی اجازه داد بیاد سر سیستم؟؟؟؟");

// تمرین شماره 6 - حلقه ها

// let numbers = [];

// for (let i = 0; i < 20; i++) {
//   numbers.push(i + 1);
// }

// numbers.forEach((e) => {
//   console.log(e);
// });

// for (let i = 0; i < 20; i++) {
//   console.log(i + 1);
// }
// console.log(numbers);

// تمرین شماره 7 - todo list

let tasks = [];

// function addTask(task) {
//   tasks.push(task);
// }

// addTask("جاوااسکریپت یادگیری");
// addTask("سئو یادگیری");

// console.log(tasks);

// function addTask(task) {
//   tasks.push(task);
//   console.log("وظیفه اضافه شده : ", task);
//   console.log("فهرست فعلی وظایف : ");

//   tasks.forEach((t, i) => {
//     console.log(i + 1 + " - " + t);
//   });
// }

// addTask("یادگیری جاوا اسکریپت");
// addTask("تمرین کردم سئو");
// addTask("بگیر بخوا بسه دیگه!!!");

// function addTask(task) {
//   tasks.push(task);
// }

// function showTasks() {
//   console.log("لیست کامل وظایف: ");
//   tasks.forEach((t, i) => {
//     console.log(i + 1 + " _ " + t);
//   });
// }

// function removeTask(index) {
//   tasks.splice(index, 1);
//   showTasks();
// }

// addTask("تایپ سوال");
// addTask("تمرین جاوا اسکریپت");
// addTask("خوردن قهوه");
// showTasks();

// removeTask(2);

// function addTask(task) {
//   tasks.push(task);
//   console.log(`وظیفه جدید اضافه شد : ${task}`);
// }

// function showTasks() {
//   console.log("وظایف شما تا کنون:");
//   tasks.forEach((t, i) => {
//     console.log(i + 1 + " - " + t);
//   });
// }

// function removeTask(index) {
//   tasks.splice(index, 1);
//   showTasks();
// }

// while (true) {
//   let input = prompt(
//     "وظایف خود را وارد کنید و برای نمایش لیست exit را وارد کنید."
//   );
//   if (input === "exit") break;
//   addTask(input);
// }

// showTasks();

// تمرین شماره 8 - رنگ پس زمینه با دکمه
const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
