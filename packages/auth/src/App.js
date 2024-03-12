import React from "react";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Routes>
          <Route path="/auth/signin" element={<SignIn onSignIn={onSignIn} />} />

          <Route path="/auth/signup" element={<SignUp onSignIn={onSignIn} />} />
        </Routes>
      </StylesProvider>
    </div>
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
