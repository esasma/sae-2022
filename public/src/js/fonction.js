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

/*carrousel*/

function carrousel3Images() {
    var images153 = document.querySelectorAll('.image');
    let d = 2000;
    let delta = 1000;

    images153.forEach(function(img,indice) {
        img.style.zIndex = images153.length - indice;
    });
    let anim153 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim153.add({
        targets: images153,
        translateX: [{value: '268', duration: d},
                     {value: '-268', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (2*delta)+d;
                         if (ind == 1) return delta;
                        return 0;
                }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}
