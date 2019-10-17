import React, { Fragment, useState, useEffect } from 'react';
import { Card, Table } from 'antd';
import './index.less';

function TableComponent() {
    const [dataSource ,setDataSource] = useState([]);


    useEffect(() => {
        const dataSource = [
            {
                id: '0',
                userName: 'apple',
                gendel:'1',
                state:'1',
                cool:false,
                birthday:'01-01-2020',
                address:'irvine,CA,92620',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'banana',
                gendel: '1',
                state: '1',
                cool: false,
                birthday: '01-01-2020',
                address: 'irvine,CA,92620',
                time: '19:00'
            },
            {
                id: '2',
                userName: 'pupmkin',
                gendel: '2',
                state: '1',
                cool: true,
                birthday: '01-01-2020',
                address: 'irvine,CA,92650',
                time: '09:00'
            },
            {
                id: '3',
                userName: 'pear',
                gendel: '1',
                state: '2',
                cool: false,
                birthday: '01-01-2020',
                address: 'irvine,CA,92620',
                time: '09:00'
            },
            {
                id: '4',
                userName: 'grasp',
                gendel: '2',
                state: '2',
                cool: false,
                birthday: '02-01-2120',
                address: 'irvine,CA,91620',
                time: '06:00'
            },
        ]
        setDataSource(dataSource)
    })

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'Id'
        },
        {
            title: 'UserName',
            dataIndex: 'userName',
            key: 'UserName'
        },
        {
            title: 'Gendel',
            dataIndex: 'gendel',
            key: 'Gendel'
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'State'
        },
        {
            title:"Cool",
            dataIndex:'cool',
            key: 'Cool'
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'Birthday'
        },
        {
            title:'Address',
            dataIndex:'address',
            key: 'Address'
        },
        {
            title:'Time',
            dataIndex:'time',
            key: 'Time'
        }

    ];
    return (
        <Fragment>
            <Card title="basic table">
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                />
            </Card>

        </Fragment>
    )
}


export default TableComponent;