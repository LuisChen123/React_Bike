import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import "./style.less"
import Util from '../../utils/utils'
import jsonPForAxios from '../../axios'
import axios from "axios";


export default function Header() {
    const [user, setUser] = useState([]);
    const [systime, setSystime] = useState();
    const [location, setLocation] = useState([]);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUser(res.data[0].name)
            })
            .catch((error) => {
                console.log(error)
            });

        axios({
            "method": "GET",
            "url": "https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "us-weather-by-zip-code.p.rapidapi.com",
                "x-rapidapi-key": "sZX6fWDfaKmsh1ZhVcaMfrOeOmlop1mo0mpjsnbrdGPcFJsrJ0"
            }, "params": {
                "zip": "92620"
            }
        })
            .then((response) => {
                setLocation(response.data.City)
                setWeather(response.data.Weather)
            })
            .catch((error) => {
                console.log(error)
            })

        setInterval(() => {
            setSystime(Util.formatDate(new Date().getTime()))
        }, 1000);
    }, []);

    return (
        <Fragment>
            <div className="head-wrap">
                <Row className="head-top">
                    <Col span={24}>
                        <span>Welcome,<span className="userName-style">{user}</span></span>
                        <a href="#">Log out</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        Home Page
              </Col>
                    <Col span={20} className="weather">
                        <span className="date">{systime}</span>
                        <span className="location">{location}</span>
                        <span className="weather-detail">{weather}</span>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

