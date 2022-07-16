/* 
Bài 1: Tính tiền lương nhân viên
Input: Lương một ngày, số ngày làm

Process: 1.Tính tổng số lương nhận được: Tổng lương = lương một
ngày * số ngày làm;
2. Console log tổng lương ra màn hình

Output: Tổng lương
*/

function tinhTongLuong() {
    var salaryPerDay = document.getElementById("salaryPerDay").value;
    var workingDays = document.getElementById("workingDays").value;
    var totalSalary = salaryPerDay * workingDays;
    document.getElementById("totalSalary").innerText = `Tổng lương trong tháng là: ${totalSalary}$`;
}


/* 
Bài 2: Tính giá trị trung bình
Input: 5 giá trị số thực

Process: 1.Tính tổng của 5 số thực sau đó chia cho 5
2. Console log giá trị trung bình của 5 số thực

Output: Gía trị trung bình của 5 số thực
*/

function trungBinh() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var thirdNumber = document.getElementById("thirdNumber").value;
    var fourthNumber = document.getElementById("fourthNumber").value;
    var fifthNumber = document.getElementById("fifthNumber").value;
    var mediumNumber = (parseFloat(firstNumber) + parseFloat(secondNumber) + parseFloat(thirdNumber) + parseFloat(fourthNumber) + parseFloat(fifthNumber)) / 5;
    document.getElementById("mediumNumber").innerText = `Giá trị trung bình của 5 số thực là:  ${mediumNumber}`
    console.log(mediumNumber)

}


/* 
Bài 3: Quy đổi tiền 
Input: Tiền USD

Process: 1.Tính tổng số tiền USD nhập vào: Tổng tiền VND = Tiền USD * 23.500
2. Console log tổng số tiền quy đổi

Output: Tổng tiền VND
*/

function currencyExchange() {
    var USD = document.getElementById("usd").value;
    var VietNamDong = USD * 23500;
    document.getElementById("vietnamdong").innerText = `Tổng tiền quy đổi từ USD sang Việt Nam Đồng là: ${VietNamDong} Đồng`;
}


/* 
Bài 4: Diện tích, chu vi hình chữ nhật
Input: Chiều dài, chiều rồng

Process: 1.Tính diện tích  = dài * rộng, chu vi = (dài + rộng) * 2
2. Console log diện tích và chu vi hình chữ nhật

Output: Diện tích, chu vi hình chữ nhật
*/

function rectangle() {
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("dientich").innerText = `Diện tích hình chữ nhật: ${dienTich}`;
    document.getElementById("chuvi").innerText = `Chu vi hình chữ nhật: ${chuVi}`;
}




/* 
Bài 5: Tính tổng 2 ký số
Input: Số có 2 chữ số

Process: 1. Lấy số hàng đơn vị = số % 10, lấy số hàng chục = số / 10
2. Tổng của 2 ký số = số hàng đơn vị + số hàng chục
3. Console.log tổng 2 ký số

Output: Tổng 2 ký số
*/

function totalNumber() {
    var number = document.getElementById("number").value;
    var soHangDV = number % 10;
    var soHangChuc = number / 10;
    var tongHaiKySo = soHangDV + soHangChuc;
    document.getElementById("tonghaikyso").innerText = `Tổng 2 ký số là: ${parseInt(tongHaiKySo)}`;
    console.log("Bài 5");
    console.log("Tổng 2 ký số là: ", parseInt(tongHaiKySo));
}


