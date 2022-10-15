import "./cusSpecUpdate.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import ImageUploading from 'react-images-uploading';

export default function CusSpecUpdate(props) {
  const [model, setModel] = useState(props.data.Model);
  const [fronts, setFronts] = useState(props.data.Front);
  const [temples, setTemples] = useState(props.data.Temples);
  const [lenses, setLenses] = useState(props.data.Lenses);
  const [price, setPrice] = useState(props.data.Price);

  const [err, setErr] = useState(true);
  const maxNumber = 20;

  const imageRemove = async (name, images) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8090/api/customSpectacles/image/${name}`);

      let imgs;

      switch (images) {
        case 'model':
          imgs = model.filter((image) => image !== name);
          setModel(imgs);
          saveData('Auto');
          break;

        case 'fronts':
          imgs = fronts.filter((image) => image !== name);
          setFronts(imgs);
          saveData('Auto');
          break;

        case 'temples':
          imgs = temples.filter((image) => image !== name);
          setTemples(imgs);
          saveData('Auto');
          break;

        case 'lenses':
          imgs = lenses.filter((image) => image !== name);
          setLenses(imgs);
          saveData('Auto');
          break;

        default:
          break;
      }

    } catch (err) {
      alert(err);
    }

  }

  const setFileData = async (imageList, addUpdateIndex) => {
    if (addUpdateIndex != undefined) {
      const formData = new FormData();
      formData.append('file', imageList[addUpdateIndex]['file']);

      try {
        const res = await axios.post('http://127.0.0.1:8090/api/customSpectacles/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },

        });
        const { fileName } = res.data;
        saveData('Auto');
        return fileName;

      } catch (err) {
        alert(err.res.data.msg);
      }
    }

  }


  const saveData = async (t) => {
    if (!Array.isArray(model) || !model.length || !Array.isArray(fronts) || !fronts.length || !Array.isArray(temples) || !temples.length || !Array.isArray(lenses) || !lenses.length) {
      setErr(false);
      toast.error("Please fill all field");
    } else if (price < 0) {
      setErr(false);
      toast.error("price feild error");
      setPrice('')
    } else if (err) {
      var nprice = "" + parseFloat(price).toFixed(2)
      // console.log(nprice);
      try {
        const res = await axios.patch(`http://127.0.0.1:8090/api/customSpectacles/${props.data._id}`, {
          Model: model,
          Front: fronts,
          Temples: temples,
          Lenses: lenses,
          Price: nprice,
        });
        toast.success(`${t} Saved`);
        props.getData();
        if (t == '') {
          props.closeModal();
        }
      } catch (err) {
        console.log(err);
        toast.error("Added Unsuccesfull");
      }
    }
  }


  return (
    <>
      <form id='addDesign' style={{ fontSize: "13px" }} className='sfont-color m-3'>
        <div className="mb-3 row">
          <label htmlFor="information" className="form-label col-md-12">Model:</label>
          <ImageUploading
            multiple
            value={model}
            onChange={async (imageList, addUpdateIndex) => {
              if (addUpdateIndex != undefined) {
                let image = await setFileData(imageList, addUpdateIndex);
                setModel(model => [...model, image]);
              }
            }}
            maxNumber={1}
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
              <div className="upload__image-wrapper d-flex flex-nowrap"
              >
                <div style={model.length > 0 ? { display: 'none' } : undefined}>
                  <button type="button" className="order-2 img-btn  m-2 btn btn-outline-secondary"
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                </div>
                {/* &nbsp; */}
                {/* <button type="button" onClick={onImageRemoveAll}>Remove all images</button> */}
                {imageList.map((image, index) => (
                  <div key={index} className="image-item d-flex flex-column justify-content-center order-1 m-2 img-wrapper ">
                    <img src={`../img/cus_spec/${image}`} alt="" width="100" />
                    <div className="image-item__btn-wrapper d-flex justify-content-center img-close-container">
                      {/* <button type="button" onClick={() => onImageUpdate(index)}>Update</button> */}
                      <button type="button" className="btn btn-danger img-close-btn" onClick={() => { onImageRemove(index); imageRemove(image, 'model') }}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="mb-3 row">
          <label htmlFor="information" className="form-label col-md-12">Front :</label>
          <ImageUploading
            multiple
            value={fronts}
            onChange={async (imageList, addUpdateIndex) => {
              if (addUpdateIndex != undefined) {
                let image = await setFileData(imageList, addUpdateIndex);
                setFronts(fronts => [...fronts, image]);
              }
            }}
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
                    <img src={`../img/cus_spec/${image}`} alt="" width="100" />
                    <div className="image-item__btn-wrapper d-flex justify-content-center img-close-container">
                      {/* <button type="button" onClick={() => onImageUpdate(index)}>Update</button> */}
                      <button type="button" className="btn btn-danger img-close-btn" onClick={() => { onImageRemove(index); imageRemove(image, 'fronts') }}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="mb-3 row">
          <label htmlFor="information" className="form-label col-md-12">Temples :</label>
          <ImageUploading
            multiple
            value={temples}
            onChange={async (imageList, addUpdateIndex) => {
              if (addUpdateIndex != undefined) {
                let image = await setFileData(imageList, addUpdateIndex);
                setTemples(temples => [...temples, image]);
              }
            }}
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
                    <img src={`../img/cus_spec/${image}`} alt="" width="100" />
                    <div className="image-item__btn-wrapper d-flex justify-content-center img-close-container">
                      {/* <button type="button" onClick={() => onImageUpdate(index)}>Update</button> */}
                      <button type="button" className="btn btn-danger img-close-btn" onClick={() => { onImageRemove(index); imageRemove(image, 'temples') }}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="mb-3 row">
          <label htmlFor="information" className="form-label col-md-12">Lenses :</label>
          <ImageUploading
            multiple
            value={lenses}
            onChange={async (imageList, addUpdateIndex) => {
              if (addUpdateIndex != undefined) {
                let image = await setFileData(imageList, addUpdateIndex);
                setLenses(lenses => [...lenses, image]);
              }
            }}
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
                    <img src={`../img/cus_spec/${image}`} alt="" width="100" />
                    <div className="image-item__btn-wrapper d-flex justify-content-center img-close-container">
                      {/* <button type="button" onClick={() => onImageUpdate(index)}>Update</button> */}
                      <button type="button" className="btn btn-danger img-close-btn" onClick={() => { onImageRemove(index); imageRemove(image, 'lenses') }}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="mb-3 row">
          <div className="col-md-3">
            <label htmlFor="Title" className="form-label">Price</label>
          </div>
          <div className="col-md-9">
            <input required type="number" className="form-control" id="Title" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <button type="button" className="btn primary-btn des-save-btn" onClick={() => saveData('')}><i class="fas fa-save"></i> Save</button>
        </div>
      </form>
    </>
  )
}
