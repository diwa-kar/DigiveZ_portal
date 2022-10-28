import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/login.jpg";
import data_quality from "../assets/data_quality.jpg";
import data_quality_r from "../assets/data_quality_r.jpg";
import mb from "../assets/model_builder.jpg";
import sales from "../assets/sales_forecast.jpg";
import salesf from "../assets/sales_forecasting.jpg";
import algo from "../assets/Algo.jpg";

import { Text } from "@nextui-org/react";

import "../Css/Options.css";

const Options = () => {
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
          Our Products
        </Text>
      </div>
      <section className="align">
        <div className="card-container">

          <div classname="image-container">
            <img src={data_quality_r}></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Data Quality Reporter</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                This feature should give the web app user the best understanding
                of the data. which is there present inside
                <br></br>

              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/dq_report">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div classname="image-container">
            <img src={salesf} ></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Model Builder</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                In this feature, one should build a machine learning model for one
                specific real time business problem.
                <br></br>

              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/modelbuilder">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div classname="image-container">
            <img src={sales}></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Sales Forecasting</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                This feature should give the web app user the best understanding
                of the data. Various data exploratory
              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/salesforecast">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div classname="image-container">
            <img src={algo}></img>
          </div>
          <div className="card-content">
            <div className="cardtitle">
              <b>
                <h3>Algorithm Analyzer</h3>
              </b>
            </div>
            <div className="cardbody">
              <p>
                This feature should give the web app user the best understanding
                of the data. Various data exploratory
              </p>
            </div>
          </div>

          <div className="btn">
            <Link to="/analyzer">
              <button>
                <a>Get started </a>
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Options;
