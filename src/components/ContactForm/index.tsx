import { Row, Col } from "antd";
import { Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Block title={title} content={content} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <FormGroup autoComplete="off" onSubmit={handleSubmit}>
            <Col span={24}>
              <Input
                type="text"
                name="naam"
                placeholder=""
                value={values.naam || ""}
                onChange={handleChange}
              />
              <ValidationType type="naam" />
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="email"
                placeholder=""
                value={values.email || ""}
                onChange={handleChange}
              />
              <ValidationType type="email" />
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="onderwerp"
                placeholder=""
                value={values.onderwerp || ""}
                onChange={handleChange}
              />
              <ValidationType type="onderwerp" />
            </Col>
            <Col span={24}>
              <TextArea
                placeholder=""
                value={values.bericht || ""}
                name="bericht"
                onChange={handleChange}
              />
              <ValidationType type="bericht" />
            </Col>
            <ButtonContainer>
              <Button name="submit">{"VERSTUUR"}</Button>
            </ButtonContainer>
          </FormGroup>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
