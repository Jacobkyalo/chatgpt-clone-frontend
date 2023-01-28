import { Container } from "../styles/styled/App.styled";
import {
  FlexHeader,
  HeaderWrapper,
  Logo,
} from "../styles/styled/Header.styled";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <FlexHeader>
          <Logo href="/">TalkGPT</Logo>
        </FlexHeader>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
