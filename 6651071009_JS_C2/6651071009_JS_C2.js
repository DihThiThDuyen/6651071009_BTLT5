// Câu 2: Kiểm tra năm nhuận (nhập năm từ hộp thoại Prompt)
var nam = Number(window.prompt("Nhập năm cần kiểm tra:"));

// Năm nhuận: chia hết cho 4 và (không chia hết cho 100 hoặc chia hết cho 400)
var isLeapYear = (nam%4===0 && nam%100!=0)||(nam%400===0);
window.alert("Năm " + nam + (isLeapYear ? " là năm nhuận" : " không phải là năm nhuận"));
document.write("Năm " + nam + (isLeapYear ? " là năm nhuận" : " không phải là năm nhuận"));