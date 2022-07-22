import { Container, TextWrapper, Content, H6 } from "./styles";

interface Props {
  title: string;
  content: string;
}

const Block = ({ title, content }: Props) => {
  return (
    <Container>
      <H6>{title}</H6>
      <TextWrapper>
        <Content>{content}</Content>
      </TextWrapper>
    </Container>
  );
};

export default Block;
