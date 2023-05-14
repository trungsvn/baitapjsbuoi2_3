// tính luong
function tinhtongluong() {

    var workingday = document.getElementById("workingday").value;
    var salary = document.getElementById("salaryperday").value;
    // console.log('so ngay lam', workingday);
    // console.log('tien luong', salary);
    var tongluong = workingday * salary;
    document.getElementById("tongluong").innerHTML = tongluong;

}
// tính giá trị trung bình
function tinhgiatritrungbinh() {
    var number1 = document.getElementById("number1").value;
    var num1 = Number(number1);
    // console.log('num1',num1);
    var number2 = document.getElementById("number2").value;
    var num2 = Number(number2);
    var number3 = document.getElementById("number3").value;
    var num3 = Number(number3);
    var number4 = document.getElementById("number4").value;
    var num4 = Number(number4);
    var number5 = document.getElementById("number5").value;
    var num5 = Number(number5);
    var giatritrungbinh = (num1 + num2 + num3 + num4 + num5) / 5
    document.getElementById("trungbinh").innerHTML = giatritrungbinh;
    // console.log('number1',number1)
}
// đổi tiền usd ra vnd
function quydoi() {
    var usd = document.getElementById("usd").value;
    var tigiavnd = document.getElementById("tigiausd").value;
    var quydoi = usd * tigiavnd;
    // console.log('quydoi',quydoi);
    document.getElementById("xuatravnd").innerHTML = quydoi;
}
// tính diện tích, chu vi

function dientich() {
    var chieudai = document.getElementById("chieudai").value;
    var cd = Number(chieudai);
    // console.log('cd',cd);
    var chieurong = document.getElementById("chieurong").value;
    var cr = Number(chieurong);
    var dientich = cd * cr;
    document.getElementById("xuatradientich").innerHTML = dientich;

}
function chuvi() {
    var chieudai = document.getElementById("chieudai").value;
    var cd = Number(chieudai);
    // console.log('cd',cd);
    var chieurong = document.getElementById("chieurong").value;
    var cr = Number(chieurong);
    var chuvi = (cd + cr) * 2;
    document.getElementById("xuatrachuvi").innerHTML = chuvi;

}

document.getElementById("btnTotal").onclick = function(){
    var number = +document.getElementById("kyso").value;
    // console.log(number);
    var sole = number % 10;
    // console.log(sole);
    var sochuc = Math.floor(number/10);
    // console.log(sochuc);
    var tong2kyso = sochuc + sole;
    document.getElementById("xuatratong").innerHTML = tong2kyso ;
}


