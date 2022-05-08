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
  }
  init() {
    return {};
  }

  mounted() {}

  render() {
    observe(() => {
      this.container.innerHTML = this.markup();
      this.renderCallback();
      this.setEvent();
    });
  }

  markup() {}

  renderCallback() {}

  setEvent() {}
}

export default Component;
