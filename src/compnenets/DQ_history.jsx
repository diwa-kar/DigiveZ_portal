import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";

import { Text } from "@nextui-org/react";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"


import { Popover } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

import ModalImage from "react-modal-image";
import { Button } from "@nextui-org/react";


import { faBars, faCheck, faDatabase, faGear, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';


const DQ_history = () => {

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
        await Axios.get("http://127.0.0.1:5000/api/dqhistory").then(
            res => {
                setloading(false);

                setstate(
                    res.data.map(row => ({

                        //   Buy_price: row.Buy_price,
                        //   Fuel_Type: row.Fuel_Type,
                        //   Kilometres: row.Kilometres,
                        //   Output: row.Output,
                        //   Owner: row.Owner,
                        //   Seller_Type: row.Seller_Type,
                        //   Transmission_Type: row.Transmission_Type,
                        //   Year : row.Year,

                        file_name: row.file_name,
                        file_size: row.size,
                        rows_length: row.dataset_shape[0],
                        column_length: row.dataset_shape[1],
                        file_duplicate: row.df_duplicate_value,
                        date_time: row.current_time,


                    }))


                );
                console.log("im inside axios")
                console.log(state)

            }
        );
    };

    const columns = [
        {
            title: "File name",
            dataIndex: "file_name",
            width: 150
        },
        {
            title: "File size(MB)",
            dataIndex: "file_size",
            width: 150
        },
        {
            title: "No. of rows",
            dataIndex: "rows_length",
            width: 150
        },
        {
            title: "No. of columns",
            dataIndex: "column_length",
            width: 150
        },
        {
            title: "No. of dulpicates",
            dataIndex: "file_duplicate",
            width: 150
        },

        {
            title: "Date and Time",
            dataIndex: "date_time",
            width: 150,
        },

    ];

    return (
        <div>

          {/*   <div className="eda-head">     
                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    EDA analysis History
                </Text>
                
            </div> */}
            <div className="eda-head">
        <div className="nav-back-icon">
        <div className="btn">
            <Link to="/dqresult">
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
           Data Quality Report History
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

            
         <div className=" mb-result-history-table">
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

export default DQ_history