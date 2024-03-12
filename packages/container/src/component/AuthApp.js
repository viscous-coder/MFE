import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      onSignIn: () => {
        onSignIn();
      },
    });
  }, []);
  return <div ref={ref} />;
};
