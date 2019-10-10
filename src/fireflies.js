const firefliesSvg = document.getElementById("fireflies-svg");
const tl = new TimelineLite();

function printFireflies() {
    for (let i = 0; i < 30; i++) {
    //function of random numbers: Math.floor(Math.random() * (max - min + 1)) + min
        let randomX = Math.floor(Math.random() * 1919) + 1;
        let randomY = Math.floor(Math.random() * 951) + 100;
        let randomMovement = Math.floor(Math.random() * 3) -1.5;
        let randomX1 = Math.floor(Math.random() * 91) -30;
        let randomX2 = Math.floor(Math.random() * 91) -30;
        let randomX3 = Math.floor(Math.random() * 91) -30;
        let randomX4 = Math.floor(Math.random() * 91) -30;
        let randomX5 = Math.floor(Math.random() * 91) -30;
        let randomY1 = Math.floor(Math.random() * 40);
        let randomY2 = Math.floor(Math.random() * 40);
        let randomY3 = Math.floor(Math.random() * 40);
        let randomY4 = Math.floor(Math.random() * 40);
        let randomY5 = Math.floor(Math.random() * 40);
    
        firefliesSvg.insertAdjacentHTML('beforeend',
            `<g class="fireflies" id="firefly-${i}">
          <circle fill="#57BFEC" r="2" cy="${randomY}" cx="${randomX}" />
          <circle class="glow" fill="#57BFEC" filter="url(#glow-color)" r="11" cy="${randomY}" cx="${randomX}" />
      </g>`
        );
        tl
        .to(`#firefly-${i}`, 5, {
            bezier:{
                type:"soft", 
                values:[{x:randomX1, y:randomY1}, {x:randomX2, y:randomY2}, {x:randomX3, y:randomY3}, {x:randomX4, y:randomY4}, {x:randomX5, y:randomY5}],
                autoRotate:true
              },
            ease:Linear.easeNone, repeat:-1}, randomMovement
        )
    }
}

printFireflies()