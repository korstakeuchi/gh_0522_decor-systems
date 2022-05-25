const   amateur = [...document.querySelectorAll('.text--amateur')],
        sketchGallery = [...document.querySelectorAll('.text--sketch-gallery')],
        borderLeft = [...document.querySelectorAll('.box-border-left')],
        imgWrap = document.querySelector('.img-wrap'),
        imgsecborderLeft = document.querySelector('.img-sec-borderlineLeft'),
        imgsecborderRight = document.querySelector('.img-sec-borderlineRight');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        borderLeft.forEach((div, idx) => {
            setTimeout(() => {
                div.classList.add('active');
            })
        });

        imgsecborderLeft.classList.add('active');
        imgsecborderRight.classList.add('active');
        
    })
    
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

        sketchGallery.forEach((div, idx) => {
            setTimeout(() => {
                div.classList.add('active');
            }, idx == 0 ? (idx + 1) * 600 : 
            idx == 1 ? idx * 500 :
            idx == 2 ? (idx - 1) * 400 :
            idx == 3 ? (idx - 2) * 300 :
            idx == 4 ? (idx - 3) * 200 :
            idx == 5 ? (idx - 4) * 100 :
            
            idx == 6 ? (idx - 5) * 100 :
            idx == 7 ? (idx - 6) * 200 :
            idx == 8 ? (idx - 7) * 300 :
            idx == 9 ? (idx - 8) * 400 :
            idx == 10 ? (idx - 9) * 500 :
            idx == 11 ? (idx - 10) * 600 :
            idx == 12 ? (idx - 11) * 700 :
             idx * 100)
        });
        
    }, 1500)

    setTimeout(() => {
        borderLeft.forEach((div, idx) => {
            setTimeout(() => {
                div.classList.add('fade');
            })
        })

        imgWrap.classList.add('active');
        
    }, 2500)
    
})