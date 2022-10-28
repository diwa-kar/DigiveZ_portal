import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";

import { Text } from "@nextui-org/react";


const DQ_history = () => {

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
            //   render: ((date:string) => getFullDate(date_time))
        },
        // {
        //   title: "Gear Type",
        //   dataIndex: "Transmission_Type",
        //   width: 150
        // }, {
        //   title: "Result",
        //   dataIndex: "Output",
        //   width: 150
        // }
    ];

    return (
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
                    EDA analysis History
                </Text>
            </div>
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
    )
}

export default DQ_history