import React from 'react';
import {Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import project3 from '../../images/project3.jpg';
function Project3() {
    return (
        <div className="container" style={{padding:"2%"}}>
            <div className="row">
                <div className="col-md-6">
                    <img style={{height:"300px",width:"100%",padding:"20px",paddingTop:"50px"}} src={project3} alt=".."/>
                    
                </div>
                <div className="col-md-6">
                   <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Covid-19 Tracker</h2>
                   <br/>
                   <p>Corona Virus is, unfortunately, spreading through the entire world. What can we, as developers, do to make the situation better? We can help to spread awareness by visualizing the data. The data is fetched from the API and we'll create cards displaying the statistics as well as Charts. This project/application is created using the most modern JavaScript syntax. Along the way, you'll learn how to use Material UI, Charts.js, React Hooks, API data fetching, all of it in React JS!</p>
                   <br/>
                   <p>The project is going to fetch the live data from the API using Async/Await syntax. In this video, we also use React Hooks! By the end of this video, you will have a strong understanding of React's workflow; including data fetching, hooks, folder structure, and more.</p>
                </div>
            </div>
            <a href="http:" ><Button size="large" variant="contained" color="primary">
                    Show more <VisibilityIcon/>
                    </Button></a>
        </div>
    )
}

export default Project3;