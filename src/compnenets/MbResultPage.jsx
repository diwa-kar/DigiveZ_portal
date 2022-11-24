
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAutomobile,
  faBars,
  faBook,
  faCab,
  faCheck,
  faClock,
  faDatabase,
  faDollar,
  faFlag,
  faGasPump,
  faGear,
  faGears,
  faHome,
  faIndianRupee,
  faMale,
  faRupee,
  faRupeeSign,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";
import { Loading } from "@nextui-org/react";

import React, { useState, useEffect } from "react";
import { Text } from "@nextui-org/react";

import "../Css/MbResultPage.css";

import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom"

import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

import { Button } from "@nextui-org/react";


import graph_img_01 from '../assets/graph1.png'
import graph_img_02 from '../assets/graph2.png'


const MbResultPage = () => {

  const navLinkSty1es = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : 'black'
    }
  }


  useEffect(() => {
    fetchItems();
  }, []);
  const [loading, setloading] = useState(true);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://127.0.0.1:5000/api//modelbuilderresulthistory");
    console.log(data);
    setloading(false);
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  let result_arr = items.slice(-1);
  console.log(result_arr);

  return (
    <div>
      {loading ? (
        <>
          <div className="loader-spinner">
            <Loading color="primary" textColor="primary">
              Loading..!
            </Loading>
          </div>
        </>
      ) : (
        <div className="modelbuilder__parent">
         {/*  <div className="eda-head">
            <Text
              h1
              size={40}
              className="dq-head"
              css={{
                textGradient: "45deg, $blue600 -10%, $black 80%",
              }}
              weight="bold"
            >
              Car Price Prediction result
            </Text>
          </div> */}
          <div className="eda-head">
        <div className="nav-back-icon">
        <div className="btn">
            <Link to="/modelbuilder">
              <button style={{ padding: '5px 20px 7px 20px', margin: '-5px 150px 0px 0px' }}>
                <a>Back</a>
              </button>
             {/*  <button style={{ padding: '5px 20px 7px 20px', margin: '-5px 150px 0px 0px' }}>
                <a>History</a>
              </button> */}
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
            Car Price Prediction result
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

          <div className="MB_form__cont">
            <div className="MB_form_cont__child">
             {/*  <h1 className="mb_heading">Predicted Result💻</h1> */}
              <div className="flasktry">
                {result_arr.map((item) => (
                  <>
                    <div className="result_container">
                      <div className="result_header">
                        <p className="result_dec-1_size">
                          <FontAwesomeIcon icon={faIndianRupee} /> Price: {item.Buy_price}
                        </p>
                        <p className="result_dec-1_size">
                          {" "}
                          <FontAwesomeIcon icon={faClock} />
                          &nbsp;Used Years: {item.Year}
                        </p>
                        <p className="result_dec-1_size">
                          <FontAwesomeIcon icon={faAutomobile} />
                          &nbsp;Kms driven: {item.Kilometres}
                        </p>
                    
                        {/* <img src={`data:image/png;base64,${base64fun()}`} alt='vddsvsd' ></img> */}
                      </div>
                      <div className="result_header">
                        <p className="result_dec-1_size">
                          <FontAwesomeIcon icon={faMale} /> No. owner: {item.Owner}
                        </p>
                        <p className="result_dec-1_size">
                          {" "}
                          <FontAwesomeIcon icon={faGasPump} />
                          &nbsp;Fuel Type: {item.Year}
                        </p>
                        <p className="result_dec-1_size">
                          <FontAwesomeIcon icon={faGears} />
                          Transmission Type: {item.Transmission_Type}
                        </p>
                    
                        {/* <img src={`data:image/png;base64,${base64fun()}`} alt='vddsvsd' ></img> */}
                      </div>
                      
                      <div className="result_cont">
                        <p className="result_dec-2_size">
                          The average price of this used car is {" "}
                          <FontAwesomeIcon icon={faIndianRupee} />
                          {/* <FontAwesomeIcon icon="fas fa-rupee-sign" /> */}
                          {item.Output} lakhs
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="mb_analytics_img_cont">
                <div className="mb_country_data">
                  <p>Data from Diff country</p>

                  <ModalImage
                    className="mb_analyticsimg_size"
                    small={graph_img_01}
                    large={graph_img_01}
                    alt="Data from Diff country!"
                  />;
                </div>
                <div className="mb_country_data">
                  <p>mean Salary </p>
                  <ModalImage
                    className="mb_analyticsimg_size"
                    small={graph_img_02}
                    large={graph_img_02}
                    alt="Data from Diff country!"
                  />;
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default MbResultPage