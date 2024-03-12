// import React, { lazy, Suspense, useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Router,
//   Link,
//   Redirect,
// } from "react-router-dom";
// import Header from "./component/Header";
// import { createBrowserHistory } from "history";
// import Progress from "./component/Progress";
// import {
//   StylesProvider,
//   createGenerateClassName,
// } from "@material-ui/core/styles";

// const history = createBrowserHistory();

// export default () => {
//   const MarketingLazy = lazy(() => import("./component/MarketingApp"));
//   const AuthLazy = lazy(() => import("./component/AuthApp"));
//   const DashboardLazy = lazy(() => import("./component/DashboardApp"));

//   const generateClassName = createGenerateClassName({
//     productionPrefix: "co",
//   });
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   useEffect(() => {
//     if (isSignedIn) {
//       history.push("/dashboard");
//     }
//   }, [isSignedIn]);
//   return (
//     <StylesProvider generateClassName={generateClassName}>
//       <BrowserRouter history={hsitory}>
//         <div>
//           <Header
//             isSignedIn={isSignedIn}
//             onSignOut={() => setIsSignedIn(false)}
//           />
//           <Suspense fallback={<Progress />}>
//             <Routes>
//               <Route path="/" element={<MarketingLazy />} />
//               <Route
//                 path="/auth/*"
//                 element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
//               />
//               <Route
//                 path="/dashboard"
//                 element={isSignedIn ? <DashboardLazy /> : <Redirect to="/" />}
//               />
//             </Routes>
//           </Suspense>
//         </div>
//       </BrowserRouter>
//     </StylesProvider>
//   );
// };

/*
import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Progress from "./component/Progress";
import Header from "./component/Header";

const MarketingLazy = lazy(() => import("./component/MarketingApp"));
const AuthLazy = lazy(() => import("./component/AuthApp"));
const DashboardLazy = lazy(() => import("./component/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route
                path="/auth/*"
                element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
              />
              <Route
                path="/dashboard"
                element={isSignedIn ? <DashboardLazy /> : <Navigate to="/" />}
              />
              <Route path="/" element={<MarketingLazy />} />
            </Routes>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

*/

import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Progress from "./component/Progress";
import Header from "./component/Header";

const MarketingLazy = lazy(() => import("./component/MarketingApp"));
const AuthLazy = lazy(() => import("./component/AuthApp"));
const DashboardLazy = lazy(() => import("./component/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [isSignedIn]);

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<Progress />}>
          <Routes>
            <Route
              path="/auth/*"
              element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
            />
            <Route
              path="/dashboard"
              // element={<DashboardLazy />}
              element={isSignedIn ? <DashboardLazy /> : <Navigate to="/" />}
            />
            <Route exact path="/*" element={<MarketingLazy />} />
          </Routes>
        </Suspense>
      </div>
    </StylesProvider>
  );
};
