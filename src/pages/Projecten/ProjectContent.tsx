import { Carousel, Col, Row } from 'antd'
import React from 'react'
import { Button } from '../../common/Button'
import { Project } from '../../common/types'
import { PI, PM } from './styles'

const ProjectContent = (props: {project: Project}) => {
  return (
    <div>
        <Carousel style={{marginBottom: '1em'}} autoplay>
            {props.project.images?.map((image, index) => 
            <div className={"d-flex justify-content-center align-items-center"} key={index}>
                <img height={200}  src={image.src} alt={image.title} />  
            </div>          
            )}
        </Carousel>
        <Row>
            <Col flex={""} span={24} lg={12}>
                <div className={'d-flex flex-column justify-content-between h-100'}>
                    <PI style={{color: props.project.titleColor,}}>
                        {props.project.introText}
                    </PI>
                    <div>
                        <Button textColor={props.project.color} backgroundColor={props.project.titleColor}>Lees meer</Button>
                    </div>
                </div>
            </Col>
            <Col span={24} lg={12}>
                <PM style={{color: props.project.titleColor}}>
                    {props.project.mainText}
                </PM>
            </Col>
        </Row>
    </div>
  )
}

export default ProjectContent