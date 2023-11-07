import React, { Component, createRef } from "react";
import "./Editor.scss";

let selectText = "";
let selectHtml = "";
let selectionStart = 0;
let selectionEnd = 0;
let styleObj;
let styleArr = [];

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = createRef();
    this.state = {
      offsetX: 0,
      offsetY: 0,
      isSelection: false,
    };
  }

  componentDidMount = () => {
    this.editorRef.current.dataset.id = Math.random().toString(16).slice(2);
  };

  handlePost = () => {
    const content = this.editorRef.current.innerHTML;
    console.log(content);
  };

  handleClick = (e) => {
    //console.log(e);

    const content = this.editorRef.current.innerHTML;
    if (document.getSelection) {
      var selection = document.getSelection(); //Nội dung đã chọn

      var container = document.createElement("div");

      const range = selection.getRangeAt(0);

      container.appendChild(range.cloneContents());

      selectText = container.innerHTML;
      selectionStart = content.indexOf(selectText);
      selectionEnd = selectionStart + selectText.length;

      let selectionStatus = false;

      if (selectionStart !== selectionEnd) {
        selectionStatus = true;
      }

      this.setState({ isSelection: selectionStatus });

      selectHtml = "";

      // if (selectText !== "") {
      //   styleObj = this.getParents(range.startContainer);
      //   if (styleObj) {
      //     selectHtml = styleObj.outerHTML;
      //     selectionStart = content.indexOf(selectHtml);
      //     selectionEnd = selectionStart + selectHtml.length;
      //   }
      // }
    }
  };

  getParents = (currentObj) => {
    currentObj = currentObj.parentElement;
    const containerId = this.editorRef.current.dataset.id;
    let id = null;
    if (
      currentObj.dataset !== undefined &&
      Object.keys(currentObj.dataset).length > 0
    ) {
      id = currentObj.dataset.id;
    }

    let result = null;

    while (id != containerId) {
      result = currentObj;
      currentObj = currentObj.parentElement;
      id = currentObj.dataset.id;
    }

    return result;
  };

  handleMouseDown = (e) => {
    //console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    //console.log(e);
    const offsetX = e.nativeEvent.layerX;
    const offsetY = e.nativeEvent.layerY - 60;
    this.setState({ isSelection: false });
    this.setState({
      offsetX: offsetX,
      offsetY: offsetY,
    });
  };

  handleBoldText = () => {
    const content = this.editorRef.current.innerHTML;

    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd, content.length);

    console.log(selectText, selectionStart, selectionEnd);

    const styleBold = {
      text: selectText,
      start: selectionStart,
      end: selectionEnd,
      style: "bold",
    };

    let type = null;

    styleArr.forEach((item) => {
      //Trường hợp 1: start === selectionStart và end === selectionEnd
      if (item.start == selectionStart && item.end == selectionEnd) {
        type = 1;
      }

      //Trường hợp 2: selectionStart>=start && selectionEnd <= end
      if (
        (selectionStart > item.start && selectionEnd < item.end) ||
        (selectionStart >= item.start && selectionEnd < item.end) ||
        (selectionStart > item.start && selectionEnd <= item.end)
      ) {
        type = 2;
      }

      //Trường hợp 3:
      if (selectionStart < item.start || selectionEnd > item.end) {
        type = 3;
      }
      console.log(selectionStart, item.start);
      console.log(selectionEnd, item.end);
    });

    styleArr.push(styleBold);

    console.log(type);

    console.log(styleArr);

    //console.log(selectHtml);

    // let boldHtml = `<b>${selectText}</b>`;

    // console.log(selectHtml);

    // if (selectHtml != "") {
    //   const selectHtmlInner = styleObj.innerText;
    //   if (selectHtmlInner !== selectText) {
    //     selectHtml = selectHtml.replace(selectText, "");
    //     selectionEnd = selectionStart + selectHtml.length;
    //   }

    //   console.log(beforeContent, boldHtml, afterContent);

    //   // console.log(selectHtml);

    //   // console.log(selectionStart, selectionEnd);

    //   //boldHtml = selectText + selectHtml;
    //   // console.log("ok", selectText);
    // }

    //console.log(boldHtml, selectHtml);

    //this.editorRef.current.innerHTML = `${beforeContent}${boldHtml}${afterContent}`;

    this.setState({
      isSelection: false,
    });

    //console.log(selectText, selectionStart, selectionEnd);
  };

  handleItalicText = () => {
    const content = this.editorRef.current.innerHTML;
    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd, content.length);

    this.editorRef.current.innerHTML = `${beforeContent}<i>${selectText}</i>${afterContent}`;

    this.setState({
      isSelection: false,
    });
  };

  handleUnderlineText = () => {
    const content = this.editorRef.current.innerHTML;
    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd, content.length);

    this.editorRef.current.innerHTML = `${beforeContent}<u>${selectText}</u>${afterContent}`;

    this.setState({
      isSelection: false,
    });
  };

  render() {
    const { isSelection, offsetX, offsetY } = this.state;
    //console.log(isSelection, offsetX, offsetY);
    return (
      <div className="container">
        <div className="editor-wrap">
          <div
            className="editor mb-3"
            ref={this.editorRef}
            contentEditable={true}
            onClick={this.handleClick}
            onMouseDown={this.handleMouseDown}
          ></div>
          {isSelection && (
            <div
              className="toolbar"
              style={{ left: offsetX + "px", top: offsetY + "px" }}
            >
              <button onClick={this.handleBoldText}>B</button>
              <button
                onClick={this.handleItalicText}
                style={{ fontStyle: "italic" }}
              >
                I
              </button>
              <button
                onClick={this.handleUnderlineText}
                style={{ textDecoration: "underline" }}
              >
                U
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handlePost}
        >
          Đăng bài
        </button>
      </div>
    );
  }
}

export default Editor;
