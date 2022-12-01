import React, { useState, useEffect } from "react";
import Axios from "axios";
import Select from 'react-select'
import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  faBars,
  faCheck,
  faDatabase,
  faFileCsv,
  faGear,
  faHome,
  faSearch,
  faTableCells,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom";


import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

const Algo_result_class = () => {

  const navLinkSty1es = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : 'black'
    }
  }

  useEffect(() => {
    /*  getData(); */
    getData_result();
  }, []);

  const [algo_result, setalgo_result] = useState([]);

  const getData_result = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algoresults").then((res) => {
      setalgo_result(res.data);
    });
  };
  let algo_result_arr = algo_result.slice(-1);
  console.log(algo_result_arr);



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


  return (
    <div>
       {/*  <Text
          h1
          size={50}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
         Classification Result Table
        </Text> */}
       <div className="eda-head">
                <div className="nav-back-icon">
                    <div className="btn">
                        <Link to="/Algo_result">
                            <button /* style={{ padding: '5px 20px 7px 20px', margin: '0px 150px 0px 0px' }} */>
                                <a>Back</a>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="eda-head-child">
                    <Text
                        h1
                        size={60}
                        className="dq-head"
                        css={{
                            textGradient: "45deg, $blue600 -10%, $black 80%",
                        }}
                        weight="bold"
                    >
                        Classification Result Table
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
      <div className="df-head-table">
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
            {/* <tr>
              <td className="custom-td-df-des">std</td>
              {df_dec_2.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr> */}
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
      </div>
    </div>
  )
}

export default Algo_result_class