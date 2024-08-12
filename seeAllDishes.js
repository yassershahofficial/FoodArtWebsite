const sectionBtn = document.querySelectorAll('.section-top-btn');
const sectionBot = document.getElementById('section-bot');

sectionBtn.forEach(sectionBtn => {
    sectionBtn.addEventListener("click", (e) => {
        const sectionExpand = sectionBtn.parentElement.parentElement.children[1];
        if(sectionExpand.classList.contains("minimize")){
            sectionExpand.classList.remove("minimize");
        }
        else{
            sectionExpand.classList.add("minimize");
        }
    })
})
// console.log(sectionBtn)
