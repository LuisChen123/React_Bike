import React, {Fragment, useState} from 'react';
import { Card,Button, Spin,Icon ,Alert } from 'antd';
import './ui.less';

export default function LoadingPage(params) {
    const icon =<Icon type="loading" style={{fontSize:30}} />
    return(
        <Fragment>
           <Card title="Spin">
            <Spin size="small"/>
            <Spin />
            <Spin size="large"/>
            <Spin indicator={icon}/>
            <Icon type="setting" theme="filled" spin={true} style={{fontSize:30}}/>
           </Card>
           <Card title="Spin in the box">
             <Alert
             message="React yo"
             description="this is an alert"
             type="info"
             />
           
            <Spin 
            tip="loading..."
            indicator={icon}
            >
                    <Alert
                        message="React yo"
                        description="this is an alert"
                        type="warning"
                        
                    />
            </Spin>
           </Card>
        </Fragment>
    )
}