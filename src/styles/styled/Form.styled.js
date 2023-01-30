import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const Content = styled.div`
  padding 30px 5px 0 5px;
  
`;

export const FormContent = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #111;
  padding: 40px 5px;
`;

export const Input = styled.input`
  background: transparent;
  color: #fff;
  outline: none;
  border: 0.5px solid #fff;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  font-size: 17px;
`;

export const Button = styled.button`
  background-color: green;
  color: #fff;
  padding: 20px 25px;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
`;
