import Component from "../core/Component";
import { setPost, store } from "../redux";

export default class ChildComponent extends Component {
  init() {
    this.markSort = (dataList) => {
      const stateList = dataList.sort(
        (view1, view2) => parseFloat(view2.marks) - parseFloat(view1.marks)
      );
      return stateList;
    };
  }
  markup() {
    return `<div>자식 컴포넌트</div>
    <div class= "post"></div>
    <button type="button" class="btn2">인기순</button>
    `;
  }
  renderCallback() {
    const post = this.container.querySelector(".post");
    store.getState().post.forEach((el) => {
      post.append(el.title);
    });
  }
  setEvent() {
    this.container.addEventListener("click", ({ target }) => {
      if (target.classList.contains("btn2")) {
        store.dispatch(setPost(this.markSort(store.getState().post)));
      }
    });
  }
}
