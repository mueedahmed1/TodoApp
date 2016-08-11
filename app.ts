//let arr = [];

function add(): void {
    let data;
    let data2 = document.getElementById("one");
    data = (<HTMLInputElement>document.getElementById('one')).value;

    (<HTMLInputElement>document.getElementById('one')).value = "";
    document.getElementById("two").setAttribute("disabled", "disabled");
    data2.focus();
    console.log(data);

    let addtodo = "<li>" + "<br />" + data + " " +
        "<button type='button' onclick='del(this)'><span class='glyphicon glyphicon-trash'><span></button>" +
        "</li>"

    // id ='(Math.random()) * 10'
    document.getElementById("three").innerHTML += addtodo;
}

let num = 0;

function del(z) {

    let chk = z.parentNode;

    chk.setAttribute("id", ++num);
    console.log(chk);
    // let test = z.parentNode.attributes[0].value;
    document.getElementById("three").removeChild(chk);


}


function check() {
    let checkin = (<HTMLInputElement>document.getElementById("one")).value;
    if (checkin.toString().length === 0) {
        document.getElementById('two').setAttribute("disabled", "disabled");
    }
    else {
        document.getElementById('two').removeAttribute("disabled");
    }
}   
