import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./shop.css";
import Header from "../../components/header/Header";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/footer/Footer";

export default function Single() {
  const [spectacles, setspectacles] = useState([])
  const [filteredData, setfilteredData] = useState([])
  const getSpectacles = async () => {
    try {
      const res = await axios.get('http://localhost:8090/api/spectacles')
      setspectacles(res.data)
      setfilteredData(res.data)
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    getSpectacles()
  }, [])

  return (
    <div className="app bg-color home-style">

      <Header />
      <div className="container d-flex mt-5 mb-5">
        <div className="grid-container">
          {filteredData && filteredData.map(data =>
            <Link key={data._id} to={`/spectacle/${data._id}`} className="card grid-item sh-card">
              <div className="sh-img">
                <img src={`/img/spec_img/${data.Images[0]}`} alt="" />
              </div>
              <div className="sh-card-inf">
                <p>{data.Brand}</p>
                <h6>{data.Title}</h6>
                <p>Rs.{data.Price}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
