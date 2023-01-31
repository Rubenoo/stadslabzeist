import { useState } from 'react';
import { Row, Col, Divider } from "antd";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { H1, P } from './styles';
import {Link} from "react-router-dom";

const Results = () => {
    const [visible, setVisible] = useState(false);

    function onChange (isVisible: boolean) {
        setVisible(isVisible)
    }
    return (
        <VisibilitySensor partialVisibility onChange={onChange} offset={{ bottom: 100 }}>
            <Link to="/stadslabzeist/projecten" className='d-flex flex-column flex-md-row justify-content-around align-items-center pb-lg-5 pb-0'>
                <Col lg={6} md={8} sm={10} xs={12}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-3 px-md-4 px-lg-5"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                        <Col span={24}>   
                            <H1>                       
                                {
                                    visible ? <CountUp end={11} duration={3} /> : null
                                }
                            </H1>
                        </Col>
                        <Col span={24}>  
                            <P>EXPERIMENTEN</P>                      
                        </Col>
                        <Col className={"px-3 px-md-4 px-lg-5 d-md-flex d-none"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={8} sm={10} xs={12}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-3 px-md-4 px-lg-5"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                        <Col span={24}>   
                            <H1>                       
                                {
                                    visible ? <CountUp end={32} duration={3} /> : null
                                }
                            </H1>
                        </Col>
                        <Col span={24}>  
                            <P>PARTNERS</P>                      
                        </Col>
                        <Col className={"px-5 px-md-4 px-lg-5 d-md-flex d-none"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={8} sm={10} xs={12}> 
                    <Row justify="space-around" align="middle">
                        <Col className={"px-3 px-md-4 px-lg-5"} span={24}> 
                            <Divider className={"my-lg-5 my-3"} style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                        <Col span={24}>   
                            <H1>                       
                                {
                                    visible ? <CountUp end={83} duration={3} /> : null
                                }
                            </H1>
                        </Col>
                        <Col span={24}>  
                            <P>NIEUWE STADMAKERS</P>                      
                        </Col>
                        <Col className={"px-3 px-md-4 px-lg-5"} span={24}> 
                            <Divider className={"my-lg-5 my-3 mb-4"} style={{ borderTop: "4px solid #1B3888" }} />
                        </Col>
                    </Row>
                </Col>
            </Link>
        </VisibilitySensor>
    )
}

export default Results
