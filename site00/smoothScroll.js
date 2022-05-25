const   main = document.querySelector('.main');

let current = 0,
    target = 0,
    ease = 0.06;


function lerp(start, end, t) {
    return start * (1-t) + end * t;
}

function setTransform(el, transform){
    el.style.transform = transform;
}

function smoothScroll(){
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY;

    setTransform(main, `translateY(${-current}px)`);

    requestAnimationFrame(smoothScroll);
}

smoothScroll();