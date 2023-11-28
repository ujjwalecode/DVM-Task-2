function submitForm(event) {
    event.preventDefault();

    if (validate()) {
        console.log("Name: ", document.getElementById("name").value);
        console.log("Email: ", document.getElementById("email").value);
        console.log("Phone: ", document.getElementById("phone").value);
        console.log("BITS ID: ", document.getElementById("bitsid").value);
        console.log("Hostel: ", document.getElementById("hostel").value);
        console.log("Room no: ", document.getElementById("roomnumber").value);
        console.log("Size: ", document.querySelector('input[name="size"]:checked').value);
        console.log("Agreed to terms: ", document.getElementById("terms").checked);
    }
}
function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var bitsid = document.getElementById("bitsid");

    if(name.value.length < 5 || name.value.length > 50 ){
        alert("Name Must Be 5 To 50 Characters Long");
       
        return false;
    }
    else{
        true;
    }
    if(phone.value.length < 10 || phone.value.length > 10 ){
        alert("Phone Number is incorrect");
        return false;
    }
    else{
        true;
    }

    if(bitsid.value.length < 12 || bitsid.value.length > 15 ){
        alert("Bits ID is incorrect");
        return false;
    }
    else{
        true;
    }

    
    return true;

    
}
