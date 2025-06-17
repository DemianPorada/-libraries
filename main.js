// const coords = document.querySelector('.js-coords');
// let mouseMoveCounter = 0;

// function onMouseMove(event) {
//   mouseMoveCounter += 1;
//   coords.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}
//   `;
// }

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

// function onInputChange(event){
//     inputedElements += 1;
//     output.textContent =`
//      Кількість викликів onInputChange: ${inputedElements},
//     input: ${event.target.value}
//     `;
// }

// window.addEventListener('input', _.debounce(onInputChange, 500));