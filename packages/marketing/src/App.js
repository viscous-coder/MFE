import React from "react";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./component/Landing";
import Pricing from "./component/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </StylesProvider>
  );
};

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import {
//   StylesProvider,
//   createGenerateClassName,
// } from "@material-ui/core/styles";

// import Landing from "./component/Landing";
// import Pricing from "./component/Pricing";
// import createMemoryRouter from "./CustomMemoryRouter ";

// const generateClassName = createGenerateClassName({
//   productionPrefix: "ma",
// });

// const { MemoryRouter } = createMemoryRouter();

// const App = () => {
//   return (
//     <div>
//       <StylesProvider generateClassName={generateClassName}>
//         <MemoryRouter>
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/pricing" element={<Pricing />} />
//           </Routes>
//         </MemoryRouter>
//       </StylesProvider>
//     </div>
//   );
// };

// export default App;
