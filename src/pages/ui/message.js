import React, { Fragment, useState } from 'react';
import { Card, Button, message } from 'antd';
import './ui.less';


export default function Messages(params) {
    function handleClick(params) {
        message[params]("you click is " + params);

    }
    return (
        <Fragment>
            <div>
                <Card title="Messages">
                    <Button onClick={() => { handleClick('success')}}>success</Button>
                    <Button onClick={() => { handleClick('error') }}>error</Button>
                    <Button onClick={() => { handleClick('info') }}>info</Button>
                    <Button onClick={() => { handleClick('warning') }}>warning</Button>
                    <Button onClick={() => { handleClick('loading') }}>loading</Button>
                </Card>
            </div>
        </Fragment>
    )
}