(function() {
  'use strict';
  const shine = document.getElementsByClassName('shine');

  document.addEventListener('mousemove', function(event) {
    const x = event.pageX;
    const y = event.pageY;
    
    const pX = x - (650 / 2);
    const pY = y - (650 / 2);
    
    shine[0].style.transform = `translate(${pX}px, ${pY}px)`;
  });
})();