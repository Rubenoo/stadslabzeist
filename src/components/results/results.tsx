import React, { useState } from 'react';
import { Row, Col } from "antd";
import { CoffeeOutlined, SmileOutlined, BulbOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const Results = () => {
    const [visible, setVisible] = useState(false);

    function onChange (isVisible: boolean) {
        setVisible(isVisible)
    }
    return (
        <VisibilitySensor partialVisibility onChange={onChange} offset={{ bottom: 200 }}>
            <Row align="middle" justify="space-around">               
                <Col lg={4} md={4} sm={4} xs={4}> 
                    <Row justify="space-around">
                        <Col span={24}> 
                            <CoffeeOutlined style={{ fontSize: "64px", paddingBottom: "21px", }}/>
                        </Col>
                        <Col span={24}>                          
                            {visible ? <CountUp end={186} duration={3} /> : null}
                        </Col>
                        <Col span={24}>  
                            <p>Koffies</p>                      
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <Row justify="space-around">
                        <Col span={24}> 
                            <SmileOutlined style={{ fontSize: "64px", paddingBottom: "21px", marginTop: "0.5em"}}/>
                        </Col>
                        <Col span={24}> 
                            {visible ? <CountUp end={29} duration={3} /> : null}
                        </Col>
                        <Col span={24}> 
                            <p>Nieuwe verbindingen</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <Row justify="space-around">
                        <Col span={24}> 
                            <BulbOutlined style={{ fontSize: "64px", paddingBottom: "21px", }}/>
                        </Col>
                        <Col span={24}> 
                            {visible ? <CountUp end={2} duration={3} /> : null}
                        </Col>
                        <Col span={24}> 
                            <p>projecten</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </VisibilitySensor>
    )
}

export default Results
