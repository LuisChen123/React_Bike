import React, { Fragment, useState, useEffect } from 'react';
import { Card, Table, message } from 'antd';
import './index.less';
import axios from '../../axios/index'


function TableComponent() {
    const [dataSource ,setDataSource] = useState([]);
    const [dataSource2, setDataSource2] = useState([]);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users')
    const columns1 = [
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
            title: "Cool",
            dataIndex: 'cool',
            key: 'Cool'
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'Birthday'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'Address'
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'Time'
        }

    ];
    const columns2 = [
       {
           title:'ID',
           dataIndex:'id',
           key:'id'
       },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website'
        },
        {
            title: 'Company Name',
            dataIndex: 'company[name]',
            key: 'companyName'
        },
    ]
   



    useEffect(() => {
        const dataSource = [
            {
                id: '0',
                userName: 'apple',
                gendel: '1',
                state: '1',
                cool: false,
                birthday: '01-01-2020',
                address: 'irvine,CA,92620',
                time: '09:00'
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
         setDataSource(dataSource);

        // const fenchData = async()=>{
        //     try {
        //         const result = await axios.get(url);
        //        console.log(result)
        //         if (result.status === 200) {
        //             setDataSource2(result.data)
        //        }
        //         else{
        //             message.error("something is went wrong ,please check internet conection")
        //         }
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // fenchData();
        axios.ajax({
            url:'/users',
            data:{
                parm:{
                    page:1
                }
            }
        }).then((res)=>{
            if (res.status === 200){
                setDataSource2(res.data)
            }
        })
    }, [])
    return (
        <Fragment>
            <Card title="basic table">
                <Table
                    columns={columns1}
                    dataSource={dataSource}
                    pagination={false}
                />
            </Card>
            <Card title="Advance table">
                <Table
                    columns={columns2}
                    dataSource={dataSource2}
                    pagination={false}
                />
            </Card>
        </Fragment>
    )
}

export default TableComponent;