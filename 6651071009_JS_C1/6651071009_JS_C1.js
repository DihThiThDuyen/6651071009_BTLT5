// Câu 1: Tính diện tích tam giác có 3 cạnh 5, 6, 7 (công thức Heron)
var a = 5;
var b = 6;
var c = 7;

var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// Xuất ra Tab Console
console.log("Diện tích tam giác là: " + area.toFixed(2));

// Xuất ra hộp thoại của trình duyệt
window.alert("Diện tích tam giác là: " + area.toFixed(2));

// Xuất ra giao diện trang web
document.write("Diện tích tam giác là: " + area.toFixed(2));
