let scale = 1.3;
    let angle = 180;
    let growing = true;
    const galaxy = document.querySelector('#galaxy');
    const scaleStep = 0.0005; // Controls the speed of scaling
    const rotationStep = 0.05; // Controls the speed of rotation

    function animate() {
        if (growing) {
            scale += scaleStep;
            if (scale >= 1.5) {
                growing = false;
            }
        } else {
            scale -= scaleStep;
            if (scale <= 1.15) {
                growing = true;
            }
        }

        angle = (angle + rotationStep) % 360;

        galaxy.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${angle}deg)`;
    }

    setInterval(animate, 16);