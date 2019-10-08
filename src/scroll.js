const container = document.getElementById("background-img-scroll");
const home = document.getElementById("home-scroll");

const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

const scene1 = new ScrollMagic.Scene({
        triggerElement: '#trigger2',
        triggerHook: 0,
        duration: "100%",
        offset: 10
    })
    .setClassToggle(container, "dark2")
    .addTo(controller)

    const scene2 = new ScrollMagic.Scene({
        triggerElement: '#trigger3',
        triggerHook: 0,
        duration: "100%",
        offset: 10
    })
    .setClassToggle(container, "dark3")
    .addTo(controller)

    const scene3 = new ScrollMagic.Scene({
        triggerElement: '#trigger4',
        triggerHook: 0,
        duration: "100%",
    })
    .setClassToggle(container, "dark4")
    .addTo(controller)