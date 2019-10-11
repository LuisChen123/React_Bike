import React, { Fragment, useEffect, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import './index.less';
import FormItem from 'antd/lib/form/FormItem';

function Login(props) {
    const [name, setName] = useState()
    const [isLogin, setIsLogin] = useState(true)
    const [passWord, setPassword] = useState()
    const { getFieldDecorator } = props.form

    const handleSubmit = () => {
        const userName = props.form.getFieldValue('userName');
        setName(userName)
        const userPassWord = props.form.getFieldValue('password');
        setPassword(userPassWord);
        props.form.validateFields((err, value) => {
            if (!err) {
                // eslint-disable-next-line no-template-curly-in-string
                message.success(`${userName},Weclome Come Back! Your current password is ${userPassWord}`)
            }
        })
    }
    return (
        <Fragment>
            {isLogin ? (
                <div className="reg-wrap">
                    <Card title="register" style={{ width: "30%", margin: "0 auto" }}>
                    
                    </Card>
                </div>
            ):
            (
            <div className="login-wrap">
                <Card title="Login" style={{ width: "30%", margin: "0 auto" }}>
                    <Form layout="vertical">              
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
                                        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
                                        message:"Password must contain at leaset  one capital letter and one lowercase and length between 8-16"
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
                                    valuePropName:'checked',
                                    initialValue:true,
                                })(
                                   <Checkbox>Remenber Password</Checkbox>
                                )
                            }
                            <a href="/" alt="" style={{float:"right"}}>Forgot PassWord</a>
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

