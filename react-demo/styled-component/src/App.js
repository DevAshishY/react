import "./App.css";
import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 10px;
  padding: 10px;

  /* 1- seond props change style by js  */

  /* background: ${({ red }) => (red ? "red" : "green")};
color:${({ red }) => (red ? "green" : "red")}; */

  /* 1.1- using css by styled change style   */
  background: green;
  color: red;
  ${({ red }) =>
    red &&
    css`
      background: red;
      color: green;
    `};
`;

/*2 extened css  */
const BigButton = styled(Button)`
  font-size: 50px;
  margin-top:100px
`;

function App() {
  return (
    <>
      <Button red>green</Button>
      <Button>red</Button>
      <BigButton red>big button</BigButton>

   {/* 2 we have a as pops we can change   elment type */}
      <BigButton red as="li">
        big button
      </BigButton>
    </>
  );
}

export default App;
