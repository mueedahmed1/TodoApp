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
    document.getElementById("three").innerHTML += addtodo;
}


function del(z) {
    var chk = z.parentNode.parentNode;
    chk.removeChild(chk.childNodes[0]);
    console.log(chk);
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