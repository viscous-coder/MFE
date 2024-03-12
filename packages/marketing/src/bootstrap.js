import React from "react";
import ReactDOM from "react-dom";
// import { createMemoryHistory } from "history";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const mount = (el) => {
  // const history = createMemoryHistory();
  // history.listen(onNavigate);

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    el
  );
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev");
  if (el) {
    mount(el);
  }
}

export { mount };

// import React from "react";
// import ReactDOM from "react-dom";
// import { createMemoryHistory } from "history";
// import App from "./App";

// const mount = (el, { onNavigate }) => {
//   const history = createMemoryHistory();
//   history.listen(onNavigate);

//   ReactDOM.render(<App history={history} />, el);
// };

// if (process.env.NODE_ENV === "development") {
//   const el = document.querySelector("#_marketing-dev");
//   if (el) {
//     mount(el, { onNavigate: () => {} });
//   }
// }

// export { mount };

// import React from "react";
// import ReactDOM from "react-dom";
// import { createMemoryHistory, createBrowserHistory } from "history";
// import App from "./App";

// // Mount function to start up the app
// const mount = (el, { onNavigate, defaultHistory }) => {
//   const history = defaultHistory || createMemoryHistory();

//   if (onNavigate) {
//     history.listen(onNavigate);
//   }

//   ReactDOM.render(<App history={history} />, el);

//   return {
//     onParentNavigate({ pathname: nextPathname }) {
//       const { pathname } = history.location;

//       if (pathname !== nextPathname) {
//         history.push(nextPathname);
//       }
//     },
//   };
// };

// // If we are in development and in isolation,
// // call mount immediately
// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.querySelector("#_marketing-dev-root");

//   if (devRoot) {
//     mount(devRoot, { defaultHistory: createBrowserHistory() });
//   }
// }

// // We are running through container
// // and we should export the mount function
// export { mount };