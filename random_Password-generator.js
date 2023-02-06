let generate = document.querySelector("#generate");
let copy = document.querySelector("#copy");
let wait = document.querySelector("#wait");
let password = document.getElementById("password");
let copied = null;
let flag = false;
generate.addEventListener("click", () => {
  setTimeout(() => {
    wait.className = "add";
    wait.style.display = "flex";
    password.innerText = "";
    copy.innerText = "Copy";
  }, 100);

  setTimeout(() => {
    wait.style.display = "none";
    let str = "abcdefghijklmnopqrstuvwxyz";
    let str2 = str.toUpperCase();
    let symbol = "@$!*^?#!*^@$?#";
    let num = Math.floor(Math.random() * 9 + 1);
    let display = [];

    for (let i = 1; i < 4; i++) {
      display.push(str[i + num]);
      display.push(str2[i + num + 1]);
      display.push(i + num);
      if (symbol[num - i] !== undefined) display.push(symbol[num - i]);
      else display.push(symbol[i]);
    }
    password.textContent = display.join("");
    copied = display.join("");
    flag = true;
  }, 1000);
});

copy.addEventListener("click", () => {
  if (flag) {
    navigator.clipboard.writeText(copied);
    copy.innerText = "Copied";
  } else {
    alert("Please first generate the password :) ");
  }
});
