let form=document.getElementById("form");
let tbody=document.getElementById("tbody");

function remove(event) {
    let x=event.target.parentElement.parentElement;
    x.remove();
}


form.addEventListener("submit",(e)=>{
e.preventDefault();

let namevalue=document.getElementById("name").value;
let familyvalue=document.getElementById("family").value;
let emailvalue=document.getElementById("email").value;
let numbervalue=document.getElementById("number").value;
// console.log(namevalue,numbervalue);
// console.log(familyvalue);

const nameFamilyPattern = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern = /^(\+98|0)?9\d{9}$/;

if (namevalue.match( nameFamilyPattern )&&familyvalue.match( nameFamilyPattern)&& emailvalue.match(emailPattern)&&numbervalue.match(phonePattern)) {
    

    let newuser=`
<tr>
<th scope="col" class="text-center"><i class="material-icons" onclick="remove(event)">&#xe92b;</i></th>
<th scope="col" class="text-center"><i style="font-size:24px" class="fa"  onclick="edit(event)" >&#xf044;</i></th>
<th scope="col" class="text-center name">${namevalue}</th>
<th scope="col" class="text-center family">${familyvalue}</th>
<th scope="col" class="text-center email">${emailvalue}</th>
<th scope="col" class="text-center number">${numbervalue}</th>
</tr>

`
tbody.insertAdjacentHTML("beforeend",newuser);

Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
}

// let newuser=`
// <tr>
// <th scope="col" class="text-center"><i class="material-icons" onclick="remove(event)">&#xe92b;</i></th>
// <th scope="col" class="text-center"><i style="font-size:24px" class="fa"  onclick="edit(event)" >&#xf044;</i></th>
// <th scope="col" class="text-center name">${namevalue}</th>
// <th scope="col" class="text-center family">${familyvalue}</th>
// <th scope="col" class="text-center email">${emailvalue}</th>
// <th scope="col" class="text-center number">${numbervalue}</th>
// </tr>

// `
// tbody.insertAdjacentHTML("beforeend",newuser);

// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )

});

function edit(event) {
    let tr=event.target.parentElement.parentElement;

    let newname=prompt("enter newname",tr.querySelector(".name").innerHTML);
    let newfamily=prompt("enter newfamily",tr.querySelector(".family").innerHTML);
    let newemail=prompt("enter newemail",tr.querySelector(".email").innerHTML);
    let newnumber=prompt("enter newnumber",tr.querySelector(".number").innerHTML);

    // console.log(newname,newfamily,newemail,newphone);
    // let x=tr.querySelector(".name").innerHTML;
    // console.log(x);
    tr.querySelector(".name").innerHTML=newname;
    tr.querySelector(".family").innerHTML=newfamily;
    tr.querySelector(".email").innerHTML=newemail;
    tr.querySelector(".number").innerHTML=newnumber;
    
}

// let btn=document.getElementById("btn");
// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     alert("bye");
// });