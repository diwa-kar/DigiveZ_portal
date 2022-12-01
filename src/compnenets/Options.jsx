import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/login.jpg";
import data_quality from "../assets/data_quality.jpg";
import data_quality_r from "../assets/data_quality_r.jpg";
import mb from "../assets/model_builder.jpg";
import sales from "../assets/sales_forecast.jpg";
import salesf from "../assets/sales_forecasting.jpg";
import algo from "../assets/Algo.jpg";

import { Button } from 'antd';

import { Text } from "@nextui-org/react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

import ModalImage from "react-modal-image";

import { useNavigate } from "react-router-dom"
import { faBars, faCheck, faDatabase, faGear, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

import "../Css/Options.css";

const Options = () => {


  const navLinkSty1es = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : 'black'
    }
  }

  return (
    <div>
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
          Our Products
        </Text>
      </div> */}
       <div className="eda-head">
        <div className="nav-back-icon">
          <div className="btn">
            <Link to="/">
              <button /* style={{ padding: '5px 20px 7px 20px', margin: '-5px 150px 0px 0px' }} */>
                Back
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
            Our Products
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
      <section className="align">
        <div className="card-container">

          <div classname="image-container">
            <img src={data_quality_r}></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Data Quality Reporter</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                This feature should give the web app user the best understanding
                of the data. which is there present inside
                <br></br>

              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/dq_report">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div classname="image-container">
            <img src={salesf} ></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Model Builder</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                In this feature, one should build a machine learning model for one
                specific real time business problem.
                <br></br>

              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/modelbuilder">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div classname="image-container">
            <img src={sales}></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Sales Forecasting</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                This feature should give the web app user the best understanding
                of the data. Various data exploratory
              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/salesforecast">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div classname="image-container">
            <img src={algo}></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Algorithm Analyzer</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                This feature should give the web app user the best understanding
                of the data. Various data exploratory
              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/Algo_analyzser">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Options;
