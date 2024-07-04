function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var ninja = document.getElementById("ninja").value;
    var tgl = document.getElementById("tgl").value;

    document.getElementById("output").innerHTML = "";

    if (username.trim() === "") {
        showInputMessage("username", "Username harus diisi.");
        return false; 
    } else {
        hideInputMessage("username");
    }

    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!email.match(emailPattern)) {
        showInputMessage("email", "Email tidak valid.");
        return false; 
    } else {
        hideInputMessage("email");
    }

    if (ninja.trim() === "") {
        showInputMessage("ninja", "Nama ninja harus diisi.");
        return false; 
    } else {
        hideInputMessage("ninja");
    }

    if (tgl === "") {
        showInputMessage("tgl", "Tanggal pembelian harus diisi.");
        return false; 
    } else {
        hideInputMessage("tgl");
    }

    return true;
}

function resetForm() {
    document.getElementById("formInput").reset();
    document.getElementById("output").innerHTML = "";
}

function showInputMessage(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var messageElement = document.createElement("span");
    messageElement.innerHTML = message;
    messageElement.className = "error";
    inputElement.parentNode.insertBefore(messageElement, inputElement.nextSibling);
}

function hideInputMessage(inputId) {
    var inputElement = document.getElementById(inputId);
    var nextElement = inputElement.nextSibling;
    if (nextElement && nextElement.className == "error") {
        nextElement.parentNode.removeChild(nextElement);
    }
}
