// Câu 26: Tính Can - Chi năm âm lịch từ năm dương lịch (có kiểm tra validate)
var canArr = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
var chiArr = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

function tinhCanChi() {
  var oNam = document.getElementById("namDuongLich");
  var nam = Number(oNam.value);

  // Validate: năm phải là số nguyên dương hợp lệ
  if (oNam.value.trim() === "" || isNaN(nam) || nam <= 0 || Math.floor(nam) !== nam) {
    window.alert("Vui lòng nhập năm dương lịch là một số nguyên dương!");
    document.getElementById("canChi").value = "";
    return;
  }

  // Công thức: năm 4 (sau Công Nguyên) là mốc "Giáp Tý"
  var idxCan = ((nam - 4) % 10 + 10) % 10; // +10 rồi %10 để tránh số dư âm
  var idxChi = ((nam - 4) % 12 + 12) % 12; // +12 rồi %12 để tránh số dư âm

  document.getElementById("canChi").value = canArr[idxCan] + " " + chiArr[idxChi];
}
