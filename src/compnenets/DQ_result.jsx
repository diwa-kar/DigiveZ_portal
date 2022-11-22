import React from 'react'
import Axios from "axios";
import { useEffect, useState } from 'react';
import { Table, Select } from "antd";

import { Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

import ModalImage from "react-modal-image";

//  importing the images for the graphs

import graph_img_01 from '../assets/graph1.png'
import graph_img_02 from '../assets/graph2.png'
import graph_img_03 from '../assets/graph3.png'
import graph_img_04 from '../assets/graph4.png'
import graph_img_05 from '../assets/graph5.png'
import graph_img_06 from '../assets/graph6.png'
import graph_img_07 from '../assets/graph7.png'
import graph_img_08 from '../assets/graph8.png'

import '../Css/DQ_result.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faBars, faCheck, faDatabase, faFileCsv, faGear, faHome, faSearch, faTableCells, faTableColumns } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DQ_result = () => {

    useEffect(() => {
        getData();
    }, []);

    // const [columnlist, setcolumnlist] = useState([]);
    const [df_eda, setdf_eda] = useState([])

    const getData = async () => {
        await Axios.get("http://127.0.0.1:5000/api/dqresult").then((res) => {
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
    /* use state for graph images */
    const [graph_img_1, setgraph_img_1] = useState("")
    const [graph_img_2, setgraph_img_2] = useState("")
    const [graph_img_3, setgraph_img_3] = useState("")
    const [graph_img_4, setgraph_img_4] = useState("")
    const [graph_img_5, setgraph_img_5] = useState("")
    const [graph_img_6, setgraph_img_6] = useState("")
    const [graph_img_7, setgraph_img_7] = useState("")
    const [graph_img_8, setgraph_img_8] = useState("")

    /* use state for graph images */

    // ************************** df head ******************************** 
    let df_row_1 = [];
    let df_row_2 = [];
    let df_row_3 = [];
    let df_row_4 = [];

    const df_head_array = result_arr.map((head_data) => {
        df_row_1 = head_data.df_head[1];
        df_row_2 = head_data.df_head[2];
        df_row_3 = head_data.df_head[3];
        df_row_4 = head_data.df_head[4];

        return head_data.df_head[0];
    });
    // ************************** df tail ******************************** 
    let df_tail_1 = [];
    let df_tail_2 = [];
    let df_tail_3 = [];
    let df_tail_4 = [];

    const df_tail_array = result_arr.map((tail_data) => {
        df_tail_1 = tail_data.df_tail[1];
        df_tail_2 = tail_data.df_tail[2];
        df_tail_3 = tail_data.df_tail[3];
        df_tail_4 = tail_data.df_tail[4];

        return tail_data.df_tail[0];
    });

    console.log(df_tail_array);

    // ************************** df describe function ******************************** 

    let df_dec_1 = [];
    let df_dec_2 = [];
    let df_dec_3 = [];
    let df_dec_4 = [];
    let df_dec_5 = [];
    let df_dec_6 = [];
    let df_dec_7 = [];
    const df_dec_array = result_arr.map((describe_data) => {
        df_dec_1 = describe_data.df_des[1];
        df_dec_2 = describe_data.df_des[2];
        df_dec_3 = describe_data.df_des[3];
        df_dec_4 = describe_data.df_des[4];
        df_dec_5 = describe_data.df_des[5];
        df_dec_6 = describe_data.df_des[6];
        df_dec_7 = describe_data.df_des[7];

        return describe_data.df_des[0];
    });

    // ************************** react chart ******************************** 

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Line Chart for Unique and Null values in the csv file ",
            },
        },
    };
     // ************************** react chart ******************************** 
    /* column list seperation from result array for graph*/

    let clListForGraph = [];
    let colforgraph = result_arr.map((item) =>
        item.ColunmList.map((list) => list)
    );
    let colf = colforgraph.map((cllist, i) =>
        cllist.map((cf, i) => clListForGraph.push(cf))
    );

    const labels = clListForGraph;

    let nullValuesList = [];
    let nullSep = result_arr.map((item) => item.null_values.map((list) => list));
    let nullsep2 = nullSep.map((cllist, i) =>
        cllist.map((cf, i) => nullValuesList.push(cf))
    );

    let uniqueValueList = [];
    let uniquesep = result_arr.map((item) =>
        item.unique_values.map((list) => list)
    );
    let uniquesep2 = uniquesep.map((cllist, i) =>
        cllist.map((cf, i) => uniqueValueList.push(cf))
    );

    let dfDesList = [];
    let dtypesep = result_arr.map((item) =>
        item.df_datatypes.map((list) => list)
    );
    let dtypesep2 = dtypesep.map((item) =>
        item.map((dfdeslistp, i) => {
            if (dfdeslistp === "int64" || dfdeslistp === "float64") {
                dfDesList.push(clListForGraph[i]);
            }
        })
    );

    console.log(dfDesList);
    const data = {
        labels,
        datasets: [
            {
                label: "Null values",
                data: nullValuesList,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "unique values",
                data: uniqueValueList,
                borderColor: "blue",
                backgroundColor: "skyblue",
            },
        ],
    };
    const navLinkSty1es = ({ isActive }) => {
        return {


            color: isActive ? 'blue' : 'black'
        }
    }
    /*  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx usestate variable for grpahs xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
    const [graph_1, setgraph_1] = useState("");
    const [graph_2, setgraph_2] = useState("");
    const [graph_3, setgraph_3] = useState("");

    const [graph_8, setgraph_8] = useState('')
    // bivariate graphs usestates
    const [graph_4, setgraph_4] = useState("");
    const [graph_4_1, setgraph_4_1] = useState("");

    const [graph_5, setgraph_5] = useState("");
    const [graph_5_1, setgraph_5_1] = useState("");

    const [graph_6, setgraph_6] = useState("");
    const [graph_6_1, setgraph_6_1] = useState("");

    const [graph_7, setgraph_7] = useState("");
    const [graph_7_1, setgraph_7_1] = useState("");
    /*  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx usestate variable for grpahs xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

    /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx handle change function for graphs xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
    const handleChange = (selectedoption) => {
        setgraph_1(selectedoption);
        console.log(selectedoption);
    };
    const handleChangeq = (selectedoption) => {
        setgraph_2(selectedoption);
        console.log(selectedoption);
    };
    const handleChange_3 = (selectedoption) => {
        setgraph_3(selectedoption);
        console.log(selectedoption);
    };

    // handleChange for bivariate graph
    const handleChange_4 = (selectedoption) => {
        setgraph_4(selectedoption);
        console.log(selectedoption);
    };

    const handleChange_4_1 = (selectedoption) => {
        setgraph_4_1(selectedoption);
        console.log(selectedoption);
    };

    const handleChange_5 = (selectedoption) => {
        setgraph_5(selectedoption);
        console.log(selectedoption);
    };

    const handleChange_5_1 = (selectedoption) => {
        setgraph_5_1(selectedoption);
        console.log(selectedoption);
    };
    const handleChange_6 = (selectedoption) => {
        setgraph_6(selectedoption);
        console.log(selectedoption);
    };

    const handleChange_6_1 = (selectedoption) => {
        setgraph_6_1(selectedoption);
        console.log(selectedoption);
    };

    const handleChange_7 = (selectedoption) => {
        setgraph_7(selectedoption);
        console.log(selectedoption);
    };
    const handleChange_7_1 = (selectedoption) => {
        setgraph_7_1(selectedoption);
        console.log(selectedoption);
    };

    const handleChange_8 = (selectedoption) => {
        setgraph_8(selectedoption);
        console.log(selectedoption);
    };

    /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx handle change function for graphs xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
  /* fgx */
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx posting to graph endpoints to flask xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

    const handlehitgraph_1 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_1,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_1(graph_img_01)
        } 
    };

    const handlehitgraph_2 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_2,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_2(graph_img_02 )
        }

    };

    const handlehitgraph_3 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_3", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_3,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_3(graph_img_03)
        }

    };
    const handlehitgraph_4 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_4", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_4,
                graph_4_1,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_4(graph_img_04)
        }

    };

    const handlehitgraph_5 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_5", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_5,
                graph_5_1,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_5(graph_img_05)
        }

    };
    const handlehitgraph_6 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_6", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_6,
                graph_6_1,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_6(graph_img_06)
        }

    };
    const handlehitgraph_7 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_7", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_7,
                graph_7_1,
            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_7(graph_img_07)
        }

    };
    const handlehitgraph_8 = async (e) => {
        const res = await fetch("http://127.0.0.1:5000/api/dqgraph_8", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                graph_8,

            }),
        });
        await res.json();
        if (res.status == 200) {
            console.log("im inside the set image")
            /*   setgraph_img_1(null) */
            setgraph_img_8(graph_img_08)
        }

    };

    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx posting to graph endpoints to flask xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


    return (
        <div className="eda-parent-cont">
            <div className="nav-and-eda-head">
                <div className="eda-head">
                    <div className="nav-back-icon"></div>
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
                            Data Quality Reporter
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
                                            <li >
                                                <NavLink style={navLinkSty1es} to='/modelbuilder' ><FontAwesomeIcon className="sidenav_icon" icon={faHome} /><div className='sidenav-text'> <h3 className="sidenav__mainhed">Home</h3></div></NavLink>

                                            </li>
                                            <li >
                                                <NavLink style={navLinkSty1es} to='/modelbuilder' ><FontAwesomeIcon className="sidenav_icon" icon={faDatabase} /> <h3 className="sidenav__mainhed">Model builder</h3></NavLink>

                                            </li>
                                            <li>
                                                <NavLink style={navLinkSty1es} to='/mbresult' ><FontAwesomeIcon className="sidenav_icon" icon={faSearch} /> <h3 className="sidenav__mainhed">Sales Forcast</h3></NavLink>

                                            </li>
                                            <li>
                                                <NavLink style={navLinkSty1es} to='/mbhistory' > <FontAwesomeIcon className="sidenav_icon" icon={faCheck} /> <h3 className="sidenav__mainhed">EDA</h3></NavLink>

                                            </li>
                                            <li>
                                                <NavLink style={navLinkSty1es} to='/mbhistory' > <FontAwesomeIcon className="sidenav_icon" icon={faGear} /> <h3 className="sidenav__mainhed">Algo analyzer</h3></NavLink>

                                            </li>
                                        </ul>

                                    </div>
                                </Popover.Content>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
            <div className="eda-parent">
                <div className="eda-cont-left">
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
                    <div className="eda-contleft-cont1">
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
                    <Line options={options} data={data} />
                </div>
                <div className="eda-cont-right">
                    <div className="colunm-list">
                        {result_arr.map((item) => (
                            <div key={item._id}>
                                <Table
                                    className="hist_table"
                                    size="small"
                                    columns={columns}
                                    dataSource={item.ColunmList.map((list) => ({ list }))}
                                    /*  pagination={{ pageSize: 50 }} */
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
                </div>
            </div>
            <div className="eda-head">
                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Columns datatype
                </Text>
            </div>
            <div className="df-head-table">
                <table>
                    <thead>
                        <tr>
                            {result_arr.map((item) =>
                                item.ColunmList.map((list) => <th>{list}</th>)
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {result_arr.map((item) =>
                                item.df_datatypes.map((list) => <td>{list}</td>)
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="eda-head">
                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Dataset Description
                </Text>
            </div>
            <div className="df-head-table">
                <table>
                    <thead>
                        <tr>
                            <th>Standard</th>
                            {dfDesList.map((item) => (
                                <th>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="custom-td-df-des">Count</td>
                            {df_dec_array.map((item, i) =>
                                item.map((list) => <td>{list}</td>)
                            )}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">Mean</td>
                            {df_dec_1.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">std</td>
                            {df_dec_2.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">min </td>
                            {df_dec_3.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">25%</td>
                            {df_dec_4.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">50%</td>
                            {df_dec_5.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">75%</td>
                            {df_dec_6.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="custom-td-df-des">max</td>
                            {df_dec_7.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="eda-head">
                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Top 5 rows
                </Text>
            </div>
            <div className="df-head-table">
                <table>
                    <thead>
                        <tr>
                            {result_arr.map((item) =>
                                item.ColunmList.map((list) => <th>{list}</th>)
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {df_head_array.map((item, i) =>
                                item.map((list) => <td>{list}</td>)
                            )}
                        </tr>
                        <tr>
                            {df_row_1.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            {df_row_2.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            {df_row_3.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            {df_row_4.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="eda-head">
                <Text
                    h1
                    size={40}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Bottom 5 rows
                </Text>
            </div>
            <div className="df-head-table">
                <table>
                    <thead>
                        <tr>
                            {result_arr.map((item) =>
                                item.ColunmList.map((list) => <th>{list}</th>)
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {df_tail_array.map((item, i) =>
                                item.map((list) => <td>{list}</td>)
                            )}
                        </tr>
                        <tr>
                            {df_tail_1.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            {df_tail_2.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            {df_tail_3.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        <tr>
                            {df_tail_4.map((item, i) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="eda-head">
                <Text
                    h1
                    size={60}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Univariate Analysis
                </Text>
            </div>
            <div className="univariate-graphs-cont">
                <div className="hist-graph-cont">
                    <h4>Histogram</h4>
                    <Select
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
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_1}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_1}
                        large={graph_img_1}
                        alt=""

                    />

                </div>
                <div className="upcomming-graph-cont">
                    <h4>Scaterplot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChangeq}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_2}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_2}
                        large={graph_img_2}
                        // alt="Data from Diff country!"
                    />

                </div>
                <div className="upcomming-graph-cont">
                    <h4>kdeplot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_3}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_3}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_3}
                        large={graph_img_3}
                       /*  alt="Data from Diff country!" */
                    />

                </div>
                <div className="upcomming-graph-cont">
                    <h4>Countplot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_8}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_8}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_8}
                        large={graph_img_8}
                       /*  alt="Data from Diff country!" */
                    />

                </div>
            </div>
            <div className="eda-head">
                <Text
                    h1
                    size={60}
                    className="dq-head"
                    css={{
                        textGradient: "45deg, $blue600 -10%, $black 80%",
                    }}
                    weight="bold"
                >
                    Bivariate Analysis
                </Text>
            </div>
            <div className="univariate-graphs-cont">
                <div className="hist-graph-cont">
                    <h4>Box Plot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_4}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>

                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_4_1}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_4}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_4}
                        large={graph_img_4}
                        /* alt="Data from Diff country!" */
                    />

                </div>
                <div className="hist-graph-cont">
                    <h4>stripplot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_5}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>

                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_5_1}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_5}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_5}
                        large={graph_img_5}
                        /* alt="Data from Diff country!" */
                    />

                </div>
                <div className="hist-graph-cont">
                    <h4>violinplot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_6}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>

                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_6_1}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_6}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_6}
                        large={graph_img_6}
                      /*   alt="Data from Diff country!" */
                    />

                </div>
                <div className="hist-graph-cont">
                    <h4>swarmplot</h4>
                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_7}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>

                    <Select
                        size="large"
                        placeholder="select country"
                        onChange={handleChange_7_1}
                        className="eda-select-inp"
                    >
                        {clListForGraph.map((cl, i) => (
                            <options value={cl} key={cl}>
                                {cl}
                            </options>
                        ))}
                    </Select>
                    <div className="eda-gh-btn-cont">
                        <Button className="eda-gh-btn" flat onPress={handlehitgraph_7}>Analyze</Button>
                    </div>
                    <ModalImage
                        className="mb_analyticsimg_size"
                        small={graph_img_7}
                        large={graph_img_7}
                        /* alt="Data from Diff country!" */
                    />

                </div>
            </div>


        </div>
    )
}

export default DQ_result