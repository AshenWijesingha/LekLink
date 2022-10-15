import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

import CusSpecUpdate from '../../../components/cusSpecUpdate/CusSpecUpdate'

import "./customDesigns.css";
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

export default function CustomDesigns() {
  const [filteredData, setfilteredData] = useState([])
  const [data, setData] = useState([])
  const [modalData, setModalData] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const imageRemove = async (name) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8090/api/customSpectacles/image/${name}`);


      // console.log(images);
    } catch (err) {
      alert(err);
    }

  }

  const onDelete = (data) => {
    console.log(data);
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
          data.Front.forEach(img => {
            imageRemove(img);
          });
          data.Lenses.forEach(img => {
            imageRemove(img);
          });
          data.Model.forEach(img => {
            imageRemove(img);
          });
          data.Temples.forEach(img => {
            imageRemove(img);
          });
          axios.delete(`http://127.0.0.1:8090/api/customSpectacles/${data._id}`)
            .then(function (res) {
              getData();
              toast.success("Deleted successfull");
            });

        } catch (err) {
          console.log(err);
          toast.error("Deleted Unsuccesfull");
        }
      }
    })
  }

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:8090/api/customSpectacles')
      setData(res.data)
      // console.log(data);
      setfilteredData(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  function closeModal() {
    setIsOpen(false);
  }

  const onClicked = (data) => {
    // console.log(modalIsOpen);
    setModalData(data);
    setIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <>
      <div className='card'>
        <h4 className="content-title sfont-color">Custom Spectacle Designs</h4>
        <hr />
        <div class="list-group">
          {filteredData && filteredData.map(data =>
            <a key={data._id} onClick={() => onClicked(data)} class="list-group-item list-group-item-action d-flex justify-content-around align-items-center">
              <img src={`../img/cus_spec/${data.Model}`} alt="" width="100" />
              <label htmlFor="information" className="form-label">{data.Model.toString().split('.').slice(0, -1).join('.')}  </label>
              <label htmlFor="information" className="form-label">{data.Price}  </label>
              <div>
                <button className="mx-auto btn btn-danger sfont-size" onClick={(e) => { e.stopPropagation(); onDelete(data) }} ><i className="fas fa-trash-alt"></i> Delete</button>
              </div>
            </a>
          )}
          <Modal
            show={modalIsOpen}
            onHide={closeModal}
            size="lg"
          >
            <Modal.Header closeButton>
              {/* <Modal.Title>Modal heading</Modal.Title> */}
              <h5 className="content-title sfont-color">Custom Spectacle Design</h5>
            </Modal.Header>
            <Modal.Body>
              <CusSpecUpdate data={modalData} getData={() => getData()} closeModal={() => closeModal()} />
            </Modal.Body>
          </Modal>
        </div>
      </div >

    </>
  )
}

