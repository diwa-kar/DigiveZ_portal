import { Button, Select, Input, Form } from 'antd'
import { data } from 'autoprefixer'
import React, { useState, useEffect } from 'react'
import '../Css/Modelbuilder.css'
import Axios from "axios";


import { Link } from "react-router-dom";
import { Text } from "@nextui-org/react";

const Modelbuilder = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://127.0.0.1:5000/api/modelbuilderresulthistory");
    console.log(data);
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  let result_arr = items.slice(-1);
  console.log(result_arr);



  const [buyprice, setbuyprice] = useState('0')

  const [year, setyear] = useState('1')

  const [kms, setkms] = useState('1')

  const [owner, setowner] = useState('1')

  const [fuel_type, setfuel_type] = useState('Petrol')

  const [seller, setseller] = useState('Dealer')

  const [gear, setgear] = useState('Manual')



  const ownerhandleChange = (selected_options) => {
    setowner(selected_options)

  }

  const fuelhandleChange = (selected_options) => {
    setfuel_type(selected_options)

  }

  const sellerhandleChange = (selected_options) => {
    setseller(selected_options)

  }

  const gearhandleChange = (selected_options) => {
    setgear(selected_options)

  }





  /*  const [data, setdata] = useState([{}])
  
   useEffect(() => {
     fetch("http://127.0.0.1:5000/api/user").then(
       res => res.json()
     ).then(
 
       data => {
         setdata(data)
         console.log(data)
       }
     )
 
 
   }, []) */



  const owner_array = [
    { value: 1 },
    { value: 2 },
    { value: 3 },

  ]

  const fuel_array = [
    { value: "Petrol", text: 1 },
    { value: "Diesel", text: 2 },
    { value: "CNG", text: 3 },

  ]

  const seller_array = [
    { value: "Dealer", text: 1 },
    { value: "Individual", text: 2 },


  ]

  const transmission_array = [
    { value: "Manual", text: 1 },
    { value: "Auto", text: 2 },


  ]

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let file = e.target.files[0];

    const res = await fetch("http://127.0.0.1:5000/api/modelbuilderresult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        buyprice,
        year,
        kms,
        owner,
        fuel_type,
        seller,
        gear

      }),
    });
    await res.json();
    /*  navigate('/mbresult') */
  };


  console.log(buyprice, year, kms, owner, fuel_type, seller, gear)

  return (
    <section className='Main_container'>
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
          Car price prediction
        </Text>
      </div>
      {/* <p className='pcar'>Car Price Prediction</p> */}

      <div className='modelbuilder_parent'>



        <form onSubmit={handleSubmit}>

          <label className="MB__form_lable" htmlFor="select" id="buyPrice">
            Enter the buying price (lakhs) &nbsp;
            <Input className="MB_input-box" type="number" /* step={0.01} */ id="" placeholder="Enter in lakhs" name="buyprice" onChange={(e) => setbuyprice(e.target.value)}  ></Input>
          </label>
          <br></br>
          <br></br>



          <label className="MB__form_lable" htmlFor="select">
            Enter kms driven &nbsp;
            <Input className="MB_input-box" type="number" id="" placeholder="Enter in kms" name="username" onChange={(e) => setkms(e.target.value)}  ></Input>
          </label>

          <br></br>
          <br></br>





          <label className="MB__form_lable" htmlFor="select">
            Age of Vehicle (Years) &nbsp;
            <Input className="MB_input-box" type='number' min={1} max={20} id="" placeholder="Enter the Age of Vehicle" name="Age_vechicle" onChange={(e) => setyear(e.target.value)}  ></Input>

          </label>

          <br></br>
          <br></br>





          <label className="MB__form_lable" htmlFor="select">
            Select the no of owner &nbsp;
            <Select
              size="large"
              placeholder="select no. of Owners"
              onChange={ownerhandleChange}
              className="mb_owner_inp"
              options={owner_array}
            >
            </Select>
          </label>


          <br></br>
          <br></br>


          <label className="MB__form_lable" htmlFor="select">
            Select the Fuel type &nbsp;
            <Select
              size="large"
              placeholder="select the fuel type"
              onChange={fuelhandleChange}
              className="mb_fuel_inp"
              options={fuel_array}
            >
            </Select>
          </label>

          <br></br>
          <br></br>

          <label className="MB__form_lable" htmlFor="select">
            Seller type &nbsp;

            <Select
              size="large"
              placeholder="select the seller type"
              onChange={sellerhandleChange}
              className="mb_seller_inp"
              options={seller_array}
            >
            </Select>
          </label>

          <br></br>
          <br></br>


          <label className="MB__form_lable" htmlFor="select">
            Gear Transmission type &nbsp;

            <Select
              size="large"
              placeholder="select the Transmission type"
              onChange={gearhandleChange}
              className="mb_transmission_inp"
              options={transmission_array}
            >
            </Select>
          </label>

          <br></br>
          <br></br>

          <Button type="primary" danger htmlType="submit">
            Submit
          </Button> &nbsp;



          <Link to="/mbresulthistory">
            <Button type="primary" htmlType="">
              History
            </Button>
          </Link>

        </form>

          <br></br>
          <br></br>

          <div className='output_container'>
            {
              result_arr.map((res)=>(
                <h3 key={res._id}>The result is {res.Output}</h3>
              )  
              )
            }
            <h3>testing the h3 here</h3>
          </div>

      </div>


    </section>



  )
}

export default Modelbuilder