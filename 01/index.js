"use strict";

const Parahraph = () => {
  return React.createElement(
    "p",
    {
      style: { backgroundColor: "blue", fontSize: "bold" },
      id: "first-paragraph",
      className: "paragraph",
    },
    "Lorem ipsum"
  );
};

const appContainer = document.querySelector("#app");

ReactDOM.render(React.createElement(Parahraph), appContainer);
