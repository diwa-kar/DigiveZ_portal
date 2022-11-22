import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import DatePicker from 'react-date-picker';

import '../Css/Salesforecast.css'



/* import { DatePicker, Space } from 'antd'; */

const Salesforecast = () => {

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

    console.log(value)

  }

 /*  const [value, onChange] = useState(new Date()); */

  const [date, setdate] = useState("")

  console.log("Date", date)





  return (
    <div className="sales-parent-cont">
      <div className="sales-head-child">
        <Text
          h1
          size={50}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
          Sales Forecast
        </Text>
      </div>
      {/* <Space direction="vertical">
        <DatePicker onChange={onChange} />
       
      </Space> */}
     {/*  <div className="date_picker">
        <DatePicker onChange={onChange} value={value} format='dd-MM-yyyy'/>

      </div> */}
      <div className="date_picker">
       {/*  <h1>The selected date : {date}</h1> */}
        <input type="date" placeholder="enter the date" onChange={e=>setdate(e.target.value)}></input>
      </div>



      <div className="sales_button">
        <Button className="eda-gh-btn" flat onPress={salesforecast_date}>
          Analyze
        </Button>
      </div>




    </div>
  )
}

export default Salesforecast