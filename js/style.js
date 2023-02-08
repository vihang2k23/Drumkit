console.log("hello");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");

const array = ["E", "R", "F", "G", "H", "V", "B", "J", "I", "K"];
const button = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10];

document.addEventListener("keyup", (e) => {
  let keyword = e.key.toUpperCase();

  array.filter((e) => {
    // console.log(keyword);
    if (e == keyword) {
      // console.log(button, "array");

      button.filter((data) => {
        console.log(data);
        data.classList.remove("color");
        if (data.innerHTML == keyword) {
          console.log(data, "dtatatataat");
          data.classList.add("color");
          alert(keyword);
        }
      });
      // alert(keyword);
    }
  });
});
