import { useState, React, Component, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import ImageUploading from 'react-images-uploading';
import { InputGroup, Form } from 'react-bootstrap';

import "./addDesign.css";
import 'react-toastify/dist/ReactToastify.css';
import { convertToHTML } from 'draft-convert';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from 'dompurify';

export default function AddDesign() {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [images, setImages] = useState([]);
  const [err, setErr] = useState(true);
  const [qtyErr, setQtyErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  const onEditorStateChange = (e) => {
    setEditorState(e);
  };


  // const convertContentToHTML = () => {

  //   let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());

  //   setaaa(currentContentAsHTML);
  // }

  // const createMarkup = (html) => {
  //   return {
  //     __html: DOMPurify.sanitize(html)
  //   }
  // }

  const maxNumber = 6;

  const imageRemove = async (name) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8090/api/spectacles/image/${name}`);

      const imgs = images.filter((image) => image !== name);

      setImages(imgs);

      // console.log(images);
    } catch (err) {
      alert(err);
    }

  }

  const onChange = async (imageList, addUpdateIndex) => {
    if (addUpdateIndex != undefined) {


      const formData = new FormData();
      formData.append('file', imageList[addUpdateIndex]['file']);

      try {
        const res = await axios.post('http://127.0.0.1:8090/api/spectacles/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },

        });
        const { fileName } = res.data;
        setImages(images => [...images, fileName]);


      } catch (err) {
        alert(err.res.data.msg);
      }
    }
  };


  const addDesign = async (e) => {
    e.preventDefault();

    const data = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(data));
    if (quantity < 0) {
      setErr(false);
      toast.error("Quantity feild error");
      setQuantity('')
    } else if (price < 0) {
      setErr(false);
      toast.error("price feild error");
      setPrice('')
    } else if (!Array.isArray(images) || !images.length) {
      setErr(false);
      toast.error("Please input a image");
    } else if (err) {
      var nprice = "" + parseFloat(price).toFixed(2)
      // console.log(nprice);
      try {
        const res = await axios.post("http://127.0.0.1:8090/api/spectacles", {
          Title: title,
          Brand: brand,
          Quantity: quantity,
          Price: nprice,
          Description: rawContent,
          Images: images
        });
        if (res.data._id != null) {
          toast.success("Added Succesfull");
          setTitle('');
          setBrand('');
          setQuantity('');
          setPrice('');
          setEditorState(EditorState.createEmpty());
          setImages('');
        } else {
          toast.error("Added Unsuccesfull");
        }
      } catch (err) {
        console.log(err);
        toast.error("Added Unsuccesfull");
      }
    }
  };

  useEffect(() => {
    if (quantity < 0) {
      setQtyErr(true)
    } else {
      setQtyErr(false)
    }
  }, [quantity])

  useEffect(() => {
    if (price < 0) {
      setPriceErr(true)
    } else {
      setPriceErr(false)
    }
  }, [price])

  return (
    <>
      <div className="row">
        <div className="card">
          <h4 className="content-title sfont-color">Add New Design</h4>
          <form id='addDesign' onSubmit={addDesign} style={{ fontSize: "13px" }} className='sfont-color'>
            <div className="mb-3 row">
              <div className="col-md-6">
                <div className="col-md-12">
                  <label htmlFor="Title" className="form-label">Title</label>
                </div>
                <div className="col-md-12">
                  <input required type="text" className="form-control" id="Title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-md-12">
                  <label htmlFor="brand" className="form-label">Brand</label>
                </div>
                <div className="col-md-12">
                  <input required type="text" className="form-control" id="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter Brand Name" />
                </div>
              </div>
            </div>
            <div className="mb-3 row">

            </div>
            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="quantity" className="form-label col-md-12">Quantity</label>
                <InputGroup hasValidation>
                  <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter Quantity" required isInvalid={qtyErr} />
                  <Form.Control.Feedback type="invalid">
                    Quantity must be greater than or equal to zero
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col-md-6">
                <label htmlFor="price" className="form-label col-md-12">Price</label>
                <InputGroup hasValidation>
                  <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" required isInvalid={priceErr} />
                  <Form.Control.Feedback type="invalid">
                    Price must be greater than or equal to zero
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-12">
                <label htmlFor="description" className="form-label">Description</label>
              </div>
              <div className="col-md-12">
                <Editor
                  editorState={editorState}
                  wrapperClassName="form-control"
                  toolbarClassName="toolbar-class"
                  editorClassName="form-control"
                  onEditorStateChange={onEditorStateChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="information" className="form-label col-md-2">Images</label>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper d-flex flex-nowrap">
                    <button type="button" className="order-2 img-btn  m-2 btn btn-outline-secondary"
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    {/* &nbsp; */}
                    {/* <button type="button" onClick={onImageRemoveAll}>Remove all images</button> */}
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item d-flex flex-column justify-content-center order-1 m-2 img-wrapper ">
                        <img src={`../img/spec_img/${image}`} alt="" width="100" />
                        <div className="image-item__btn-wrapper d-flex justify-content-center img-close-container">
                          {/* <button type="button" onClick={() => onImageUpdate(index)}>Update</button> */}
                          <button type="button" className="btn btn-danger img-close-btn" onClick={() => { onImageRemove(index); imageRemove(image) }}><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
            {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(aaa)}></div> */}
            <div className="mb-3 row justify-content-center">
              <button type="submit" className="btn primary-btn des-save-btn"><i class="fas fa-save"></i> Add</button>
            </div>

          </form>
        </div>
      </div >
    </>
  );
}
