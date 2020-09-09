

function handleFiles() {

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "D:\Docs\Desktop\csvfile.csv",
            dataType: "csv",
            success: function (data) { processData(data); }
        });
    });
    
}

function processData(allText) {
var allTextLines = allText.split(/\r\n|\n/);
var headers = allTextLines[0].split(',');
var lines = [];

for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    if (data.length == headers.length) {

        var tarr = [];
        for (var j = 0; j < headers.length; j++) {
            tarr.Push(headers[j] + ":" + data[j]);
        }
        lines.Push(tarr);
    }
}
console.log(lines);
drawOutput(lines);
}


let QualiNo = getElementById(QlN)
let QualiOr = getElementById(QlO)
let QuantDis = getElementById(QtD)
let QuantCon = getElementById(QtC)

if(QuliNo){

}else if(QualiOr){

}else if(QuantDis){

}else if(QuantCon){

}

