import "../css/main.scss";
import { RandomGenerator } from './random-generator';
import calcFunction from "./calc";

const getNumbers = number => import(`./numbers/${number}.js`);

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    // demo tree shaking
    getNumbers("one").then((module) => {
        console.log(module.one);
        calcFunction.add();
        outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
    })
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);