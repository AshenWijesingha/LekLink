import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { convertToHTML } from 'draft-convert';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import DOMPurify from 'dompurify';

import "./cusSpectacle.css";
import Header from "../../components/header/Header";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/footer/Footer";

export default function CusSpectacle() {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [model, setModel] = useState('')
  const [Lenses, setLenses] = useState([])
  const [fronts, setFronts] = useState([])
  const [temples, setTemples] = useState([])
  const [lense, setLense] = useState('')
  const [front, setFront] = useState('')
  const [temple, setTemple] = useState('')
  const [price, setPrice] = useState('')
  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:8090/api/customSpectacles')
      setModel(res.data[0].Model);
      setLenses(res.data[0].Lenses);
      setFronts(res.data[0].Front);
      setTemples(res.data[0].Temples);
      setPrice(res.data[0].Price);
      setData(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const setModeldata = (e) => {
    setModel(data[e.target.value].Model);
    setLenses(data[e.target.value].Lenses);
    setFronts(data[e.target.value].Front);
    setTemples(data[e.target.value].Temples);
    setPrice(data[e.target.value].Price);
    setLense('')
    setFront('')
    setTemple('')
  }
  useEffect(() => {

  }, [index])

  return (
    <div className="app bg-color home-style">

      <Header />
      <div className="container d-flex mt-5 mb-0 flex-column">
        <div className="row col-md-12">
          <div className='col-md-7 si-img '>
            <div className='img-canves'>
              <img src={`/img/cus_spec/${model}`} alt="" />
              <img id='lens' src={`/img/cus_spec/${lense}`} alt="" />
              <img id='front' src={`/img/cus_spec/${front}`} alt="" />
              <img id='temple' src={`/img/cus_spec/${temple}`} alt="" />
            </div>
          </div>
          <div className='col-md-5 d-flex align-items-center flex-column sfont-color '>
            <h4>Select Design</h4>
            <div className='form-group d-flex flex-row m-2  col-md-12 font-color'>
              <label className='col-4'>Model </label>
              <select className='form-control  font-color' onChange={setModeldata}>
                {
                  data.map(function (item, index) {
                    return <option key={item._id} value={index}>{item.Model.toString().split('.').slice(0, -1).join('.')}</option>;
                  })
                }
              </select>
            </div>
            <div className='form-group d-flex flex-row m-2 col-md-12  font-color'>
              <label className='col-4'>Front</label>
              <select className='form-control  font-color' value={front} onChange={(e) => setFront(e.target.value)}>
                <option >Select Front</option>
                {
                  fronts.map(function (item, index) {
                    return <option key={index} value={item}>{item.toString().split('.').slice(0, -1).join('.')}</option>;
                  })
                }
              </select>
            </div>
            <div className='form-group d-flex flex-row m-2  col-md-12  font-color'>
              <label className='col-4'>Temples </label>
              <select className='form-control  font-color' value={temple} onChange={(e) => setTemple(e.target.value)}>
                <option>Select Temples</option>
                {
                  temples.map(function (item, index) {
                    return <option key={index} value={item}>{item.toString().split('.').slice(0, -1).join('.')}</option>;
                  })
                }
              </select>
            </div>
            <div className='form-group d-flex flex-row m-2  col-md-12  font-color'>
              <label className='col-4'>Lenses </label>
              <select className='form-control  font-color' value={lense} onChange={(e) => setLense(e.target.value)}>
                <option >Select Lenses</option>
                {
                  Lenses.map(function (item, index) {
                    return <option key={index} value={item}>{item.toString().split('.').slice(0, -1).join('.')}</option>;
                  })
                }
              </select>
            </div>
            <br />
            <button className='btn primary-btn'>Buy Now</button>
            <p className='col-12 text-center'>Rs.{price}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

