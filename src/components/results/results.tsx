import React, { useState } from 'react';
import { Row, Col, Divider } from "antd";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const Results = () => {
    const [visible, setVisible] = useState(false);

    function onChange (isVisible: boolean) {
        setVisible(isVisible)
    }
    return (
        <VisibilitySensor partialVisibility onChange={onChange} offset={{ bottom: 100 }}>
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center'>               
                <Col lg={4} md={6} sm={8} xs={10}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-4"} span={24}> 
                            <Divider style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                        <Col span={24}>   
                            <h1>                       
                                {
                                    visible ? <CountUp end={11} duration={3} /> : null
                                }
                            </h1>
                        </Col>
                        <Col span={24}>  
                            <p>AFGERONDEN PROJECTEN</p>                      
                        </Col>
                        <Col className={"px-4 d-md-flex d-none"} span={24}> 
                            <Divider style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={8} xs={10}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-4"} span={24}> 
                            <Divider style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                        <Col span={24}>   
                            <h1>                       
                                {
                                    visible ? <CountUp end={32} duration={3} /> : null
                                }
                            </h1>
                        </Col>
                        <Col span={24}>  
                            <p>NIEUWE VERBINDINGEN</p>                      
                        </Col>
                        <Col className={"px-4 d-md-flex d-none"} span={24}> 
                            <Divider style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={8} xs={10}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-4"} span={24}> 
                            <Divider style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                        <Col span={24}>   
                            <h1>                       
                                {
                                    visible ? <CountUp end={83} duration={3} /> : null
                                }
                            </h1>
                        </Col>
                        <Col span={24}>  
                            <p>VERBONDEN STADMAKERS</p>                      
                        </Col>
                        <Col className={"px-4"} span={24}> 
                            <Divider style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                    </Row>
                </Col>
            </div>
        </VisibilitySensor>
    )
}

export default Results
