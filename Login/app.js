window.onload = function () {
    document.getElementById("loginForm").onsubmit = function() {
        var username = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        if (username === "riris" && password === "123"){
            alert("Anda Berhasil Login");
        }
        else {
            alert("Username atau password salah")
        }
        return false;
    }
}

