 const bttnChange = document.getElementById("bttn-change");
 const backgroundImg = document.getElementById("background-img");


const checkBackground = 
function () {
    if(backgroundImg.classList.contains("dark1")){
        backgroundImg.classList.remove("dark1")
        backgroundImg.classList.add("dark2")
    }else if(backgroundImg.classList.contains("dark2")){
        backgroundImg.classList.remove("dark2")
        backgroundImg.classList.add("dark3")
    }else if(backgroundImg.classList.contains("dark3")){
        backgroundImg.classList.remove("dark3")
        backgroundImg.classList.add("dark4")
    }else{
        backgroundImg.classList.remove("dark4")
        backgroundImg.classList.add("dark1")
    }
}

bttnChange.addEventListener("click", checkBackground)

const firefliesSvg = document.getElementById("fireflies-svg");
const tl = new TimelineLite();

/* function floatingAnimation(i) {
    let randomX1 = Math.floor(Math.random() * 41) - 10;
    let randomX2 = Math.floor(Math.random() * 91) - 30;
    let randomX3 = Math.floor(Math.random() * 101) - 50;
    let randomX4 = Math.floor(Math.random() * 81) - 40;
    let randomY1 = Math.floor(Math.random() * 26) + 5;
    let randomY2 = Math.floor(Math.random() * 21) + 20;
    let randomY3 = Math.floor(Math.random() * 21) + 10;
    let randomY4 = Math.floor(Math.random() * 21);
    let randomOpacity = Math.floor(Math.random() * 1);
    tl
        .to(`#firefly-${i}`, 2, {
            bezier: {
                type: "soft",
                values: [{
                    x: randomX1,
                    y: randomY1,
                    opacity: randomOpacity
                }, {
                    x: randomX2,
                    y: randomY2,
                    opacity: randomOpacity
                }, {
                    x: randomX3,
                    y: randomY3,
                    opacity: randomOpacity
                }, {
                    x: randomX4,
                    y: randomY4,
                    opacity: randomOpacity
                }, {
                    x: randomX1,
                    y: randomY1,
                    opacity: randomOpacity
                }],
                autoRotate: true
            },
            ease: Linear.easeNone,
            repeat: -1
        }, i * -0.10)
} */

function movingFireflies(i) {
    tl
        .to(`#firefly-${i}`, 20, {
            bezier: {
                curviness: 1,
                type: "soft",
                values: [{
                        x: Math.floor(Math.random() * 401) -200,
                        y: Math.floor(Math.random() * 601) -300,
                        opacity: 0,
                    }, {
                        x: Math.floor(Math.random() * 1001) -500,
                        y: Math.floor(Math.random() * 101) -50,
                        opacity: 1,
                    }, {
                        x: Math.floor(Math.random() * 1401) -700,
                        y: Math.floor(Math.random() * 801) -400,
                        opacity: 0,
                    }, {
                        x: Math.floor(Math.random() * 1800) -900,
                        y: Math.floor(Math.random() * 401) -200,
                        opacity: 0,
                    }, {
                        x: Math.floor(Math.random() * 2001) -1000,
                        y: Math.floor(Math.random() * 201) -100,
                        opacity: 0,
                    }
                ],
                autoRotate: true
            },
            ease: Linear.easeNone,
            repeat: -1
        }, i * -0.5)
}

function printFireflies() {
    for (let i = 0; i < 30; i++) {
    //function of random numbers: Math.floor(Math.random() * (max - min + 1)) + min
        let randomX = Math.floor(Math.random() * 1919) + 1;
        let randomY = Math.floor(Math.random() * 951) + 100;
    
        firefliesSvg.insertAdjacentHTML('beforeend',
            `<g class="fireflies" id="firefly-${i}">
          <circle class="glow" fill="#f1ff30" r="2" cy="${randomY}" cx="${randomX}" />
          <circle class="glow" fill="#f1ff30" filter="url(#glow-color)" r="5" cy="${randomY}" cx="${randomX}" />
      </g>`
        );
        movingFireflies(i)
    }
}

printFireflies()

