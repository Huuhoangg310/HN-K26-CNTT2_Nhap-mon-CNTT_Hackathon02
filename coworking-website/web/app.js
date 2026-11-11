const danhSachBangGia = [
  { ma: "BAN-LINH", ten: "Ban linh hoat", gia: 90000 },
  { ma: "BAN-CD", ten: "Ban co dinh", gia: 150000 },
  { ma: "PHONG-HOP", ten: "Phong hop 6 nguoi", gia: 450000 },
  { ma: "PHONG-RIENG", ten: "Phong rieng 2 nguoi", gia: 300000 },
];

function hienThiGoiThue() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiBangThue();
