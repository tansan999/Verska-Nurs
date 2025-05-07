import React from "react";
import Violetconteiner from "./components/violetconteiner/Violetconteiner";
import styled from "styled-components";
import ResultCard from "./components/resultConteiner/ResultCard";

const Div_ = styled.div`
  margin-top: 30px;
  min-width: 100px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Div_>
      <Violetconteiner />
      <ResultCard />
    </Div_>
  );
}

export default App;
