import React from 'react'
import Axios from "axios";
import { useEffect, useState } from 'react';
import { Table } from "antd";

import '../Css/DQ_result.css'

const DQ_result = () => {

    useEffect(() => {
        getData();
    }, []);

    const [columnlist, setcolumnlist] = useState([]);

    const getData = async () => {
        await Axios.get("http://127.0.0.1:5000/api/dqresult").then((res) => {
            setcolumnlist(res.data);
            console.log(res)
            console.log("im inside axios")

        });
    };
    let result_arr = columnlist.slice(-1);
    console.log(result_arr);
    const columns = [
        {
            title: "Column List",
            dataIndex: "list",
            width: 150,
        },
    ]

    return (
        <div className="eda-parent">
            <div className="eda-cont-left">
                <>
                    {/* {
            datatry.map((item)=>(
              <div key={item}>
                <li>{item}</li>
              </div>
            ))
          } */}
                </>
                <div className="df-head-table">
                    <table>
                        <thead>
                            <tr>
                                {result_arr.map((item) => (
                                    <div key={item._id}>
                                        {item.ColunmList.map((list) => (
                                            <th>{list}</th>
                                        ))}
                                    </div>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* {
            df_head_array.map((item, i)=>(
              <div className="cl-list-temp">
                <tr>{df_header_obk.map((header)=>(<td>{item[1]}</td>))}</tr>
              </div>
            ))
          } */}
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                                    defaultPageSize: 20,
                                    showSizeChanger: true,
                                    pageSizeOptions: ["10", "20", "30"],
                                }}
                                scroll={{ y: 510 }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DQ_result