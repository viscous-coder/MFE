import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};

// import { mount } from "marketing/MarketingApp";
// import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default () => {
//   const ref = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const { onParentNavigate } = mount(ref.current, {
//       onNavigate: ({ pathname: nextPathname }) => {
//         const { pathname } = navigate;

//         if (pathname !== nextPathname) {
//           navigate(nextPathname);
//         }
//       },
//     });

//     navigate(onParentNavigate);
//   }, []);

//   return <div ref={ref} />;
// };

// // import { mount } from "marketing/MarketingApp";
// // import React, { useRef, useEffect } from "react";

// // export default () => {
// //   const ref = useRef(null);

// //   useEffect(() => {
// //     mount(ref.current, {
// //       onNavigate: () => {
// //         console.log("The container noticed navigation in Marketing");
// //       },
// //     });
// //   }, []);

// //   return <div ref={ref} />;
// // };
