let ul = document.getElementById('navtop');
let li = ul.querySelectorAll('li');
ul.addEventListener('click', function (e) {
    let elementActive = document.querySelector('.active');
    elementActive.classList.remove('active');
    e.target.classList.add('active');
})


li.forEach(element => {

    element.addEventListener('mouseenter', function (e) {
        // console.log(e.target.children[0].classList.contains('active'));
        if (!e.target.querySelector('.active')) {
            // console.log('bersisi active');
            const div = document.createElement('div');
            div.className = 'nav-border';
            e.target.appendChild(div);
        }
        // e.target.classList.add('hover');
    });

    element.addEventListener('mouseleave', function (e) {
        if (e.target.querySelector('.nav-border')) {
            e.target.querySelector('.nav-border').remove();
        }
        // console.log('hai');
        // e.target.classList.remove('hover');
    })
});

let card = document.querySelectorAll('.card');
card.forEach(element => {
    element.addEventListener('mouseenter', function (e) {
        // e.target.classList.add('active');
        element.style.transform = 'scale(1.1)';
        element.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        let cardText = element.querySelector('.card-text');
        let cardFooter = element.querySelector('.card-footer');
        // cardFooter.children[0].removeAttribute('class');
        cardFooter.style.backgroundColor
            = '#323254';
        cardFooter.style.color
            = 'white';
        cardText.style.backgroundColor
            = 'white';
        cardText.style.color
            = '#323254';
    });

    element.addEventListener('mouseleave', function (e) {
        // card.style.removeProperty('transform');
        element.removeAttribute('style');
        element.querySelector('.card-footer').removeAttribute('style');
        element.querySelector('.card-text').removeAttribute('style');
    });

});






