import React from "react";
import 'antd/dist/antd.css';


import Landing from "./compnenets/Landing";
import Login from "./compnenets/Login";
import Options from "./compnenets/Options";


import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Modelbuilder from "./compnenets/Modelbuilder";
import Salesforecast from "./compnenets/Salesforecast";
import Analyzer from "./compnenets/Analyzer";
import MbResult from "./compnenets/MbResult";
import MbResultHistory from "./compnenets/MbResultHistory";
import DQreport2 from "./compnenets/DQreport2";
import DQ_report from "./compnenets/DQ_report";
import DQ_result from "./compnenets/DQ_result";

import { NextUIProvider } from '@nextui-org/react';
import DQ_history from "./compnenets/DQ_history";




const App = () => (
  <div>
    <NextUIProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Landing></Landing>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/options" element={<Options></Options>} />
            {/*   <Route path="/dqreport" element={<DQreport></DQreport>}/> */}
            <Route path="/dqreport" element={<DQreport2></DQreport2>} />
            <Route path="/dq_report" element={<DQ_report />} />
            <Route path="/modelbuilder" element={<Modelbuilder></Modelbuilder>} />
            <Route path="/salesforecast" element={<Salesforecast></Salesforecast>} />
            <Route path="/analyzer" element={<Analyzer></Analyzer>} />
            <Route path="/mbresult" element={<MbResult></MbResult>} />
            <Route path="/mbresulthistory" element={<MbResultHistory></MbResultHistory>} />
            <Route path="/dqresult" element={<DQ_result></DQ_result>} />
            <Route path="/dqhistory" element={<DQ_history></DQ_history>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  </div>
);

export default App;
