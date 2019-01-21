var myColor = ["Red", "Green", "White", "Black"];
function changeString() {
    var data=myColor.join();
    alert(data);
    document.getElementById('idDataOut').innerText=data;
}
function session2() {
    var num = window.prompt();
    var str = num.toString();
    var result = [str[0]];

    for (var x = 1; x < str.length; x++) {
        if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
            result.push('-', str[x]);
        } else {
            result.push(str[x]);

        }
    }
    alert(result.join(''));



}
function session3() {
    var dataInput=prompt();
    var myArray=new Array()
    
    for (var i=0; i< dataInput.length;i++){
        if (dataInput[i]==dataInput[i].toLocaleUpperCase()){
            myArray.push(dataInput[i].toLocaleLowerCase())
        }
        else myArray.push(dataInput[i].toLocaleUpperCase())
    }
    alert(myArray.join())
}



















var str = 'HHHHjjjjJHASD';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for(var x=0; x<str.length; x++)
{
    if(UPPER.indexOf(str[x]) !== -1)
    {
        result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
        result.push(str[x].toUpperCase());
    }
    else
    {
        result.push(str[x]);
    }
}
console.log(result.join(''));