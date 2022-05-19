// type Tprops = Record<string, any>;

import { observe } from "./observe";

class Component {
  // container: HTMLElement;
  // props: Tprops;
  constructor({ container, props = {} }) {
    this.container = container;
    this.props = props;
    this.init();
    this.render();
    this.mounted();
    this.setEvent();
  }
  init() {
    return {};
  }

  mounted() {}

  render() {
    this.container.innerHTML = this.markup();
    this.renderCallback();
  }

  markup() {}

  renderCallback() {}

  setEvent() {}
}

export default Component;
