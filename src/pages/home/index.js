import React , { Fragment ,useState}from 'react';
import { Row, Col } from 'antd';


export default function home() {
    return(
        <Fragment>
            <div className= "homaPage-wrap">
                <Row>
                    <Col span={3}>
                    this is left 
                    </Col>
                    <Col span={21}>
                    this is right</Col>
                </Row>
            </div>
        </Fragment>
    )
}

