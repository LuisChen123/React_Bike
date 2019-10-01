import React, { Fragment } from 'react';
import './style.less';

export default function Footer() {
    return (
        <Fragment>
          <div className="foot-wrap">
             <span className="footer-text">YuhangChen © 2019 . All rights reserved.</span>
        
                 <div className="icon-wrap">
                    <a href="https://github.com/LuisChen123" target="_blank" rel="noopener noreferrer">
                        <img className="github" src="/assets/github.svg" alt="link to my github accont" />
                    </a>
                    <a href="https://www.linkedin.com/in/luischen1990" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin" src="/assets/linkedin.svg" alt="link to my linkedin accont" />
                    </a>
                 </div>   
             </div>
     
        </Fragment>
    )
}

