
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Select from 'react-select'
import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import {
  faDatabase,
  faFileCsv,
  faTableCells,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom";


import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

import ModalImage from "react-modal-image";


import { faBars, faCheck, faGear, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Algo_result = () => {

  const navLinkSty1es = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : 'black'
    }
  }


  const navigate = useNavigate();


  useEffect(() => {
    getData();
    getData_result();
  }, []);

  const [pycaretopt, setpycaretopt] = useState('class')
  const pycaret_options_array = [
    { value: "Classification", label: "Classification" },
    { value: "Regression", label: "Regression" },

  ]


  /*  const pycaret_options_array=['1','2'] */


  /*  var selectOpt_type = [];
   pycaret_options_array.forEach(function (element) {
     selectOpt_type.push({ label: element, value: element })
   }); */


  const pycaret_handleChange = (selectedoption) => {
    setpycaretopt(selectedoption.value)
    console.log(selectedoption)
    console.log(selectedoption.value)
  };

  const [algo_analyze, setalgo_analyze] = useState([]);
  const [algo_result, setalgo_result] = useState([]);
  const [colunm, setcolunm] = useState("");

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algocolunmnames").then((res) => {
      setalgo_analyze(res.data);
    });
  };
  let result_arr = algo_analyze.slice(-1);
  console.log(result_arr);

  const getData_result = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algoresults").then((res) => {
      setalgo_result(res.data);
    });
  };
  let algo_result_arr = algo_result.slice(-1);
  console.log(algo_result_arr);

  let clListForGraph = [];
  let colforgraph = result_arr.map((item) => item.collist.map((list) => list));
  let colf = colforgraph.map((cllist, i) =>
    cllist.map((cf, i) => clListForGraph.push(cf))
  );
  var selectOpt = [];
  clListForGraph.forEach(function (element) {
    selectOpt.push({ label: element, value: element })
  });


  const handleChange = (selectedoption) => {
    setcolunm(selectedoption);
    console.log(selectedoption);

  };


  const algo_col_options = async (e) => {
    if (pycaretopt === 'Classification') {
      console.log("im heading into classifcation endpoint")
      /* return ({
       
      }); */
      const res = await fetch("http://127.0.0.1:5000/api/post_col_name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          colunm,
          pycaretopt
        }),
      });
      await res.json();
      if (res.status == 200) {
        console.log("im headig to next page")

        setTimeout(() => {
          navigate("/algo_res_class");
        }, 2000);
      }
    }
    else {
      console.log("im heading into regression endpoint")
      const res = await fetch("http://127.0.0.1:5000/api/post_col_name_reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          colunm,
          pycaretopt
        }),
      });
      await res.json();
      if (res.status == 200) {
        console.log("im headig to next page")

        setTimeout(() => {
          navigate("/algo_res_reg");
        }, 2000);
      }

    }
    /*     const res = await fetch("http://127.0.0.1:5000/api/post_col_name", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            colunm,
            pycaretopt
          }),
        });
        await res.json();
        if (res.status == 200) {
          console.log("im headig to next page")
    
          setTimeout(() => {
            navigate("/algo_res_class");
          }, 2000);
        } */
  };

  let df_dec_1 = [];
  let df_dec_2 = [];
  let df_dec_3 = [];
  let df_dec_4 = [];
  let df_dec_5 = [];
  let df_dec_6 = [];
  let df_dec_7 = [];
  const df_dec_array = algo_result_arr.map((head_data) => {
    df_dec_1 = head_data.analyzed_data[1];
    df_dec_2 = head_data.analyzed_data[2];
    df_dec_3 = head_data.analyzed_data[3];
    df_dec_4 = head_data.analyzed_data[4];
    df_dec_5 = head_data.analyzed_data[5];
    df_dec_6 = head_data.analyzed_data[6];
    df_dec_7 = head_data.analyzed_data[7];

    return head_data.analyzed_data[0];
  });

  console.log(df_dec_array)

  return (
    <div className="algo-parent-cont">
 {/*      <div className="algo-head-child">
        <Text
          h1
          size={60}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
          Algorithm Analyzer
        </Text>
      </div> */}
       <div className="eda-head">
        <div className="nav-back-icon">
          <div className="btn">
            <Link to="/Algo_analyzser">
              <button /* style={{ padding: '5px 20px 7px 20px', margin: '-5px 150px 0px 0px' }} */>
                <a>Back</a>
              </button>
            </Link>
          </div>
        </div>
        <div className="eda-head-child">
          <Text
            h1
            size={45}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
            Algorithm Analyzer
          </Text>
        </div>
        <div className="nav-popover">
          <div className="nav-popover-child">
            <Popover placement="left">
              <Popover.Trigger>
                <Button auto flat>
                  <FontAwesomeIcon icon={faBars} />
                </Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="popover-after-cont">
                  <ul className="sidenav__listitems-main">
                    <li>
                      <NavLink style={navLinkSty1es} to="/modelbuilder">
                        <FontAwesomeIcon
                          className="sidenav_icon"
                          icon={faHome}
                        />{" "}
                        <h3 className="sidenav__mainhed">Home</h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={navLinkSty1es} to="/modelbuilder">
                        <FontAwesomeIcon
                          className="sidenav_icon"
                          icon={faDatabase}
                        />{" "}
                        <h3 className="sidenav__mainhed">Model builder</h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={navLinkSty1es} to="/mbresult">
                        <FontAwesomeIcon
                          className="sidenav_icon"
                          icon={faSearch}
                        />{" "}
                        <h3 className="sidenav__mainhed">Sales Forcast</h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={navLinkSty1es} to="/mbhistory">
                        {" "}
                        <FontAwesomeIcon
                          className="sidenav_icon"
                          icon={faCheck}
                        />{" "}
                        <h3 className="sidenav__mainhed">EDA</h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={navLinkSty1es} to="/mbhistory">
                        {" "}
                        <FontAwesomeIcon
                          className="sidenav_icon"
                          icon={faGear}
                        />{" "}
                        <h3 className="sidenav__mainhed">Algo analyzer</h3>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Popover.Content>
            </Popover>
          </div>
        </div>
      </div>
      <div className="eda-csv-name-cont">
        <div className="csv-name-child">
          <p className="eda-df-size-dec">CSV Name</p>
          {result_arr.map((item) => (
            <p className="eda-df-size-dec">
              <FontAwesomeIcon icon={faFileCsv} /> {item.file_name}
            </p>
          ))}
        </div>
      </div>
      <div className="eda-csv-name-cont">
        <div className="df-size">
          <p className="eda-df-size-dec">Size of the Dataset</p>
          {result_arr.map((item) => (
            <p className="eda-df-size-dec">
              <FontAwesomeIcon icon={faDatabase} /> {item.size} MB
            </p>
          ))}
        </div>
        <div className="df-shap df-shap-pad">
          <p className="eda-df-size-dec">shape of the Dataset</p>
          {result_arr.map((item) => (
            <>
              <p className="eda-df-shape-dec">
                <FontAwesomeIcon icon={faTableCells} /> No of rows:{" "}
                {item.dataset_shape[0]}
              </p>
              <p className="eda-df-shape-dec">
                {" "}
                <FontAwesomeIcon icon={faTableColumns} /> No of colunms:{" "}
                {item.dataset_shape[1]}
              </p>
            </>
          ))}
        </div>
      </div>
     {/*  <Text h3 className="algo-target-head">Select the target colunm</Text> */}
      <Text
            h1
            size={20}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
           Select the target feature
          </Text>
      <div className="select-option-cont">
        <Select
          onChange={handleChange}
          size="large"
          placeholder="select feature"
          className="eda-select-inp"
          options={selectOpt} />

        <Select
          size="large"
          placeholder="Classification/Regression"
          onChange={pycaret_handleChange}
          className="country_inp"
          options={pycaret_options_array}
        >
        </Select>
        {/* <Select

          size="large"
          placeholder="select country"
          onChange={handleChange}
          className="eda-select-inp"
        >
          {clListForGraph.map((cl, i) => (
            <options value={cl} key={cl}>
              {cl}
            </options>
          ))}

        </Select> */}
        <Button className="eda-gh-btn" flat onPress={algo_col_options}>
          Analyze
        </Button>
      </div>
      {/* <div className="df-head-table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Accuracy</th>
              <th>AUC</th>
              <th>Recall</th>
              <th>Prec</th>
              <th>F1</th>
              <th>Kappa</th>
              <th>MCC</th>
              <th>TT (Sec)</th>


            </tr>
          </thead>
          <tbody>
            <tr>

              {df_dec_array.map((item, i) =>
                item.map((list) => <td>{list}</td>)
              )}
            </tr>
            <tr>

              {df_dec_1.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
          
            <tr>

              {df_dec_3.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>

              {df_dec_4.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>

              {df_dec_5.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>

              {df_dec_6.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>

              {df_dec_7.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default Algo_result