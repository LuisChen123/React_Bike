import React, { Fragment, useEffect, useState } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card, Upload,
    message, Radio, InputNumber, Select, Switch, DatePicker, Cascader, TimePicker
} from 'antd';
import './index.less';
import FormItem from 'antd/lib/form/FormItem';
import moment from 'moment';

function Register(props) {
    const [name, setName] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [passWord, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState({});
    const [loading, setLoading] = useState(false);
    const [userImg, setUserImg] = useState()

    const TextArea = Input.TextArea;
    const RadioGroup = Radio.Group;
    const { Option } = Select;
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        labelCol: {
            xs: 24,
            sm: 8
        },
        wrapperCol: {
            xs: 24,
            sm: 16
        }
    }
    const offsetLayout = {
        wrapperCol: {
            xs: 24,
            sm: {
                span: 16,
                offset: 8
            }
        }
    }
    const options = [{
        value: 'US',
        label: 'US',
        children: [
            {
                value: 'CA',
                label: 'CA',
                children: [
                    {
                        value: 'Irvine',
                        label: 'Irvine',
                    },
                ],
            },
        ],
    },
    {
        value: 'China',
        label: 'China',
        children: [
            {
                value: 'Hubei',
                label: 'Hubei',
                children: [
                    {
                        value: 'Wuhan',
                        label: 'Wuhan',
                    },
                ],
            },
        ],
    },
    ]

    const DIYSize = { minRows: 2, maxRows: 6 }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleSubmit = () => {
        const userName = props.form.getFieldValue('userName');
        setName(userName)
        const userPassWord = props.form.getFieldValue('password');
        setPassword(userPassWord);
        props.form.validateFields((err, value) => {
            if (!err) {
                message.success(`${userName},Weclome Come Back! Your current password is ${userPassWord}`)
            }
        })
    }

    const handleReg = () => {
        let userinfo = props.form.getFieldValue();
        console.log(JSON.stringify(userinfo))
    }

    const handleSwitch = () => {
        if (!isLogin) {
            setIsLogin(true)
        }
        else {
            setIsLogin(false)
        }

    }

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {

            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setUserImg(imageUrl);
                setLoading(false);
            }

            );
        }
    }

    return (
        <Fragment>
                    <div className="reg-wrap">
                        <Card title="register" style={{ width: "30%", margin: "0 auto" }}>
                            <Form layout="horizontal">
                                <FormItem label="userName"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('userName', {
                                            rules: [{
                                                required: true,
                                                message: "User Name is Requierd",
                                            }]
                                        })(<Input placeholder="please entry your username" />)
                                    }
                                </FormItem>
                                <FormItem label="password"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('password', {
                                            rules: [{
                                                required: true,
                                                message: "password is Requierd",
                                            }]
                                        })(
                                            <Input.Password placeholder="please entry your password" />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="gender"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('gender', {
                                            initialValue: 'Male',

                                        })(
                                            <RadioGroup>
                                                <Radio value="Male">
                                                    Male
                                                </Radio>
                                                <Radio value="Female">
                                                    Female
                                                </Radio>
                                            </RadioGroup>
                                        )
                                    }
                                </FormItem>
                                <FormItem label="age"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('age', {
                                            initialValue: 18,

                                        })(
                                            <InputNumber
                                                min={1} max={99}
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="marriage status"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('marriage', {

                                        })(
                                            <Select
                                                placeholder="Select a status">
                                                <Select.Option value="married">married</Select.Option>
                                                <Select.Option value="divorced">divorced</Select.Option>
                                                <Select.Option value="single">single</Select.Option>
                                                <Select.Option value="refuse">refuse to tell</Select.Option>
                                            </Select>
                                        )
                                    }
                                </FormItem>
                                <FormItem label="Hobbies"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('Hobbies', {
                                            initialValue: ['1', '4'],

                                        })(
                                            <Select
                                                mode="multiple"
                                                placeholder="Select multiple Hobbies">
                                                <Select.Option value="1">football</Select.Option>
                                                <Select.Option value="2">basketball</Select.Option>
                                                <Select.Option value="3">swimming</Select.Option>
                                                <Select.Option value="4">video game</Select.Option>
                                            </Select>
                                        )
                                    }
                                </FormItem>
                                <FormItem label="Happy"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('Happy', {
                                        })(
                                            <Switch
                                                checkedChildren="Yes"
                                                unCheckedChildren="No"
                                                defaultChecked>
                                            </Switch>
                                        )
                                    }
                                </FormItem>
                                <FormItem label="BrithDay"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('BrithDay', {
                                            initialValue: moment('01/01/2019 12:00:12'),

                                        })(
                                            <DatePicker
                                                showTime
                                                format="DD-MM-YYYY HH:mm:ss"
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="Street"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('Street', {


                                        })(
                                            <TextArea
                                                autoSize={
                                                    { DIYSize }
                                                }
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="Country, State , City"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('Address', {


                                        })(
                                            <Cascader
                                                defaultValue={['US', 'CA', 'Irvine']}
                                                options={options}
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="wake up time"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('Time', {

                                        })(
                                            <TimePicker />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="Avata"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('Avata', {
                                        })(
                                            <Upload
                                                showUploadList={false}
                                                listType="picture-card"
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                onChange={handleChange}
                                            >
                                                {userImg ? <img src={userImg} style={{ width: '100%' }} alt="" /> : <Icon type="plus" />}
                                            </Upload>
                                        )
                                    }
                                </FormItem>
                                <FormItem  {...offsetLayout}>
                                    {
                                        getFieldDecorator('agreement', {
                                        })(
                                            <Checkbox>I agree this <a href="#" alt="asd">Agreement</a></Checkbox>
                                        )
                                    }
                                </FormItem>
                                <FormItem  {...offsetLayout}>
                                    <Button type="primary" onClick={handleReg}>Regsiter</Button>
                                    <a href="#" alt="" style={{ marginLeft: "20px" }} onClick={handleSwitch}>sign up</a>
                                </FormItem>
                            </Form>
                        </Card>
                    </div>      
        </Fragment>
    )
}

export default Form.create()(Register); 