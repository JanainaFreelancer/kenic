 document.addEventListener('DOMContentLoaded', () => {
     let tl = new TimelineMax();
     tl.fromTo('.bg-loading', 2, { width: '100%' }, { width: '0%', delay: 3, ease: Expo.easeInOut })

     tl.fromTo('.about-preview', 1, { opacity: '0' }, { opacity: '1', ease: Expo.easeInOut }, '-=1')


     tl.fromTo('.js-principal', 0.7, { y: -50, opacity: '0' }, { y: 0, opacity: '1', ease: Expo.easeInOut }, '-=0.5')

     tl.fromTo('.js-preview', 0.9, { y: -50, opacity: '0' }, { y: 0, opacity: '1', ease: Expo.easeInOut }, '-=0.5')

     tl.fromTo('.js-atuacao', 0.9, { x: -50, opacity: '0' }, { x: 0, opacity: '1', ease: Expo.easeInOut }, '-=0.5')

 })