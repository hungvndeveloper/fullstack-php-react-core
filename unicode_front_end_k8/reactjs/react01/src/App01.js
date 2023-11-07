import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  // const element = React.createElement(
  //   'div',
  //   {
  //     className: 'container',
  //     id: 'container',
  //     // style: {
  //     //   fontStyle: 'italic',
  //     //   color: 'red'
  //     // },
  //     // onClick: () => {
  //     //   alert('Vừa click');
  //     // }
  //   },
  //   React.createElement(
  //     'h1',
  //     null,
  //     'Unicode Academy'
  //   ),

  //   React.createElement(
  //     'h2',
  //     null,
  //     React.createElement('a', {
  //       href: 'https://unicode.vn',
  //       target: '_blank'
  //     }, 'Mua khóa học')
  //   )
  // );

  const company = "Unicode Academy";

  const h2 = (
    <h2
      style={{
        fontStyle: "italic",
        color: "red",
      }}
    >
      Khóa học Front-end dev
    </h2>
  );

  //Event Handler => Hàm thực thi 1 sự kiện
  const handleClick = (text) => {
    //console.log(e);
    alert("Vừa click" + text);
  };

  // const handleClickNoParam = () => {
  //   handleClick("Unicode");
  // };

  const isStudent = true;
  /*
  False => Mua khóa học 
  true => Vào học
  */

  const studentLevel = 0;

  /*
  0 => Mặc định (Ko có màu)
  1 => Màu đỏ
  */

  const topElement = (
    <>
      <h1 className="title">{company}</h1>
      <h2 className="sub-title">
        {isStudent ? (
          <button
            style={{
              color: studentLevel === 1 ? "red" : "initial",
            }}
          >
            Vào học
          </button>
        ) : (
          <a href="#">Mua khóa học</a>
        )}
      </h2>
    </>
  );

  return (
    <>
      <Header />
      <Footer />
      <div className="container">
        {topElement}
        {h2}
        <button
          onClick={(e) => {
            handleClick(e.target.innerText);
          }}
        >
          Click me
        </button>
      </div>
      <div className="modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
