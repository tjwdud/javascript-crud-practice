import Component from "../core/Component";
// import { setA, setB, store } from "../store";
import { setA, setB, store } from "../store";

const InputA = () =>
  `<input id="stateA" value="${store.getState().a}" size="5" />`;
const InputB = () =>
  `<input id="stateB" value="${store.getState().b}" size="5" />`;
const Calculator = () =>
  `<p>a + b = ${store.getState().a + store.getState().b}</p>`;
export default class MainPage extends Component {
  markup() {
    return `
    ${InputA()}
    ${InputB()}
    ${Calculator()}
    `;
  }
  mounted() {
    console.log(store.getState().b);
  }
  setEvent() {
    const $el = this.container;
    $el.querySelector("#stateA").addEventListener("change", ({ target }) => {
      store.dispatch(setA(Number(target.value)));
    });

    $el.querySelector("#stateB").addEventListener("change", ({ target }) => {
      store.dispatch(setB(Number(target.value)));
    });
  }
}
