import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import axios from 'axios'

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2'
import { Modal } from 'react-bootstrap';

import StockPdf from '../../../components/pdfGenerate/stockPdf';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0 0 0 / 57%)'
  },
};


export default function AllDesign() {
  const [spectacles, setspectacles] = useState([])
  const [filteredData, setfilteredData] = useState([])
  const [search, setSearch] = useState('')
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const keys = ["Title", "Brand"];

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [images, setImages] = useState([]);
  const [err, setErr] = useState(true);
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty());

  const onEditorStateChange = (e) => {
    setEditorState(e);
  };

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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }


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
    const result = spectacles.filter((spectacle) => {
      // console.log(spectacle.Title.indexOf(search.toLocaleLowerCase()) > -1)
      // return spectacle.Title.indexOf(search.toLocaleLowerCase()) > -1
      return keys.some((key) => spectacle[key].toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    })
    setfilteredData(result)
  }, [search])

  useEffect(() => {
    getSpectacles()
  }, [])
  const columns = [
    {
      Header: 'Image',
      headerStyle: { textAlign: 'center' },
      cell: (row) => <img src={'../img/spec_img/' + row.Images[0]} width={80} className="mx-auto mt-2 mb-2" />

    },
    {
      name: 'Title',
      selector: row => row.Title,
      sortable: true
    },
    {
      name: 'Brand',
      selector: row => row.Brand,
      sortable: true
    },
    {
      name: 'Quantity',
      selector: row => row.Quantity,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => row.Price,
      sortable: true
    },
    {
      cell: (row) => <button className="mx-auto btn btn-danger" onClick={() => onRowDelete(row._id, row.Images)}><i className="fas fa-trash-alt"></i></button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const onRowDelete = (rid, imgs) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          imgs.forEach(img => {
            imageRemove(img);
          });
          axios.delete(`http://127.0.0.1:8090/api/spectacles/${rid}`)
            .then(function (res) {
              getSpectacles();
              toast.success("Deleted successfull");
            });

        } catch (err) {
          console.log(err);
          toast.error("Deleted Unsuccesfull");
        }
      }
    })
  }


  const onRowClicked = (row, event) => {
    // console.log(row)
    setId(row._id)
    setTitle(row.Title);
    setBrand(row.Brand);
    setQuantity(row.Quantity);
    setPrice(row.Price);
    const contentState = convertFromRaw(JSON.parse(row.Description));
    setEditorState(EditorState.createWithContent(contentState));
    setImages(row.Images);
    setIsOpen(true);
  };

  const updateDesign = async (e) => {
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
      try {
        const res = await axios.patch(`http://127.0.0.1:8090/api/spectacles/${id}`, {
          Title: title,
          Brand: brand,
          Quantity: quantity,
          Price: nprice,
          Description: rawContent,
          Images: images
        });
        // console.log(res);
        if (res.status == 200) {
          toast.success("Updated Succesfull");
          setTitle('');
          setBrand('');
          setQuantity('');
          setPrice('');
          setEditorState(EditorState.createEmpty());
          setImages('');
          getSpectacles()
          closeModal();
        } else {
          toast.error("Updated Unsuccesfull");
        }
      } catch (err) {
        console.log(err);
        toast.error("Updated Unsuccesfull");
      }
    }
  }

  return (
    <>
      <div className='card'>
        <h4 className="content-title sfont-color">Spectacle Designs</h4>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          fixedHeaderScrollHeight="450px"
          selecttableRowsHighlighted
          highlightOnHover
          onRowClicked={onRowClicked}
          data-tag="allowRowEvents"
          subHeader
          subHeaderComponent={
            <input
              type="text"
              className="w-25 form-control font-color"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
        <div className='d-flex'>
          <StockPdf data={filteredData} />
        </div>
        <Modal
          show={modalIsOpen}
          onHide={closeModal}
          size="lg"
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
            <h5 className="content-title sfont-color">Spectacle Design</h5>
          </Modal.Header>
          <Modal.Body>
            <form id='addDesign' onSubmit={updateDesign} style={{ fontSize: "13px" }} className="m-4  sfont-color">
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
                  <input required type="number" className="form-control col-md-12" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter Quantity" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="price" className="form-label col-md-12">Price</label>
                  <input required type="number" className="form-control col-md-12" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
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
                <button type="submit" className="btn primary-btn des-save-btn"><i class="fas fa-save"></i> Update</button>
              </div>

            </form>
          </Modal.Body>
        </Modal>
      </div >
    </>
  )
}

