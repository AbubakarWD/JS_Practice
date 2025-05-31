var a = [10, 50, 23];
document.write(a);
document.write("<br>" + a[0]);
document.write("<br>" + a[1]);
document.write("<br>" + a[2]);

document.write("<br>");

var b = new Array()
b[0] = 11;
b[1] = 22;
b[2] = 33;
document.write(b);
document.write("<br>" + b[0]);
document.write("<br>" + b[1]);
document.write("<br>" + b[2]);

document.write("<br>");

var c = [100, 200, 300, 400, 500]
for (c = 0; c < 5; c++) {
    document.write("<br>" + c);

}

document.write("<br>");

var d = new Array(3)
for (var e = 0; e < 5; e++) {
    d[e] = prompt("Enter value");
}
for (f = 0; f < 5; f++) {
    document.write("<br>" + d[f]);
}