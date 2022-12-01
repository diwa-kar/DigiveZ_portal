import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { Text } from "@nextui-org/react";

import { Link } from "react-router-dom";


import "../Css/MbResultHistory.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"


import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

import ModalImage from "react-modal-image";
import { Button } from "@nextui-org/react";


import { faBars, faCheck, faDatabase, faGear, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const MbResultHistory = () => {

  const navLinkSty1es = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : 'black'
    }
  }

  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/modelbuilderresulthistory").then(
      res => {
        setloading(false);

        setstate(
          res.data.map(row => ({

            Buy_price: row.Buy_price,
            Fuel_Type: row.Fuel_Type,
            Kilometres: row.Kilometres,
            Output: row.Output,
            Owner: row.Owner,
            Seller_Type: row.Seller_Type,
            Transmission_Type: row.Transmission_Type,
            Year: row.Year,


          }))

        );
        console.log(state)
      }
    );
  };

  const columns = [
    {
      title: "Buy Price",
      dataIndex: "Buy_price",
      width: 150
    },
    {
      title: "Kilometres",
      dataIndex: "Kilometres",
      width: 150
    },
    {
      title: "Age of Vehicle",
      dataIndex: "Year",
      width: 150
    },
    {
      title: "No of Owners",
      dataIndex: "Owner",
      width: 150
    },
    {
      title: "Fuel Type",
      dataIndex: "Fuel_Type",
      width: 150
    },
    {
      title: "Seller Type",
      dataIndex: "Seller_Type",
      width: 150
    },
    {
      title: "Gear Type",
      dataIndex: "Transmission_Type",
      width: 150
    }, {
      title: "Result",
      dataIndex: "Output",
      width: 150
    }
  ];

  return (
    <div>
      {/*  <p className='pcar'>Car Price Prediction History Table</p> */}
      {/* <Text
          h1
          size={50}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
         Car Price Prediction History 
        </Text> */}
      <div className="eda-head">
        <div className="nav-back-icon">
        <div className="btn">
            <Link to="/mbresultpage">
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
            Car Price Prediction History
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




      <div className="mb-result-history-table">
        {loading ? (
          "Loading"
        ) : (
          <Table
            columns={columns}
            dataSource={state}
            /*  pagination={{ pageSize: 50 }} */
            pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
            scroll={{ y: 510 }}
          />

        )}
      </div>
    </div>
  )
}

export default MbResultHistory