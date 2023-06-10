//3d scroll
let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName('frame');
let frames = Array.from($frames);
let zVals = [];

window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing);
        zVals[i] += delta * -5;

        let frame = frames[i];
        let transform = `translateZ(${zVals[i]}px)`;

        frame.setAttribute('style', `transform: ${transform}`);
    });
}

window.scrollTo(0, 1);