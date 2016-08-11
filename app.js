//let arr = [];
function add() {
    var data;
    var data2 = document.getElementById("one");
    data = document.getElementById('one').value;
    document.getElementById('one').value = "";
    document.getElementById("two").setAttribute("disabled", "disabled");
    data2.focus();
    console.log(data);
    var addtodo = "<li>" + "<br />" + data + " " +
        "<button type='button' onclick='del(this)'><span class='glyphicon glyphicon-trash'><span></button>" +
        "</li>";
    // id ='(Math.random()) * 10'
    document.getElementById("three").innerHTML += addtodo;
}
var num = 0;
function del(z) {
    // let num = 0;
    var chk = z.parentNode;
    // console.log(chk);
    chk.setAttribute("id", ++num);
    console.log(chk);
    // let test = z.parentNode.attributes[0].value;
    document.getElementById("three").removeChild(chk);
    //  chk.childNodes[0]
}
function check() {
    var checkin = document.getElementById("one").value;
    if (checkin.toString().length === 0) {
        document.getElementById('two').setAttribute("disabled", "disabled");
    }
    else {
        document.getElementById('two').removeAttribute("disabled");
    }
}
//# sourceMappingURL=app.js.map