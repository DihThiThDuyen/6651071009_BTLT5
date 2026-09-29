// Câu 23: Lương tháng = Lương * Hệ số lương
function tinhLuong() {
  var luong = Number(document.getElementById("luong").value);
  var heSo = Number(document.getElementById("heSo").value);
  var luongThang = luong * heSo;
  document.getElementById("luongThang").innerHTML = luongThang;
}
