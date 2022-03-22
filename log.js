auser = ""
function signIn() {
    madd = document.getElementById("madd").value
    mpass = document.getElementById("mpass").value
    if (madd == "arjun.maheshwari@maestroware.ind" && mpass == "master1!") {
        auser = "Arjun Maheshwari"
        alert("Signed in as Arjun Maheshwari")
        window.location = "ceo.html"
    }
}

function logout1() {
    window.location = "index.html"
    auser = ""
}