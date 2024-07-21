let scale = .36;
    let angle = 180;
    let growing = true;
    const galaxy = document.querySelector('#galaxy');
    const scaleStep = 0.0001; // Controls the speed of scaling
    const rotationStep = 0.01; // Controls the speed of rotation

    function animate() {
        if (growing) {
            scale += scaleStep;
            if (scale >= .5) {
                growing = false;
            }
        } else {
            scale -= scaleStep;
            if (scale <= .3) {
                growing = true;
            }
        }

        angle = (angle + rotationStep) % 360;

        galaxy.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${angle}deg)`;
    }

    setInterval(animate, 16); // Roughly 60 frames per second