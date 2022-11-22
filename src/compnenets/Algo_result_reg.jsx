import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Text } from "@nextui-org/react";


const Algo_result_reg = () => {
  useEffect(() => {
    getData_result();
  }, []);
  const [algo_result, setalgo_result] = useState([]);
  const getData_result = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algoresults_reg").then((res) => {
      setalgo_result(res.data);
    });
  };
  let algo_result_arr = algo_result.slice(-1);
  console.log(algo_result_arr);

  let df_dec_1 = [];
  let df_dec_2 = [];
  let df_dec_3 = [];
  let df_dec_4 = [];
  let df_dec_5 = [];
  let df_dec_6 = [];
  let df_dec_7 = [];
  const df_dec_array = algo_result_arr.map((head_data) => {
    df_dec_1 = head_data.analyzed_data[1];
    df_dec_2 = head_data.analyzed_data[2];
    df_dec_3 = head_data.analyzed_data[3];
    df_dec_4 = head_data.analyzed_data[4];
    df_dec_5 = head_data.analyzed_data[5];
    df_dec_6 = head_data.analyzed_data[6];
    df_dec_7 = head_data.analyzed_data[7];

    return head_data.analyzed_data[0];
  });

  return (
    <div>
      <div className="histtable___cont_child">
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
         Regression Result Table
        </Text>
      </div>
        <div className="df-head-table">
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>MAE</th>
                <th>MSE</th>
                <th>RMSE</th>
                <th>R2</th>
                <th>RMSLE</th>
                <th>MAPE</th>
                <th>TT (Sec)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {df_dec_array.map((item, i) =>
                  item.map((list) => <td>{list}</td>)
                )}
              </tr>
              <tr>
                {df_dec_1.map((item, i) => (
                  <td>{item}</td>
                ))}
              </tr>
              {/* <tr>
                  <td className="custom-td-df-des">std</td>
                  {df_dec_2.map((item, i) => (
                    <td>{item}</td>
                  ))}
                </tr> */}
              <tr>
                {df_dec_3.map((item, i) => (
                  <td>{item}</td>
                ))}
              </tr>
              <tr>
                {df_dec_4.map((item, i) => (
                  <td>{item}</td>
                ))}
              </tr>
              <tr>
                {df_dec_5.map((item, i) => (
                  <td>{item}</td>
                ))}
              </tr>
              <tr>
                {df_dec_6.map((item, i) => (
                  <td>{item}</td>
                ))}
              </tr>
              <tr>
                {df_dec_7.map((item, i) => (
                  <td>{item}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Algo_result_reg