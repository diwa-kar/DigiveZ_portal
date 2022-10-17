import React from "react";
import 'antd/dist/antd.css';


import Landing from "./compnenets/Landing";
import Login from "./compnenets/Login";
import Options from "./compnenets/Options";


import { BrowserRouter, Route, Routes, } from "react-router-dom";
import DQreport from "./compnenets/DQreport";
import Modelbuilder from "./compnenets/Modelbuilder";
import Salesforecast from "./compnenets/Salesforecast";
import Analyzer from "./compnenets/Analyzer";
import MbResult from "./compnenets/MbResult";
import MbResultHistory from "./compnenets/MbResultHistory";




const App = () => (
  <div>
   <BrowserRouter>
      <div>
        <Routes>
            <Route path="/" element={<Landing></Landing>}/>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/options" element={<Options></Options>}/>
            <Route path="/dqreport" element={<DQreport></DQreport>}/>
            <Route path="/modelbuilder" element={<Modelbuilder></Modelbuilder>}/>
            <Route path="/salesforecast" element={<Salesforecast></Salesforecast>}/>
            <Route path="/analyzer" element={<Analyzer></Analyzer>}/>
            <Route path="/mbresult" element={<MbResult></MbResult>}/>
            <Route path="/mbresulthistory" element={<MbResultHistory></MbResultHistory>}/>
            

        </Routes>


      </div>
   
   
   </BrowserRouter>
  </div>
);

export default App;
