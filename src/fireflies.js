const firefliesSvg = document.getElementById("fireflies-svg");
const tl = new TimelineLite();

function printFireflies() {
    for (let i = 0; i < 30; i++) {
    //function of random numbers: Math.floor(Math.random() * (max - min + 1)) + min
        let randomX = Math.floor(Math.random() * 1919) + 1;
        let randomY = Math.floor(Math.random() * 951) + 100;
        let randomX1 = Math.floor(Math.random() * 41) -10;
        let randomX2 = Math.floor(Math.random() * 91) -30;
        let randomX3 = Math.floor(Math.random() * 101) -50;
        let randomX4 = Math.floor(Math.random() * 81) -40;
        let randomY1 = Math.floor(Math.random() * 26) +5;
        let randomY2 = Math.floor(Math.random() * 21) +20;
        let randomY3 = Math.floor(Math.random() * 21) +10;
        let randomY4 = Math.floor(Math.random() * 21);
        let randomOpacity = Math.floor(Math.random() * 1);
    
        firefliesSvg.insertAdjacentHTML('beforeend',
            `<g class="fireflies" id="firefly-${i}">
          <circle class="glow" fill="#57BFEC" r="2" cy="${randomY}" cx="${randomX}" />
          <circle class="glow" fill="#57BFEC" filter="url(#glow-color)" r="5" cy="${randomY}" cx="${randomX}" />
      </g>`
        );
        tl
        .to(`#firefly-${i}`, 2, {
            bezier:{
                type:"soft", 
                values:[{x:randomX1, y:randomY1, opacity: randomOpacity}, {x:randomX2, y:randomY2, opacity: randomOpacity}, {x:randomX3, y:randomY3, opacity: randomOpacity}, {x:randomX4, y:randomY4, opacity: randomOpacity}, {x:randomX1, y:randomY1, opacity: randomOpacity}],
                autoRotate:true
              },
            ease:Linear.easeNone, repeat:-1}, i * 0.10
        )
    }
}

printFireflies()