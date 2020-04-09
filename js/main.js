const row = document.querySelector('.carrousel-container');
const movies = document.querySelectorAll('.movie');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

// Arrows
arrowRight.addEventListener('click', () => {
    row.scrollLeft = row.scrollLeft + row.offsetWidth;

    const indicatorActive = document.querySelector('.indicator .active');
    if (indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

arrowLeft.addEventListener('click', () => {
    row.scrollLeft = row.scrollLeft - row.offsetWidth;
    const indicatorActive = document.querySelector('.indicator .active');
    if (indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

// Pagination

const numberMovies = movies.length / 5;
for (let i = 0; i < numberMovies; i++) {
    const indicator = document.createElement('button');

    if (i === 0) {
        indicator.classList.add('active');
    }

    document.querySelector('.indicator').appendChild(indicator);
    indicator.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.indicator .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

// Image hover
movies.forEach( (movie) => {
    movie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(()=> {
            movies.forEach(movie => movie.classList.remove('hover'));
            element.classList.add('hover');
        },300);
    });
});
