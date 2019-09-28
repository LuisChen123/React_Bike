import React, { Fragment, useState } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import "../../style/common.less"


export default function home() {
    return (
        <Fragment>
            <div className="homaPage-wrap">
                <Row>
                    <Col span={3}>
                        <NavBar />
                    </Col>
                    <Col span={21}>
                        <Header />
                        <Row>
                            content
                    </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

