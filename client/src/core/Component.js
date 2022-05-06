// type Tprops = Record<string, any>;

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
  init() {}

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
