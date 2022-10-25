import React from 'react'
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import Axios from "axios";
import { useState, useEffect } from 'react';

const DQreport2 = () => {

    

    const props = {
        action: 'http://127.0.0.1:5000/api/dqreport',

        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
                console.log(file, fileList);
            }
        }
    }


     

   




    return (
       <section>
         <div>
            <Upload {...props}>
                <Button /* onClick={getData} */ icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </div>
        <div>

        </div>
       </section>
    )
}

export default DQreport2