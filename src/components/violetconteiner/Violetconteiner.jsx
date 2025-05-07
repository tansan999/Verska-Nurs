import React from "react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/input";
import InputTitle from "../../UI/input/InputTitle";
import InputDate from "../../UI/input/InputDate";
import styled from "styled-components";

const ConteinerViolet = styled.div`
  /* Rectangle 1 */
  width: 780px;
  height: 287px;
  border-radius: 12px;

  /* light purple */
  background: rgb(173, 155, 233);

  padding: 24px 40px 36px 40px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ConteinerVioletInput = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const ConteinerVioletButton = styled.div`
  display: flex;
  gap: 14px;
`;

const aa = () => {
  const massiv = [
    { title: "dcs", id: 1 },
    { title: "dcs", id: 2 },
    { title: "dcs", id: 3 },
    { title: "dcs", id: 4 },
  ];
};

function Violetconteiner() {
  return (
    <ConteinerViolet>
      <div>
        <ConteinerVioletInput>
          <Input />
          <InputTitle />
        </ConteinerVioletInput>
        <InputDate />
      </div>
      <ConteinerVioletButton>
        <Button title="Отмена" />
        <Button title="Добавить расходы" />
      </ConteinerVioletButton>
    </ConteinerViolet>
  );
}

export default Violetconteiner;
