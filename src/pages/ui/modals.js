import React ,{ Fragment ,useEffect, useState, Component}from 'react';
import './ui.less'
import { Card, Modal ,Button} from 'antd';


export default function MyModals() {
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);
    const [modal4Visible, setModal4Visible] = useState(false);

    function handleComfirm(type) {
        Modal[type]({
            title:"Comfirm?",
            content:'U sure u want to Comfirm?',
            onOk(){
                alert("ok")
            },
            onCancel(){
                alert("u are not sure about it!")
            }
        })
    }

    return(
        <Fragment>
            <div className="modals-wrap">
               <Card title="Basics Modal">
                <Button type="primary" onClick={()=> setModal1Visible(true)}>Basics Modal</Button>
                <Button type="danger" onClick={() => setModal2Visible(true)}>customized Footer Modal</Button>
                <Button type="dashed" onClick={() => setModal3Visible(true)}>Top 0px Modal</Button>
                <Button type="default" onClick={() => setModal4Visible(true)}>Vertically centered modal dialog</Button>
               </Card>
                <Modal
                title="Basics Modal"
                visible={modal1Visible}
                onCancel={() => setModal1Visible(false)}
                >
                <p>this is a basics modal</p>
                </Modal>
                <Modal
                    title="customized Footer Modal"
                    visible={modal2Visible}
                    onCancel={() => setModal2Visible(false)}
                    okText="Yes,I understand"
                    cancelText="No, let me go"
                >
                    <p>this is a customized modal</p>
                </Modal>
                <Modal
                    title="Top 0px Modal"
                    visible={modal3Visible}
                    onOk={() => setModal3Visible(false)}
                    onCancel={() => setModal3Visible(false)}
                    style={{ top: 0 }}
                >
                    <p>Top 0px Modal</p>
                </Modal>
                <Modal
                    title="Vertically centered modal dialog"
                    visible={modal4Visible}
                    onOk={() => setModal4Visible(false)}
                    onCancel={() => setModal4Visible(false)}
                    centered
                >
                    <p>Vertically centered modal dialog</p>
                </Modal>
                <Card title="Comfirm it">
                    <Button type="primary" onClick={() => handleComfirm('confirm')}>Basics Modal</Button>
                    <Button type="danger" onClick={() => handleComfirm('info')}>customized Footer Modal</Button>
                    <Button type="dashed" onClick={() => handleComfirm('success')}>Top 0px Modal</Button>
                    <Button type="default" onClick={() => handleComfirm('warning')}>Vertically centered modal dialog</Button>
                </Card>
            </div>
        </Fragment>
    )
}
