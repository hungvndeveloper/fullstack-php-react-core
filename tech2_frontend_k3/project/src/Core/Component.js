import App from "../App";
const prevNodeObj = {};
let componentChange = null;
const renderCount = {};
export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    setTimeout(() => {
      if (renderCount[this.constructor.name] === undefined) {
        this.executeComponentDidMount(this);
        renderCount[this.constructor.name] = 1;
      }
    }, 0);
  }

  minifyHtml = (input) => {
    const output = input
      .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, "")
      .replace(/\>\s*\</g, "><")
      .replace(/>\s+|\s+</g, function (m) {
        return m.trim();
      })
      .trim();
    return output;
  };

  setState = (state) => {
    const app = document.querySelector("#app");
    componentChange = this.constructor.name;
    const prevRender = this.minifyHtml(this.render());
    //const appContent = new App().render();
    const appContent = this.minifyHtml(app.innerHTML);

    const keys = Object.keys(state);

    const prevState = JSON.parse(JSON.stringify(this.state));

    if (keys.length) {
      keys.forEach((key) => {
        this.state[key] = state[key];
      });

      const render = this.minifyHtml(this.render());

      const newContent = appContent.replace(prevRender, render);

      app.innerHTML = newContent;

      //renderCount++;
      renderCount[this.constructor.name]++;

      if (
        renderCount[this.constructor.name] >= 2 &&
        typeof this.componentDidUpdate === "function"
      ) {
        this.componentDidUpdate(prevState);
      }

      //this.show(prevNodeObj[componentChange], this); //re-render
    }
  };

  compile = (Component, args = {}) => {
    const componentNode = new Component(args).render();

    const className = new Component().constructor.name;
    prevNodeObj[className] = componentNode;
    return componentNode;
  };

  show = (prevNode, Component) => {
    if (typeof Component == "object") {
      const newNode = Component.render();

      prevNode.parentNode.replaceChild(newNode, prevNode);

      prevNodeObj[componentChange] = newNode;
    }
  };

  html = ([first, ...string], ...values) => {
    const currentClass = this.constructor.name;
    const result = values
      .reduce(
        (prevValue, newValue) => {
          return prevValue.concat(newValue, string.shift());
        },
        [first]
      )
      .filter((item) => (item && item !== true) || item === 0)
      .map((item) => {
        if (typeof item === "function") {
          window[currentClass + item.name] = item;
          return currentClass + item.name + "(event)";
        }
        return item;
      });
    return result.join("");
  };

  executeComponentDidMount = (obj) => {
    if (typeof obj.componentDidMount === "function") {
      obj.componentDidMount();
    }
  };
}

//render()
//Lấy node từ render() => Lưu vào 1 thuộc tính

//Sau khi update node cũ thành node mới => gán node mới thành node cũ cho lần render sau (giống reduce)
