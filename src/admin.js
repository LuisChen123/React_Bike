import React, { Fragment, useState } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Home from './pages/home';
import "./style/common.less";



export default function home({children}) {
    return (
        <Fragment>
            <Row className="homePage-wrap">
                <Col span={3} className="navBar">
                    <NavBar />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className="content">
                        {children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        </Fragment>
    )
}

