import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}


const another = "chai and react"

const reactelement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
another
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />,
  {
    /* <MyApp />, */
  }
  // reactelement,
);
