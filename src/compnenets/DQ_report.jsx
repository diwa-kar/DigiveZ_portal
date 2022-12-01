import React from 'react'
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';

import Axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import { Text } from "@nextui-org/react";

import { Table } from "antd";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@nextui-org/react";

import { Link } from "react-router-dom";


import '../Css/DQ_report.css'
import { faBars, faCheck, faDatabase, faGear, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';


const DQ_report = () => {

    const navLinkSty1es = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'black'
        }
    }


    const navigate = useNavigate();

    const props = {
        action: 'http://127.0.0.1:5000/api/dqreport',

        onChange({ file, fileList }) {
            if (file.status === 'done') {
                console.log("im inside post method")
                console.log(file, fileList);
                navigate("/dqresult");
                setTimeout(() => {
                    navigate("/dqresult");
                }, 2000);
            }



        }
    }

    // useEffect(() => {
    //     getData();
    // }, []);

    // const [columnlist, setcolumnlist] = useState([]);
    /*   const [df_eda, setdf_eda] = useState([])
  
      const getData = async () => {
          await Axios.get("http://127.0.0.1:5000/api/dqcsv").then((res) => {
              setdf_eda(res.data);
              console.log(res)
              console.log("im inside axios")
  
          });
      };
      let result_arr = df_eda.slice(-1);
      console.log(result_arr);
  
      const columns = [
          {
              title: "List of columns",
  
              dataIndex: "list",
              width: 150,
          },
      ];
   */

    return (
        <div className='DQ_parent'>
            {/* <h1 className='h1DQ'>Data Quality report</h1> */}
            {/*  <div className="eda-head">
                <div >
                    <div className="nav-back-icon-dq-report" style={{ padding: '0px 0px 0 0px', background: 'rgb(251, 9, 9)' }}>
                        <Button ghost size="large">Back</Button>
                        <button>hello world</button>
                    </div>
                   
                </div>

                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Data Quality report
                </Text>
            </div> */}
            <div className="eda-head">
                
                <div className="nav-back-icon">
                    <div className="btn">
                        <Link to="/options">
                            <button /* style={{ padding: '5px 20px 7px 20px', margin: '0px 150px 0px 0px' }} */>
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
                       Data Quality reporter
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
            <div className='dragfiles'>

                <Upload.Dragger {...props} multiple listType="picture" showUploadList={{ showRemoveIcon: true }} accept=".csv">
                    Drag csv files here
                    <br></br>
                    <br></br>
                    <Button>click to upload</Button>


                </Upload.Dragger>
            </div>

            {/* <div className="eda-cont-right">
                <div className="colunm-list">
                    {result_arr.map((item) => (
                        <div key={item._id}>
                            <Table
                                className="hist_table"
                                size="small"
                                columns={columns}
                                dataSource={item.ColunmList.map((list) => ({ list }))}
                               
                                pagination={{
                                    defaultPageSize: 10,
                                    showSizeChanger: true,
                                    pageSizeOptions: ["10", "20", "30"],
                                }}
                                scroll={{ y: 410 }}
                            />
                        </div>
                    ))}
                </div>
            </div> */}





        </div>

    )
}

export default DQ_report