// Câu 22: Nhân hoặc chia 2 số nguyên người dùng nhập vào form

function multiply() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = num1 * num2;
}

function devide() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = num1 / num2;
}
