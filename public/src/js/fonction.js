function monterLegende(c) {
    document.querySelector('.'+c).style.display = 'block';
    console.log(' ');
    return anime({
        targets: '.'+c,
        translateY: '-5em',
        opacity: 1,
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende() {
	document.querySelector('.figcaption').style.display = 'block';
    return anime({
        targets: '.figcaption',
        translateY: '5em',
        opacity: 0,
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play
}