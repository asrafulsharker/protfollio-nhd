import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import diu from '../../comopnents/images/diu.jpg'
import ppimsc from '../../comopnents/images/iajuddin.jpg'
import school from '../../comopnents/images/school.jpg';
function education() {
    return (
        <div>
            <div className="container" style={{marginTop:"3%",paddingBottom:"3%"}}>
        <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"165px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Education</h2>
        <Carousel style={{padding:"20px "}}>
  <Carousel.Item>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src={diu}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 style={{color:"#2cd0f5",textShadow:"2px 2px 0px #5a6061, 5px 4px 0px rgba(0,0,0,0.15)"}}>BSC in CSE</h2>
      <p>Daffodil International University	January 2019 - December 2021</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src={ppimsc}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#2cd0f5",textShadow:"2px 2px 0px #5a6061, 5px 4px 0px rgba(0,0,0,0.15)"}}>Higher Secondary Certificate</h3>
      <p>President Prof. Dr. Iajuddin Ahmed Residential Model School And College -2018</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src={school}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"#2cd0f5",textShadow:"2px 2px 0px #5a6061, 5px 4px 0px rgba(0,0,0,0.15)"}}>Secondary School Certificate</h3>
      <p>Bakultala H.A.K High School - 2016</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
    )
}

export default education
