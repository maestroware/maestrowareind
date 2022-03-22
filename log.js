auser = ""
function signIn() {
    madd = document.getElementById("madd").value
    mpass = document.getElementById("mpass").value
    if (madd == "arjun.maheshwari@maestroware.ind" && mpass == "master1!") {
        auser = "Arjun Maheshwari"
        alert("Signed in as Arjun Maheshwari")
        window.location = "ceo.html"
    }
    if (madd == "manish.maheshwari@maestroware.ind" && mpass == "Manish1!!") {
        auser = "Manish Maheshwari"
        alert("Signed in as Manish Maheshwari")
        window.location = "index.html"
    }
}

function logout1() {
    window.location = "index.html"
    auser = ""
}
