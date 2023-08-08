
function myFunction(){
    alert("XD");
    
    console.log("XXD");

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML="Change......";
    document.getElementById("header1").style.color="#FF0000";

    var x=8;
    var y=20;
    var z=3;

    // หาค่าเฉลี่ย --> header2
    document.getElementById("header2").innerHTML=((x+y+z)/3).toPrecision(2);

}

let likecount = 0;
function LikeFunction(){
    //เพิ่ม counter 1
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 1
    likecount++;
    document.getElementById("result").textContent=likecount;
    document.getElementById("heart").style.fontSize= likecount+"px";
    
}
function LoveFunction(){
    //เพิ่ม counter 10
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 5
    likecount = likecount+10;  
    document.getElementById("result").textContent=likecount;
    document.getElementById("heart").style.fontSize= likecount+"px";
    
}