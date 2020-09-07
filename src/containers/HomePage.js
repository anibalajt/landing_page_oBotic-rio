import React, { useEffect, useState } from "react";

import Spotlight from "../components/Spotlight";
import Steps from "../components/step";

const HomePage = ({}) => {
  useEffect(() => {}, []);

  return (
    <div className="HomePage">
      <Spotlight />
      <div className="backgroud-steps wrapper row">
        <div className="steps">
          <Steps />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
