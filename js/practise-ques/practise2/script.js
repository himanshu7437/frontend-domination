// question 
// ek rectangle bnao and jab mouse centre par hoo rectangle centre par ho jab mouse left jana shuru ho rectangle bhi left jana shuru hojaye, par jaise jaise mouse left jaye rectangle ki speed left mai jate jate slow hojaye  and same happen with right side as well.

window.addEventListener('mousemove', function(dets) {
    var rect = this.document.querySelector('.rect');
    var xval = gsap.utils.mapRange(0, window.innerWidth, 200 + rect.getBoundingClientRect().width/2, window.innerWidth - (200 +rect.getBoundingClientRect().width/2), dets.clientX)
    gsap.to('.rect' , {
        left: xval,
        ease: Power2,
    })
})