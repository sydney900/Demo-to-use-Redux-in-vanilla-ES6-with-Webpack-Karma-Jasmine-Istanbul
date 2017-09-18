// const createUI = () => {
//     const counterDiv = document.createElement('div');
//     counterDiv.setAttribute('id', 'counter');

//     const incButton = document.createElement('button');
//     incButton.setAttribute('id', 'inc');
//     incButton.innerText = '+';

//     const span = document.createElement('span');
//     span.setAttribute('id', 'text');

//     const decButton = document.createElement('button');
//     decButton.setAttribute('id', 'dec');
//     decButton.innerText = '-';
    
//     counterDiv.appendChild(incButton);
//     counterDiv.appendChild(span);
//     counterDiv.appendChild(decButton);
//     document.body.appendChild(counterDiv);
// };
// createUI();

require('../../scss/main.scss');
let counterDiv = document.createRange().createContextualFragment(`
<div id="counter">
    <button id="inc">+</button>
    <span id="text"></span>
    <button id="dec">-</button>
</div>
`);

document.body.appendChild(counterDiv);
