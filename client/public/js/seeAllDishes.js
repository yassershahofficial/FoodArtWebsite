const sectionBtn = document.getElementById('section-top-btn');
const sectionBot = document.getElementById('section-bot');

sectionBtn.addEventListener("click", (e) => {
    if(sectionBot.classList.contains("minimize")){
        sectionBot.classList.remove("minimize");
    }
    else{
        sectionBot.classList.add("minimize");
    }
})
