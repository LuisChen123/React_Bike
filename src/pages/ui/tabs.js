import React, { Fragment, useState, useEffect} from 'react';
import { Card, Button, message, Tabs ,Icon } from 'antd';
import './ui.less';
const { TabPane } = Tabs;

export default function Tabss(params) {
    const [panes, setPanes] =useState([]);
    const [targetKey, setTargetKey] = useState();
    const [activekey, setactiveKey] =useState();
    const [newTabIndex, setNewTabIndex] = useState(0);

    function callback(params) {
        message.info("Hi, you clicked tab " + params)
    }

    function onEdit(targetKey, action) {
        this[action](targetKey);
        setTargetKey(targetKey);

    }

    function add(params) {
        setNewTabIndex(newTabIndex+1)
        setactiveKey(`newTab${newTabIndex}`)
        setPanes(panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activekey }))
    } 


    useEffect(() => {
     
        const panes=[
            {
                title:'Tab1',
                content:'Tab1',
                key:'1'
            },
            {
                title: 'Tab2',
                content: 'Tab2',
                key: '2'
            },
            {
                title: 'Tab3',
                content: 'Tab3',
                key: '3'
            }
        ]
        setPanes(panes);
        setactiveKey(panes[0].key)
    })
    return (
        <Fragment>
            <Card title="tabs">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span><Icon type="apple"/>Tab1</span>} key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab={<span><Icon type="delete" />Tab2</span>} disabled key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Card>

            <Card title="map-tabs">
                <Tabs 
                activeKey={activekey}
                onChange={callback}
                type="editable-card"
                onEdit={onEdit}
                >
                  {
                        panes.map((panels)=>{
                            return(
                                <TabPane 
                                tab={<span><Icon type="apple" />{panels.title}</span>} 
                                key={panels.key}>{panels.content}</TabPane>
                            )
                        })
                  }
                </Tabs>
            </Card>
        </Fragment>
    )
}