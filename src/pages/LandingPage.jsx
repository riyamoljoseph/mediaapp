
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigateByUrl=useNavigate()
  return (
    <>
<Row className='mt-5 align-items-center justify-content-between w-100'>
  <Col> </Col>
  <Col lg={5}>
<h1 style={{textAlign:'justify'}}>Welcome To <span className='text-danger'> Media Player</span> </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab similique alias voluptatum ipsam, eos possimus obcaecati nam, necessitatibus cum assumenda eveniet rerum, quia est? Adipisci quidem magnam consequatur eligendi.</p>
  <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-primary'> <h6 className='text-white'> GET STARTED </h6></button>
  </Col>
  <Col lg={5}>
    <img src='https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif' alt=''></img>
  </Col>
  <Col></Col>
</Row>
<div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
  <h3>Features</h3>
  <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100 '>
  <Card className='p-5 bg-primary' style={{ width: '22rem' }}>
      <Card.Img  height={'300px'} width={'300px'}variant="top" src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='p-5 bg-primary' style={{ width: '22rem' }}>
      <Card.Img  height={'300px'} width={'300px'}variant="top" src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='p-5 bg-primary' style={{ width: '22rem' }}>
      <Card.Img  height={'300px'} width={'300px'}variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
  </div>
  
</div>

<div className='container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100'>
  <div className='col-lg-5'>
    <h3 className='mb-3 text-danger'>Simple,Powerful & Fast</h3>
    <h6 className='mb-5'><span className='fs-5 fw-bolder text-danger'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aperiam ipsa. Quas accusantium similique dolore blanditiis vitae optio non 
    nisi molestias incidunt eaque eligendi quis provident autem, dolor rem alias! </h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-danger'>Categorize Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aperiam ipsa. Quas accusantium similique dolore blanditiis vitae optio non 
    nisi molestias incidunt eaque eligendi quis provident autem, dolor rem alias! </h6>


    <h6 className='mb-5'><span className='fs-5 fw-bolder text-danger'>Managing Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aperiam ipsa. Quas accusantium similique dolore blanditiis vitae optio non 
    nisi molestias incidunt eaque eligendi quis provident autem, dolor rem alias! </h6>


  </div>
  <div className='video col-lg-5'>
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/b9eMGE7QtTk?si=8wOxr4M9hwlx0uMO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
  </div>

</div>

    </>
  )
}

export default LandingPage