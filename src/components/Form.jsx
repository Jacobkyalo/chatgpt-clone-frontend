import { useContext } from "react";
import { FetchContext } from "../contexts/AppContext";
import { Container } from "../styles/styled/App.styled";
import {
  FormWrapper,
  FormContent,
  Input,
  Content,
} from "../styles/styled/Form.styled";

export const Form = () => {
  const { input, setInput, fetchResponse } = useContext(FetchContext);
  return (
    <FormWrapper>
      <Content>
        <Container>
          <FormContent onSubmit={fetchResponse}>
            <Input
              type="text"
              name="prompt"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </FormContent>
        </Container>
      </Content>
    </FormWrapper>
  );
};
