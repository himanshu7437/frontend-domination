const heroText = document.querySelector('.hero-text');

const images = [
    'https://cdn.pixabay.com/photo/2021/08/29/07/02/kid-6582547_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/07/10/07/24/house-9706056_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/06/02/21/36/cat-9637984_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/07/31/20/00/woman-9747618_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/12/29/00/12/dog-9297049_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/04/13/03/17/horse-9531049_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/08/02/17/47/cat-9751060_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/04/30/13/05/cat-9569386_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/07/06/17/55/lion-9699734_1280.jpg',
];

let lastX = 0;

heroText.addEventListener('mousemove', throttle((e) => {
    const diffX = e.clientX - lastX;
    lastX = e.clientX;

    const tiltY = gsap.utils.clamp(-15, 15, diffX / 2); // left/right tilt

    const div = document.createElement('div');
    div.classList.add('imagediv');
    div.style.left = e.clientX - 90 + 'px';
    div.style.top = e.clientY - 90 + 'px';

    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    div.appendChild(img);
    document.body.appendChild(div);

    // Step 1: Spawn from below with tilt
    gsap.set(div, { y: 100, opacity: 0, rotationY: tiltY, rotationX: 0, z: 200, scale: 0.9 });
    
    // Step 2: Rise up + move backward
    gsap.to(div, {
        y: -80, // move upward more
        opacity: 1,
        scale: 1,
        z: -150, // push backward in 3D
        duration: 0.5,
        ease: "power3.out"
    });

    // Step 3: Fall forward & down
    gsap.to(div, {
        y: 300,
        z: 0, // comes forward while falling
        rotationX: gsap.utils.random(-20, 20),
        rotationY: tiltY * 2,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.in",
        onComplete: () => div.remove()
    });

}, 100));

function throttle(fn, delay) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= delay) {
            fn(...args);
            last = now;
        }
    };
}
