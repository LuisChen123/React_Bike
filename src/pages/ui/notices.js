import React, {Fragment ,useState} from 'react';
import { Card, Button, notification } from 'antd';
import './ui.less';

export default function Notices() {
    function openNotices(params,placement) {
        notification[params]({
            message:"Please Read",
            description: "Your upload is " + params + "!",
            placement,
        })
    }
    return (
        <Fragment>
            <div className="notice-Wrap">
                <Card title="Notification">
                    <Button type="primary" onClick={() => { openNotices('success',"topLeft")}}>Success</Button>
                    <Button type="primary" onClick={() => { openNotices('error',"topRight") }}>error</Button>
                    <Button type="primary" onClick={() => { openNotices('info',"bottomLeft") }}>info</Button>
                    <Button type="primary" onClick={() => { openNotices('warning',"bottomRight") }}>warning</Button>
                </Card>
            </div>
        </Fragment>
    )
}