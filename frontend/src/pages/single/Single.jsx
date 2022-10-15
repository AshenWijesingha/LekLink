import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { convertToHTML } from 'draft-convert';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import DOMPurify from 'dompurify';

import "./single.css";
import Header from "../../components/header/Header";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/footer/Footer";

export default function Single() {
  const [spectacles, setspectacles] = useState([])
  const [convertedContent, setConvertedContent] = useState([])
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty());

  const { id } = useParams();
  const getSpectacles = async () => {
    try {
      const res = await axios.get(`http://localhost:8090/api/spectacles/${id}`)
      // console.log(res.data);
      setspectacles(res.data)
      const contentState = convertFromRaw(JSON.parse(res.data.Description));
      setEditorState(EditorState.createWithContent(contentState));

    } catch (err) {
      alert(err.message)
    }
  }
  
  useEffect(() => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }, [editorState])



  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  useEffect(() => {
    getSpectacles();
  }, [])

  return (
    <div className="app bg-color home-style">

      <Header />
      <div className="container d-flex mt-3 mb-5 flex-column">
        <div className="row col-md-12">
          <div className='col-md-7 si-img '>
            <Carousel variant="dark">
              {spectacles.Images && spectacles.Images.map(img =>
                <Carousel.Item>
                  <img
                    src={`/img/spec_img/${img}`}
                    alt="First slide"
                  />

                </Carousel.Item>
              )}
            </Carousel>
          </div>
          <div className='col-md-5 d-flex align-items-center'>
            <div>
              <h4 >{spectacles.Title}</h4>
              <h6>{spectacles.Brand}</h6>
              <p>Rs.{spectacles.Price}</p>
              <div className='form-group d-flex flex-row m-2'>
                <label className='col-4'>Power type:</label>
                <input type="number" className='form-control col-' />
              </div>
              <button className='btn primary-btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="row col-md-12">
          <hr />
          <h5 className='text-center'>Description</h5>
          <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

