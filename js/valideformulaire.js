window.onload = () => {
    let nom = document.getElementById("nom").value;
    let admail = document.getElementById("amail").value;
    let amsg = document.getElementById("msg").value;
    document.getElementById("myform").addEventListener("submit", function(e) {
        e.preventDefault();
        document.querySelector(".popuUpFormulaire").style.display = "block"
        scrollTo(top)
    })
    document.querySelector(".closePop").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(".popuUpFormulaire").style.display = "none"
    })
}