// Câu 24: Xuất thứ trong tuần dựa vào ngày/tháng/năm, dùng đối tượng Date có sẵn
var thuTrongTuan = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function xuatThu() {
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);

  // Lưu ý: tháng trong đối tượng Date đếm từ 0 (Tháng 1 = 0), nên phải trừ đi 1
  var d = new Date(nam, thang - 1, ngay);
  var thu = thuTrongTuan[d.getDay()];

  document.getElementById("ketQua").innerHTML =
    thu + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
}
