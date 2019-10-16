import React, { Fragment, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';
import FormItem from 'antd/lib/form/FormItem';



function Login(props) {
    const { getFieldDecorator } = props.form;
    const [name, setName] = useState();
    const [passWord, setPassword] = useState();

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
            <div className="login-wrap">
                <Card title="Login" style={{ width: "50%", margin: "0 auto" }}>
                    <Form layout="horizontal" labelAlign="right">
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
                                    <Input.Password prefix={<Icon type="lock" />} type="password" placeholder="Please Enter your  Password" />
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
                            <Link to="/regPage" alt="" style={{ float: "right" }}>Sign up Now!</Link>
                        </FormItem>

                    </Form>
                </Card>
            </div>
        </Fragment>
    )
}

export default Form.create()(Login);

