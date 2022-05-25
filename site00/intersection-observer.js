let selectedSketches = document.querySelector('.selected-sketches');

let options = {
    rootMargin: '0px',
    threshold: .5
};

let setItemActive = (entries => {

    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
        // else{
        //     entry.target.classList.remove('active')
        // }
    })
    
});

let observer = new IntersectionObserver(setItemActive, options);

selectedSketches = observer.observe(selectedSketches)