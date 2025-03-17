document.getAnimations("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //take datas from form
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    //take hobbies
    const hobbies = [];
    document.querySelectorAll(".checkbox-group input:checked").forEach((checkbox) => {
        hobbies.push(checkbox.value);
    });

    if(hobbies.length === 0){
        alert("Please select at least one hobby");
        return;
    }

    //add data to table
    const table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = fullname;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = phoneNumber;
    row.insertCell(3).textContent = age;
    row.insertCell(4).textContent = gender;
    row.insertCell(5).textContent = hobbies.join(", ");

    document.getElementById("userForm").reset();

});
