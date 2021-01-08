import React from 'react'
import img1 from '../../comopnents/images/nahid1.jpg';
import img2 from '../../comopnents/images/nahid2.jpg';
import img3 from '../../comopnents/images/nahid3.jpg';
import img4 from '../../comopnents/images/nahid4.jpg';
import img5 from '../../comopnents/images/nahid5.jpg';
function galary() {
    return (
        <div style={{ background: "linear-gradient(90deg, rgba(219,244,251,1) 0%, rgba(238,255,255,1) 50%, rgba(227,253,255,1) 100%)"}}>
                             <h2 style={{borderBottom:"4px solid #2cd0f5",width:"120px",margin:"auto auto",marginTop:"4%",textAlign:"center"}}>Gallery</h2>

            <div className="container" style={{padding:"2%"}}>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-g" src={img1} alt="img1" style={{height:"300px",width:"100%",border:"6px solid #95e9f0" ,marginTop:"5%"}}/>
                    </div>
                    <div className="col-md-8">
                        <img className="img-g" src={img2} alt="img1" style={{height:"300px",width:"100%",border:"6px solid #95e9f0",marginTop:"2.5%"}}/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-g"  src={img3} alt="img1" style={{height:"300px",width:"100%",border:"6px solid #95e9f0",marginTop:"5%"}}/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-g" src={img4} alt="img1" style={{height:"300px",width:"100%",border:"6px solid #95e9f0",marginTop:"5%"}}/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-g" src={img5} alt="img1" style={{height:"300px",width:"100%",border:"6px solid #95e9f0",marginTop:"5%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default galary
