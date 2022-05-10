import { useState } from 'react';
import { Row, Col, Divider } from "antd";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { H1, P } from './styles';

const Results = () => {
    const [visible, setVisible] = useState(false);

    function onChange (isVisible: boolean) {
        setVisible(isVisible)
    }
    return (
        <VisibilitySensor partialVisibility onChange={onChange} offset={{ bottom: 100 }}>
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center pb-lg-5 pb-0'>               
                <Col lg={4} md={6} sm={8} xs={10}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-4"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #364B9B" }} />
                        </Col>
                        <Col span={24}>   
                            <H1>                       
                                {
                                    visible ? <CountUp end={11} duration={3} /> : null
                                }
                            </H1>
                        </Col>
                        <Col span={24}>  
                            <P>AFGERONDEN PROJECTEN</P>                      
                        </Col>
                        <Col className={"px-4 d-md-flex d-none"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #364B9B" }} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={8} xs={10}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-4"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #364B9B" }} />
                        </Col>
                        <Col span={24}>   
                            <H1>                       
                                {
                                    visible ? <CountUp end={32} duration={3} /> : null
                                }
                            </H1>
                        </Col>
                        <Col span={24}>  
                            <P>NIEUWE VERBINDINGEN</P>                      
                        </Col>
                        <Col className={"px-4 d-md-flex d-none"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #364B9B" }} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={8} xs={10}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-4"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #364B9B" }} />
                        </Col>
                        <Col span={24}>   
                            <H1>                       
                                {
                                    visible ? <CountUp end={83} duration={3} /> : null
                                }
                            </H1>
                        </Col>
                        <Col span={24}>  
                            <P>VERBONDEN STADMAKERS</P>                      
                        </Col>
                        <Col className={"px-4"} span={24}> 
                            <Divider className={"my-lg-5 my-3 mb-4"} style={{ borderTop: "4px solid #364B9B" }} />
                        </Col>
                    </Row>
                </Col>
            </div>
        </VisibilitySensor>
    )
}

export default Results
