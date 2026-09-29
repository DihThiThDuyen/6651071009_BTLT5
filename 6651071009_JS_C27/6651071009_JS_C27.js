// Câu 27: Xóa dòng tương ứng trong bảng khi nhấn nút "Xóa" của dòng đó

function xoaDong(nutXoa) {
  // nutXoa là nút vừa bấm -> nutXoa.parentNode là <td>, cha của <td> đó là <tr> (dòng cần xóa)
  var dong = nutXoa.parentNode.parentNode;
  dong.parentNode.removeChild(dong);
}

function capNhatTong(oInput) {
  // Tìm lại dòng <tr> chứa ô input vừa thay đổi để tự tính lại cột Tổng
  var dong = oInput.parentNode.parentNode;
  var soLuong = Number(dong.cells[0].children[0].value);
  var donGia = Number(dong.cells[1].children[0].value);
  dong.cells[2].children[0].value = soLuong * donGia;
}
