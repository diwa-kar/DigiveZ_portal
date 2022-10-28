import React from 'react'
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import Axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import { Text } from "@nextui-org/react";

import { Table } from "antd";



import '../Css/DQ_report.css'


const DQ_report = () => {


    const navigate = useNavigate();

    const props = {
        action: 'http://127.0.0.1:5000/api/dqreport',

        onChange({ file, fileList }) {
            if (file.status === 'done') {
                console.log("im inside post method")
                console.log(file, fileList);
                navigate("/dqresult");
                setTimeout(()=> {
                    navigate("/dqresult");
                   }, 2000);
            }



        }
    }

    useEffect(() => {
        getData();
    }, []);

    // const [columnlist, setcolumnlist] = useState([]);
    const [df_eda, setdf_eda] = useState([])

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


    return (
        <div className='DQ_parent'>
            {/* <h1 className='h1DQ'>Data Quality report</h1> */}
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
                    Data Quality report
                </Text>
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