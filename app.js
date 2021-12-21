var chem = +(prompt("enter the Chemsitry marks"));
var math = +(prompt("enter the Math marks"));
var phy = +(prompt("enter the Phycis marks"));
var totalNum = 300;
var totalmarkObtained = chem + math + phy;
var per = totalmarkObtained / totalNum * 100;
per = per.toFixed(2)
document.write ("<h1> Marks Sheet </h1>")
document.write("Total marks: " + totalNum + "<br>");
document.write("MArks Obtained: " + totalmarkObtained + "<br>");
document.write("Percentage: " + per + "%" + "<br>");
var remark;
if (per >= 80 && per <= 100) {
    document.write("A-one");
    document.write("<br>" + "Remarks" + " Exellelent");
}
else if (per >= 70 && per < 80) {
    document.write("A");
    document.write("<br>" + "Remarks" + " Exellelent");
}
else if (per >= 60 && per < 70) {
    document.write("B");
    document.write("<br>" + "Remarks" + " Exellelent");
}
else if (per <= 60 && per>0) {
    document.write("fail");
    document.write("<br>" + "Remarks" + " sorry");
}
else {
    alert ("Invalid number");
}