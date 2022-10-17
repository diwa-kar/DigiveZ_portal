import React, { useState } from 'react'

const DQreport = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("im in handle submit")

        // let file = e.target.files[0];

        // const sendCsv = () =>
        // {
        //   fetch("http://127.0.0.1:5000/api/modelbuilderresult", {
        //   method: "POST",
        //   headers: {
        //      'Accept': 'application/json',
        //      'Content-Type': 'application/json',
        //   },
        //   body:  JSON.stringify(csvFile)
        // })
        // .then(function(response){ 
        //  return response.json();   
        //  })
        //  .then(function(csvFile){ 
        //  console.log(csvFile)
        //  });
        // }
        // await res.json();


        const res = await fetch("http://127.0.0.1:5000/api/dqreport", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ csvFile }),
        });
        await res.json();
        console.log("Im from post method");


    };

    


    const [csvFile, setcsvFile] = useState()

    const [csvArray, setcsvArray] = useState([])



    // [{buyprice: "", kms: "", Fuel_type: "", seller_type: ""}]

    const processCsv = (str, delim = ',') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');
        // console.log(headers)
        // console.log(rows)



        const newArray = rows.map(row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })
        setcsvArray(newArray)
     
        console.log(newArray)




    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            processCsv(text)
           
            // console.log(text);
        }


        reader.readAsText(file);




    }





    return (
        <div>
            <form id='csv-form' onSubmit={handleSubmit}  >
                <input
                    type='file'
                    accept='.csv'
                    id='csvFile'
                    onChange={(e) => {
                        setcsvFile(e.target.files[0])
                    }}

                >
                </input>
                <br></br>
                <br></br>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    if (csvFile) submit()

                }}
                >Submit</button>

                <br></br>
                <br></br>


                {csvArray.length > 0 ? null : null}


            </form>


        </div>
    )
}

export default DQreport