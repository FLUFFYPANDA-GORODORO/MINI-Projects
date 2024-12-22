function textSplitting(){
    let allText = document.querySelectorAll("#page0 h1");

allText.forEach(function(elem){
    let clutter = "";
    let Text = elem.textContent
    let splitedText = Text.split("")
    splitedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter;
})

}

function gsapAnimation(){
    
gsap.to("#page0 h1 span",{
    color:"coral",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page0 h1",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end:"top -10%",
        scrub:2
    }
})
}

textSplitting();
gsapAnimation();






// For 1 line 

// let firstText = document.querySelector("#first").textContent;


// let splitedText = firstText.split("");
// let clutter = "";

// splitedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })

// document.querySelector('#first').innerHTML = clutter


// gsap.to("#page0 h1 span",{
//     color:"blue",
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:"#page0 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 10%",
//         scrub:1
//     }
// })



// For all lines 




























