// les iinformation sur les enigme
var data = [{
    "reference": "<h1>ENIGME NUMERO <span>2</span></h1>",
    "context": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
    "illustraion": "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    "explication": "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? "
}, {
    "reference": "<h1>ENIGME NUMERO <span>3</span></h1>",
    "context": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
    "illustraion": "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    "explication": "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
}]
var responseObject = [{
    "id": "Enigme 1",
    "isGood": "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS"
}, {
    "id": "Enigme 1",
    "isGood": "En attente"
}, {
    "id": "Enigme 1",
    "isGood": "attente"
}]

function showEnigme(a) {
    // pour afficher la question suivant le conteur i referencé chaque question
    $(".enonce,.enonce2,.content2-item").addClass("text-justifier");
    $(".content1").prepend(data[a].reference)
    $(".level").remove()
    document.querySelector("div.content1 h1").classList.add("level")
    document.querySelector("div.content1 h1 span").classList.add("levelup")
    $(".enonce").text(data[a].context)
    $(".enonce2").text(data[a].illustraion)
    $(".content2-item").text(data[a].explication)
}
$(document).ready(function() {
    var i = 0;
    var j = 0;
    var trueResponse = ["true"]
    $(".popUgood").hide()
    $(".popUPTerminer").hide()
    $(".btn-envoyer").click(function() {
        let response = $("#reponse").val()
        response = response.toUpperCase()
        j = j + 1
        if (response.toUpperCase() == responseObject[j - 1].isGood.toUpperCase()) {
            if (j < 3) {
                $(".popUgood").show()
                $("#valide").click(function() {
                    showEnigme(i)
                    $(".popUgood").hide()
                    $("#reponse").val("")
                    i = i + 1
                })
            } else {
                $(".popUgood").hide()
                $(".popUPTerminer").show()
                $("#reponse").val("")
                document.getElementById("terminer").addEventListener('click', loadpage)

                function loadpage() {
                    location.reload()
                }
            }
        } else {
            alert("false")
        }
        return false
    })
})