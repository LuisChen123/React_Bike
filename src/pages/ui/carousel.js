import React, { Fragment, useEffect, useState } from 'react';
import { Card, Carousel  } from 'antd';
import './ui.less';

export default function Carousell(params) {
    return(
        <Fragment>
            <Card title="text only Carousel" className="Card-wrap">
                <Carousel autoplay effect="fade">
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </Card>
            <Card title="pic Carousel" className="pic-wrap">
                <Carousel autoplay>
                    <div>
                        <img src="/assets/carousel-img/carousel-1.jpg" alt="" style={{width:"100%"}}/>
                    </div>
                    <div>
                        <img src="/assets/carousel-img/carousel-2.jpg" alt="" style={{ width: "100%" }}/>
                    </div>
                    <div>
                        <img src="/assets/carousel-img/carousel-3.jpg" alt="" style={{ width: "100%" }}/>
                    </div>
                </Carousel>
            </Card>
        </Fragment>
    )
}

