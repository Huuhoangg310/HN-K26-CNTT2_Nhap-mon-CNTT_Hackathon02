# BÀI LÀM – HACKATHON 02

- **Mã đề:** 09
- **Họ tên:** Nguyễn Hữu Hoàng
- **Lớp:** CNTT2
- **Link repository:**
- **Hệ điều hành (Windows/macOS):** Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
Ls -Force
mv noi_quy_thanh_vien.txt docs
mkdir backup
cp data/thue_cho_thang_9.xlsx backup
rm temp_909.tmp
cd logs
ls
cd..

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
  Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   1:45 PM                backup
d-----        11/11/2026   1:39 PM                data
d-----        11/11/2026   1:44 PM                docs
d-----        11/11/2026   1:37 PM                evidence
d-----        11/11/2026   1:39 PM                logs
d-----        11/11/2026   1:35 PM                web
------         11/3/2026   7:08 AM             72 .env
-a----         11/3/2026   7:08 AM           2409 bai_lam.md


    Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:08 AM           6162 thue_cho_thang_9.xlsx


    Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:08 AM           6162 thue_cho_thang_9.xlsx


    Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:08 AM            146 noi_quy_thanh_vien.txt


    Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:08 AM            991 member.log


    Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   1:35 PM                images
------         11/3/2026   7:08 AM            605 app.js
------         11/3/2026   7:08 AM            543 index.html
------         11/3/2026   7:08 AM            460 style.css


    Directory: C:\Users\ADMIN\Downloads\starter-kit\starter-kit\coworking-website FINAL\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
------         11/3/2026   7:08 AM           3069 logo-coworkhub.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
gc logs/member.log | select-string status=500 >> ./logs/loi_500.txt

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
2026-09-28 08:10:39 POST /api/dat-cho status=500
2026-09-28 08:12:50 POST /api/dat-cho status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
gc logs/member.log | select-string status=404 | measure-object

```

```text
4

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
# Script: tong_hop.ps1
# Tac gia: Nguyễn Hữu Hoàng
# Ngay tao: 11/11/2026

Write-Host "Dang tao bao cao..."

"=== BAO CAO SU CO WEBSITE ===" > logs/tong_hop.txt
Get-Content logs/member.log | Select-String "status=404" >> logs/tong_hop.txt
Get-Content logs/member.log | Select-String "status=500" | Measure-Object >> logs/tong_hop.txt

Write-Host "Hoan thanh!"

```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO SU CO WEBSITE ===

2026-09-28 08:28:45 GET /images/phong-hop-3.jpg status=404
2026-09-28 08:41:40 GET /goi-cu status=404
2026-09-28 08:49:13 GET /images/phong-hop-3.jpg status=404
2026-09-28 08:59:46 GET /images/phong-hop-3.jpg status=404




Count    : 6
Average  :
Sum      :
Maximum  :
Minimum  :
Property :

```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | NetWork | logo.png-net::ERR_FIND_NOT_FOUND(index.html:10); Network hiển thị failed | Sửa src="images/logo.png"; thay logo.png thành logo-coworkhub.png; Lưu file, tải lại trang(Ctrl+Shift+R). |
| 2 | Console | Uncaught ReferenceError: hienThiBangThue is not defined (app.js:18) |  |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:**  mở trang /web/index.html của dự án CoWorkHub bằng Chorme hoặc Edge. Trang có chức năng hiển thị không gian làm việc chung; kiểm tra bằng DevTools (tab Console).
- **Expected:**  Trang web hiển thị không gian làm việc chung với dữ liệu đầy đủ, không có lỗi JavaScript ngăn cản chức năng này.
- **Actual:**  không gian làm việc chung không hiển thị dữ liệu khi mở trang.
- **Log:** Uncaught ReferenceError: hienThiBangThue is not defined (app.js:18) 

### Câu tìm kiếm Google

```text
site:stackoverflow.com "Uncaught ReferenceError: hienThiBangGia is not defined"

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/thue_cho_thang_9.xlsx`, không cần ghi vào đây.
