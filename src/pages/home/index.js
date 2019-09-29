import React, { Fragment, useState } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import "../../style/common.less"


export default function home() {
    return (
        <Fragment>

            <Row className="homePage-wrap">
                <Col span={3} className="navBar">
                    <NavBar />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className="content">
                        content
                    </Row>
                    <Footer />
                </Col>
            </Row>

        </Fragment>
    )
}

