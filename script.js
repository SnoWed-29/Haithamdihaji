gsap.from('.leftSection',{
    duration:1 ,
    x: '-100%',
});
gsap.from('.rightSection',{
    duration: 1 ,
    delay: .5,
    x: '200%',
});
gsap.from('#mainPic' ,{
    duration: 2.2,
    rotation:'720',
    scale: 1,
    delay: .5,
})
gsap.from('.h2',{
    duration: 1,
    delay: 2,
    opacity: 0,
    stagger: .5,
});
gsap.from('.animation',{
    duration: .8,
    delay: .5,
    opacity: 0,
    stagger: .4,
});