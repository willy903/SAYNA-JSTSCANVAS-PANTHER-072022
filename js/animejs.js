const ratio = .1
const threshold = .2
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}
const handleIntersect = function(entries, observerX) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('caherNON')
            entry.target.classList.remove('caherOUIleft')
            entry.target.classList.remove('caherOUIright')
            entry.target.classList.remove('translateYanimeOUI')
                // observer.unobserve(entry.target)
        }
    })
}
const observerX = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.caherOUIleft, .caherOUIright, .trasnlasteObserver,.content1 .presentation').forEach(function(r) {
        observerX.observe(r)
    })
    // slider
document.querySelector(".rond").addEventListener("click", sliderX)
let i = 0;
let coordonerX = 0;
let coordonerXenPX = coordonerX + "px";
var dataCord = [
    { "cordoner": "translateX(-520PX)" },
    { "cordoner": "translateX(-1040PX)" },
    { "cordoner": "translateX(-1560px)" },
    { "cordoner": "translateX(-2080px)" },
    { "cordoner": "translateX(-2600px)" },
    { "cordoner": "translateX(-3200px)" },
    { "cordoner": "translateX(-3640px)" },
    { "cordoner": "translateX(-3942PX)" },
]
let x = 3
let refSlide = ""

function sliderX() {
    console.log("e")
    if (i < 8) {
        console.log(x)
        document.querySelector(".conteneur_slider").style.transform = dataCord[i].cordoner;
        refSlide = '.slide' + x + " img";
        document.querySelector(refSlide).classList.add('animationFaddincart')
        x = x + 1;
        i++
    } else {
        i = 0
        x = 3
        document.querySelector(".conteneur_slider").style.transform = "translateX(0px)";
    }
}