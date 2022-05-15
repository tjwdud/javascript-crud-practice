import Component from "../core/Component";
// import { setA, setB, store } from "../store";
import { setPost, store } from "../redux";
import ChildComponent from "../component/ChildComponent";
export default class MainPage extends Component {
  init() {
    this.postList = [
      {
        _id: "61c80dc556c74c59542f500d",
        category: "project",
        title: "/★함께 앱 개발하실 팀원 구합니다★/",
        recruitmentStatus: "모집중",
        stacks: ["js", "efw"],
        views: 2,
        marks: 50,
      },
      {
        _id: "62747f80f2b86194926e0958",
        category: "project",
        title: "/테스트/",
        recruitmentStatus: "모집중",
        stacks: ["django", "nodejs", "spring"],
        views: 3,
        marks: 200,
      },
      {
        _id: "61c951dd56c74c59542f8a9e",
        category: "project",
        title: "/웹 프로젝트 진행하실 분!/",
        recruitmentStatus: "모집중",
        stacks: ["javascript", "nodejs", "python", "react", "vue"],
        views: 5,
        marks: 100,
      },
    ];

    store.dispatch(setPost(this.postList));
    this.populateSort = (dataList) => {
      const stateList = dataList.sort(
        (view1, view2) => parseFloat(view2.views) - parseFloat(view1.views)
      );
      return stateList;
    };
  }
  markup() {
    return `
    <div class="main">
      <div>부모 컴포넌트</div>
      <button type="button" class="btn">조회수</button>

      <div class="post">

      </div>
      
      <div class="child"></div>
    </div>
    `;
  }

  renderCallback() {
    const post = this.container.querySelector(".post1");
    store.getState().post.forEach((el) => {
      post.append(el.title);
    });
    const child = this.container.querySelector(".child");
    new ChildComponent({
      container: child,
    });
  }

  setEvent() {
    this.container.addEventListener("click", ({ target }) => {
      if (target.classList.contains("btn")) {
        store.dispatch(setPost(this.populateSort(this.postList)));
      }
    });
  }
}
