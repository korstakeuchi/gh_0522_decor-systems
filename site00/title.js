const   amateur = [...document.querySelectorAll('.text--amateur')];

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        amateur.forEach((div, idx) => {
            setTimeout(() => {
                div.classList.add('active');
            }, idx == 0 ? (idx + 1) * 700 : 
            idx == 1 ? idx * 600 :
            idx == 2 ? (idx - 1) * 500 :
            idx == 3 ? (idx - 2) * 400 :
            idx == 4 ? (idx - 3) * 300 :
            idx == 5 ? (idx - 4) * 200 :
            idx == 6 ? (idx - 5) * 100
            : idx * 100
            )
        });
    })
    
})