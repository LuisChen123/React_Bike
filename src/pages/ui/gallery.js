import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import './ui.less';
const { Meta } = Card;

export default function Gallery(params) {
    const [currestImg , setCurrentImg] = useState();
    const [visible, setVisible] = useState(false);

    const imgs =[
        ["1.png", "2.png", "3.png", "4.png", "5.png"],
        ["6.png", "7.png", "8.png", "9.png", "10.png"],
        ["11.png", "12.png", "13.png", "14.png", "15.png"],
        ["16.png", "17.png", "18.png", "19.png", "20.png"],
        ["21.png", "22.png", "23.png", "24.png", "25.png"],
] 
    const imgList = imgs.map(list => list.map(item=>{
        return(
            <Card
            key={item}
            hoverable
            cover={<img alt="hello" src={'/assets/gallery/' + item}
            onClick={()=>{openPicModal(item)}}
            ></img>}
            style={{marginBottom:10}}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        )
    }))

    function openPicModal(ulr) {
        console.log(ulr)
        setVisible(true)
        setCurrentImg(ulr)
    }

    return(
        <Fragment>
            <Card title="Gallery">
                <Row gutter={16}> 
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col> 
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>  
                <Modal
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    footer={null}
                   width={300}
                   height={500}
                   title="this is pic title"
                >
                    <img 
                    src={'/assets/gallery/'+currestImg}
                    style={{width:"100%"}}
                    alt=""></img>
                </Modal> 
            </Card>

           
        </Fragment>
    )
}