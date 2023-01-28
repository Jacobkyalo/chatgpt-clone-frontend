import { useContext } from "react";
import { FetchContext } from "../contexts/AppContext";
import { Container } from "../styles/styled/App.styled";
import { ResponseWrapper, Text, Image } from "../styles/styled/Response.styled";

import chatLogo from "../assets/images/logo.png";

export const Response = () => {
  const { result } = useContext(FetchContext);
  return (
    <Container>
      <ResponseWrapper>
        {result && <Image src={chatLogo} />}
        <Text>{result}</Text>
      </ResponseWrapper>
    </Container>
  );
};
