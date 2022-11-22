import React from 'react'
import { Button, Upload } from 'antd';
import Axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import { Text } from "@nextui-org/react";

import '../Css/Algo_result.css'

const Algo_analyser = () => {

    const navigate = useNavigate();

    const props = {
        action: 'http://127.0.0.1:5000/api/algofile_upload',

        onChange({ file, fileList }) {
            if (file.status === 'done') {
                console.log("im inside post method")
                console.log(file, fileList);
                /* navigate("/dqresult"); */
                setTimeout(() => {
                    navigate("/Algo_result");
                }, 2000);
            }
        }
    }

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
                    Algorithm Analyzer
                </Text>
            </div>
            <div className='dragfiles'>

                <Upload.Dragger {...props} multiple listType="picture" showUploadList={{ showRemoveIcon: true }} accept=".csv">
                    Drag csv files here to analyze
                    <br></br>
                    <br></br>
                    <Button>click to upload</Button>

                </Upload.Dragger>
            </div>
        </div>

    )
}

export default Algo_analyser