// Câu 25: Tính tiền thực đơn (thức ăn + nước uống), ban đêm cộng thêm 10%
function tinhTien() {
  var thucAn = document.getElementById("thucAn");
  var nuocUong = document.getElementById("nuocUong");
  var banDem = document.getElementById("banDem").checked;

  var table = document.getElementById("ketQua");
  // Xóa các dòng kết quả cũ, chỉ giữ lại dòng tiêu đề
  table.innerHTML = "<tr><th>Các món đã dùng</th><th>Tiền</th></tr>";

  var tongTien = 0;

  // Duyệt qua từng mục trong danh sách Thức ăn, cộng dồn các mục đang được chọn
  for (var i = 0; i < thucAn.options.length; i++) {
    if (thucAn.options[i].selected) {
      var ten = thucAn.options[i].text;
      var gia = Number(thucAn.options[i].value);
      tongTien += gia;
      table.innerHTML += "<tr><td>" + ten + "</td><td>" + gia + "</td></tr>";
    }
  }

  // Duyệt qua từng mục trong danh sách Nước uống, cộng dồn các mục đang được chọn
  for (var j = 0; j < nuocUong.options.length; j++) {
    if (nuocUong.options[j].selected) {
      var ten2 = nuocUong.options[j].text;
      var gia2 = Number(nuocUong.options[j].value);
      tongTien += gia2;
      table.innerHTML += "<tr><td>" + ten2 + "</td><td>" + gia2 + "</td></tr>";
    }
  }

  // Nếu khách dùng ban đêm, cộng thêm 10% trên tổng tiền các món
  if (banDem) {
    tongTien = tongTien * 1.1;
  }

  table.innerHTML += "<tr><td>Tổng tiền</td><td>" + tongTien + " đồng</td></tr>";
}
