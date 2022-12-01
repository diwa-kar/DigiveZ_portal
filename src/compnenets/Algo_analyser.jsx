import React from 'react'
import { Button, Upload } from 'antd';
import Axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import { Text } from "@nextui-org/react";

import '../Css/Algo_result.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import ModalImage from "react-modal-image";

import { faBars, faCheck, faDatabase, faGear, faGears, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Algo_analyser = () => {

    const navigate = useNavigate();

    
    const navLinkSty1es = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'black'
        }
    }


    const props = {
        action: 'http://127.0.0.1:5000/api/algofile_upload',

        onChange({ file, fileList }) {
            if (file.status === 'done') {
                console.log("im inside post method")
                console.log(file, fileList);
                /* navigate("/dqresult"); */
                setTimeout(() => {
                    navigate("/Algo_result");
                }, 2000);
            }
        }
    }

    return (
        <div className='DQ_parent'>
             <div className="eda-head">
        <div className="nav-back-icon">
          <div className="btn">
            <Link to="/options">
              <button /* style={{ padding: '5px 20px 7px 20px', margin: '-5px 150px 0px 0px' }} */>
                <a>Back</a>
              </button>
            </Link>
          </div>
        </div>
        <div className="eda-head-child">
          <Text
            h1
            size={50}
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
                          icon={faGears}
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
            {/* <div className="eda-head">
                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Algorithm Analyzer
                </Text>
            </div> */}
            <div className='dragfiles'>

                <Upload.Dragger {...props} multiple listType="picture" showUploadList={{ showRemoveIcon: true }} accept=".csv">
                    Drag csv files here to analyze
                    <br></br>
                    <br></br>
                    <Button>click to upload</Button>

                </Upload.Dragger>
            </div>
        </div>

    )
}

export default Algo_analyser