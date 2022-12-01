let data =[{
    "employeeID" : 10001,
    "name":"นางสาวชนิสา ไกรรอด",
    "department":"ไอที",
    "role":"System Engineer",
    "salary":42000,
    "bonus": "S"
},{
    "employeeID" : 10002,
    "name":"นายวศพล สิริอนันต์",
    "department":"ไอที",
    "role":"System Engineer",
    "salary":13000,
    "bonus": "A"
},{
    "employeeID" : 10003,
    "name":"นางจิราพร อินทรประเสริฐ",
    "department":"ฝ่ายบุคคล",
    "role":"HR",
    "salary":9000,
    "bonus": "C"
},{
    "employeeID" : 10004,
    "name":"นางสาวพิมพา กาญจนมาศ",
    "department":"ฝ่ายบุคคล",
    "role":"HR",
    "salary":21000,
    "bonus": "B"
},{
    "employeeID" : 10005,
    "name":"นายจิรโชติ วัฒนโกศล",
    "department":"ฝ่ายบุคคล",
    "role":"HR",
    "salary":22000,
    "bonus": "A"
},{
    "employeeID" : 10006,
    "name":"นายธัชพล ขจรเกียรติสกุล",
    "department":"การเงิน",
    "role":"Account",
    "salary":12000,
    "bonus": "S"
},{
    "employeeID" : 10007,
    "name":"นายธนวิทย์ สุวรรณโชติ",
    "department":"การเงิน",
    "role":"Account",
    "salary":14000,
    "bonus": "A"
},{
    "employeeID" : 10008,
    "name":"นางพัชรียา สําราญทรัพย์",
    "department":"การเงิน",
    "role":"Account",
    "salary":50000,
    "bonus": "C"
},{
    "employeeID" : 10009,
    "name":"นางสาวขวัญชนก ธาดาวรวงศ์",
    "department":"ไอที",
    "role":"System Engineer",
    "salary":16000,
    "bonus": "A"
}];

let sum01 = 0 // โบนัสพนักงาน
let sum02 = 0 // โบนัสที่ต้องจ่ายทั้งหมด
let sum03 = 0 // เก็บค่าผลรวมเงินเดือนพนักงาน 12 เดือน
let sum04 = 0 // รายได้สุทธิต่อปี
let sum05 = 0 // ร่ายจ่ายต่อปี
let sum06 = 0 // ภาษีที่ต้องจ่าย

for(i=0;i<data.length;i++){
    if(data[i].Level== "S"){
        sum01 = data[i].Salary*1.6;
        sum02 += sum01;
    }else if(data[i].Level == "A"){
        sum01 = data[i].Salary*1.3;
        sum02 += sum01;
    }else if(data[i].Level== "B"){
        sum01 = data[i].Salary*1.0;
        sum02 += sum01;
    }else if(data[i].Level == "C"){
        sum01 = data[i].Salary*0.8;
        sum02 += sum01;
    }
    sum03 = data[i].Salary*12;
    sum04 = sum03+sum02
    sum05 += sum04;
    if(sum03<300000){
    }else if(sum03>=300000&&sum03<=600000){
        sum06 = sum03*0.1;
        sum06 += sum06;
    }else if(sum03>=600000&&sum03<=1000000){
        sum06 = sum03*0.25;
        sum06 += sum06;
    }else if(sum03>1000000){
        sum06 = sum03*0.35;
        sum06 += sum06;
    }
    console.log(data[i].FullName,"มีรายได้สุทธิต่อปี =",sum04,"บาท","ต้องจ่ายภาษี",sum06,"บาท","ได้โบนัส",sum01);
}
console.log("ผลประเมิน A")
for(i=0;i<data.length;i++){
    if(data[i].Level=="A"){
        console.log(data[i].FullName,"ผลประเมิน",data[i].Level);
    }
}

console.log("บริษัทต้องจ่ายภาษีทั้งหมด :",sum06)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :",sum02)
console.log("รายจ่ายต่อปีของบริษัท :",sum05)