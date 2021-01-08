import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';
function skill() {
    return (
        <div>
            <h2 style={{borderBottom:"4px solid #2cd0f5",width:"80px",margin:"auto auto",marginTop:"3%",textAlign:"center"}}>Skills</h2>
            <div className="container" style={{marginBottom:"5%"}}>
    <h6>C Program</h6> <Progress percent={92} status="active" />
    <h6>Python</h6> <Progress percent={80} status="active" />
    <h6>Java</h6><Progress percent={50}  status="active"/>
    <h6>Oracle</h6><Progress percent={80} status="active"/>
    <h6>HTML5</h6>     <Progress percent={100} />
    <h6>CSS3</h6>     <Progress percent={90} status="active" />
    <h6>JavaScript</h6>     <Progress percent={80}  status="active"/>
    <h6>Django</h6>     <Progress percent={100}  />
    <h6>React</h6>     <Progress percent={80}  status="active"/>
</div>
        </div>
    )
}

export default skill
