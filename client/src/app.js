import Router from "./core/router";
import MainPage from "./pages/MainPage";
import Page1 from "./pages/Page1";
import NotFoundPage from "./pages/NotFoundPage";
class App {
  constructor(target) {
    this.target = target;
    this.routes = [
      { path: "/", component: MainPage },
      { path: "/page1", component: Page1 },
    ];
    this.NotFoundPage = NotFoundPage;
    this.render();
  }
  render() {
    new Router(this.target, this.routes, this.NotFoundPage);
  }
}

export default App;
