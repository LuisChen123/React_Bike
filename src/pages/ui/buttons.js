import React ,{ Fragment, useEffect, useState}from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less';
export default function Buttons() {
    const [close, setClose] = useState(false);
    const [size, setSize] = useState("default");
    const ButtonGroup = Button.Group;

    return(
        <Fragment>
            <div className="Button-wrap">
                <Card title= "Basics Buttons" >
                    <Button type="primary">Primary</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button>Default</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                    <Button disabled>disabled</Button>
               </Card>
                <Card title= "Icon Buttons" >
                    <Button icon="plus">Create</Button>
                    <Button icon="edit">Edit</Button>
                    <Button icon="delete">Delete</Button>
                    <Button icon="downLoad">DownLoad</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">Search</Button>
               </Card>
                <Card title="Loading Icons" >
                    <Button type="primary" loading={close} onClick={() => setClose(true)}>Comfirm</Button>
                    <Button type="primary" shape="circle" loading={close} onClick={() => setClose(true)}></Button>
                    <Button loading={close} onClick={() => setClose(true)}>Click to load more</Button>
                    <Button shape="circle" loading={close} onClick={() => setClose(true)}></Button>
                    <Button type="primary" loading={close} onClick={() => setClose(true)}>Close</Button>
                </Card>
                <Card title="Button Group">
                    <ButtonGroup>
                        <Button type="primary" icon="left">Previous Page</Button>
                        <Button type="primary" icon="right">Next Page</Button>
                    </ButtonGroup>
                </Card>
                <Card title="Sized Icons" >
                    <Radio.Group value={size} onChange={(e)=> setSize(e.target.value)}>
                        <Radio value="small">Large</Radio>
                        <Radio value="default">Default</Radio>
                        <Radio value="large">Small</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>Comfirm</Button>
                    <Button type="dash" size={size}>hello</Button>
                </Card>

            </div>
        </Fragment>
    )
}
