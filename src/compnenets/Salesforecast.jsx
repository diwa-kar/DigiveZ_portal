import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Text } from "@nextui-org/react";
import { Table, Select } from "antd";


import DatePicker from 'react-date-picker';
import ModalImage from "react-modal-image";

import '../Css/Salesforecast.css'



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Button } from "@nextui-org/react";

import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom"

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

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx importing the result image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

import salesforecastresult from '../assets/salesforecastresult.png'
import salesforecast_2 from '../assets/salesforecast_2.jpg'
import salesforecast_3 from '../assets/salesforecast_3.jpg'
import salesforecast_1 from '../assets/salesforecast_1.jpg'
import salesforecast_4 from '../assets/salesforecast_4.jpg'


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx importing the result image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx importing the remainder of images xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx importing the remainder of images xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */



const Salesforecast = () => {

  useEffect(() => {
    getData();
    /* salesforecast_res */
    /* salesforecast_date(); */
  }, []);

  /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx use state for date xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

  const [date, setdate] = useState("")

  /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  use state for date xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

  /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx usestate for the image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
  const [salesforecast_res, setsalesforecast_res] = useState("")
  /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx usestate for the image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
  const [res_sales, setres_sales] = useState([])

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/salesforecastresult").then((res) => {
      setres_sales(res.data);
      console.log(res)
      console.log("im inside axios")

    });
  };
  let result_arr = res_sales.slice(-1);
  console.log("im the result array")
  console.log(result_arr);
  const columns = [
    {
      title: "List of columns",

      dataIndex: "list",
      width: 150,
    },
  ];

  const salesforecast_date = async (e) => {
    console.log("im heading into sales forecast endpoint")
    const res = await fetch("http://127.0.0.1:5000/api/sales_date", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date

      }),

    });
    console.log(date)
    if (res.status == 200) {
      console.log("im inside the set image")
      /*   setgraph_img_1(null) */
      setsalesforecast_res(salesforecastresult)
    }

  }


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
  console.log("head array");
  console.log(df_head_array);

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
  console.log("tail array");
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
  /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx codr for back button xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
  const navigate = useNavigate();
  const handleHistory = () => {
    navigate("/options");
  }
  /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx codr for back button xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */


  return (

    <div className="sales-parent-cont">
      {/*    <div className="sales-head-child">
        <Text
          h1
          size={60}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
          Sales Forecast
        </Text>
        <Text h3 className="dq-head">Enter the Date to perform sales forecast </Text>
      </div> */}
      <div className="nav-and-eda-head">
        <div className="eda-head">
          <div className="nav-back-icon">

            {/*  <Button type="primary">
                            <Icon type="left" />
                            Backward
                        </Button> */}
            {/*  <Button
                            auto
                            color="error"
                            icon={<backicon fill="currentColor" filled />}
                        /> */}

            <Button color="error" auto ghost onClick={handleHistory}>
              Back
            </Button>

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
              Sales Forecast
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
              <p className="eda-df-size-dec">File used</p>
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
      <div>
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
        <div>
          <Text
            h1
            size={40}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
            Time-series decompositon
          </Text>
          <div className="sale-forcast-result-cont">
            <ModalImage
              className="salesforcast_analyticsimg_size"
              small={salesforecast_2}
              large={salesforecast_2}
              alt="Time-series decompositon"
            />{/*  */}
          </div>
          <br></br>
          <br></br>

        </div>


        <div>
          <Text
            h1
            size={40}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
            Model Diagnostics
          </Text>
          <div className="sale-forcast-result-cont">
            <ModalImage
              className="salesforcast_analyticsimg_size"
              small={salesforecast_3}
              large={salesforecast_3}
              alt="Model Diagnostics"
            />{/*  */}
          </div>
          <br></br>
          <br></br>
        </div>

        <div>
          <Text
            h1
            size={40}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
            Sales prediction of excisting data
          </Text>
          <div className="sale-forcast-result-cont">
            <ModalImage
              className="salesforcast_analyticsimg_size"
              small={salesforecast_1}
              large={salesforecast_1}
              alt="Sales prediction of excisting data"
            />{/*  */}
          </div>
          <br></br>
          <br></br>
        </div>

        <div>
          <Text
            h1
            size={40}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
            One Step ahead forecast
          </Text>
          <div className="sale-forcast-result-cont">
            <ModalImage
              className="salesforcast_analyticsimg_size"
              small={salesforecast_4}
              large={salesforecast_4}
              alt="One Step ahead forecast"
            />{/*  */}
          </div>
          <br></br>
          <br></br>
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
          Enter the date to perform the Sales Forecast
        </Text>
      </div>
      <div className="sales-inp-menu">

        <div className="date_picker">
          {/*  <h1>The selected date : {date}</h1> */}
          <input
            type="date"
            placeholder="enter the date"
            onChange={(e) => setdate(e.target.value)}
          ></input>
        </div>

        <div className="sales_button">
          <Button className="eda-gh-btn" flat onPress={salesforecast_date}>
            Analyze
          </Button>

        </div>
      </div>
      <div className="sale-forcast-result-cont">
        <ModalImage
          className="salesforcast_analyticsimg_size"
          small={salesforecast_res}
          large={salesforecast_res}
          alt="Sales forcast!"
        />{/*  */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Salesforecast