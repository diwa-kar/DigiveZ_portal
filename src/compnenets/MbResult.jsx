import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";



const MbResult = () => {

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
           /*  Name: row.name,
            Email: row.email,
            id: row.id */

            Buy_price: row.Buy_price,
            Fuel_Type: row.Fuel_Type,
            Kilometres: row.Kilometres,
            Output: row.Output,
            Owner: row.Owner,
            Seller_Type: row.Seller_Type,
            Transmission_Type: row.Transmission_Type,
            Year : row.Year,
           
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
    }
  ];

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Table
          columns={columns}
          dataSource={state}
         /*  pagination={{ pageSize: 50 }} */
         pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
          scroll={{ y: 240 }}
        />
      )}
    </div>
  )
}

export default MbResult