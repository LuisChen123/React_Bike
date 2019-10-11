import React, { Fragment, useEffect, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, message, Radio, InputNumber} from 'antd';
import './index.less';
import FormItem from 'antd/lib/form/FormItem';

function Login(props) {
    const [name, setName] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [passWord, setPassword] = useState();
    const { getFieldDecorator } = props.form;
    const RadioGroup = Radio.Group;
    const formItemLayout = {
        labelCol: {
            xs: 24,
            sm: 4
        },
        wrapperCol: {
            xs: 24,
            sm: 20
        }
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
    return (
        <Fragment>
            {isLogin ?
                (
                    <div className="reg-wrap">
                        <Card title="register" style={{ width: "30%", margin: "0 auto" }}>
                            <Form layout="horizontal" labelAlign="left">
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
                                        })(<Input placeholder="please entry your password" />)
                                    }
                                </FormItem>
                                <FormItem label="gender"  {...formItemLayout}>
                                    {
                                        getFieldDecorator('gender', {
                                            initialValue:'Male',
                                            rules: [{
                                                required: true,
                                                message: "gender is Requierd",
                                            }]
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
                                            rules: [{
                                                required: true,
                                                message: "age is Requierd",
                                            }]
                                        })(
                                            <InputNumber 
                                            min={1} max={99}
                                            />
                                        )
                                    }
                                </FormItem>
                            </Form>
                        </Card>
                    </div>
                ) :
                (
                    <div className="login-wrap">
                        <Card title="Login" style={{ width: "30%", margin: "0 auto" }}>
                            <Form layout="vertical" >
                                <FormItem>
                                    {
                                        getFieldDecorator('userName', {
                                            rules: [{
                                                required: true,
                                                message: "User Name is Requierd",
                                            }, {
                                                min: 5,
                                                max: 10,
                                                message: 'please keep username lenght between 5 -10'
                                            }
                                            ]
                                        })(
                                            <Input prefix={<Icon type="user" />} placeholder="Please Enter your UserName or Email" />
                                        )
                                    }
                                </FormItem>
                                <FormItem>
                                    {
                                        getFieldDecorator('password', {
                                            rules: [{
                                                required: true,
                                                message: "Password is Requierd",
                                            },
                                            {
                                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
                                                message: "Password must contain at leaset  one capital letter and one lowercase and length between 8-16"
                                            },
                                            ]
                                        })(
                                            <Input prefix={<Icon type="lock" />} type="password" placeholder="Please Enter your  Password" />
                                        )
                                    }
                                </FormItem>
                                <FormItem>
                                    {
                                        getFieldDecorator('remenberMe', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(
                                            <Checkbox>Remenber Password</Checkbox>
                                        )
                                    }
                                    <a href="/" alt="" style={{ float: "right" }}>Forgot PassWord</a>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" onClick={handleSubmit}>Log in</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </div>
                )}
        </Fragment>
    )
}

export default Form.create()(Login);

