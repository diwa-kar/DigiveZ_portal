import React from 'react'
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import Axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"


import '../Css/DQ_report.css'


const DQ_report = () => {

    const navigate = useNavigate();

    const props = {
        action: 'http://127.0.0.1:5000/api/dqreport',

        onChange({ file, fileList }) {
            if (file.status === 'done') {
                console.log(file, fileList);
                navigate("/dqresult");
            }
        }
    }

    return (
       <div className='DQ_parent'>
         <h1 className='h1DQ'>Data Quality report</h1>
          <div className='dragfiles'>
               
                <Upload.Dragger {...props} multiple listType="picture" showUploadList={{ showRemoveIcon: true }} accept=".csv">
                    Drag csv files here
                    <br></br>
                    <br></br>
                    <Button>click to upload</Button>

                </Upload.Dragger>
            </div>



       </div>

    )
}

export default DQ_report