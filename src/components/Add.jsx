import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

const[video,setVideo]=useState({

  id:"",caption:"",url:"",embedLink:""
})


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const getEmbedLink=(e)=>{
  const {value}=e.target
 if(value){
  const link=`https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
 }else{
  setVideo({...video,embedLink:""})
 }
}


const handleUpload= async()=>{

  const{id,caption,url,embedLink}= video
  
  if(!id|| !caption|| !url|| !embedLink){

    toast.warning("please fill the missing fields")
  }else{
    //make api call
    const response =await uploadVideo(video)
    console.log(response);
    
    if(response.status>=200 && response.status<300){
      toast.success(`${response.data.caption}video uploaded`)
//set server response
setUploadVideoServerResponse(response.data)

//reset video
setVideo({
  id:"",caption:"",url:"",embedLink:""
})

      //hide modal
      handleClose()
    }else{
      console.log(response);
      toast.error("something went wrong")
    }


  }
}



//console.log(video);

  return (
    <>
<div className='d-flex align-items-center'>
  <h5>Upload Videos</h5>
  <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus fa-beat-fade fs-5"></i></button>
</div>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill The Following Fields</p>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter Video Title"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter Video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter Video Link" onChange={getEmbedLink} />
       
      </Form.Group>
     

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
        </Modal>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    
    </>
  )
}

export default Add



//"https://www.youtube.com/embed/nqPV8K6Zqfw?si=iDhuzq6WmU7lBi8O"

//https://www.youtube.com/watch?v=nqPV8K6Zqfw