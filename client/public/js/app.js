console.log("hello world");

const slideInRightTopRotate = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('slideInRightTopRotate');
        } 
    })
});

const slideInLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('slideInLeft');
        } 
        else{
            entry.target.classList.remove('slideInLeft');
        }
    })
});

const hiddenRTR = document.querySelectorAll('.hiddenRTR');
const hiddenL = document.querySelectorAll('.hiddenL');
hiddenRTR.forEach((el) => slideInRightTopRotate.observe(el));
hiddenL.forEach((el) => slideInLeft.observe(el));