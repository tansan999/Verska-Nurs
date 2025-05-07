import React from "react";
import Button from "../../UI/button/Button";
import styled from "styled-components";
import CardResut_DATE from "./CardResut_DATE";

const DivResutCard = styled.div`
  padding-right: 16px;

  /* Rectangle 3 */
  width: 748px;
  height: 104px;
  margin: 20px 16px;

  border-radius: 12px;

  /* grey */
  background: rgb(75, 75, 75);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  h2 {
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
  }
`;

export default function ResultCard() {
  return (
    <DivResutCard>
      <div>
        <CardResut_DATE />
        <h2>sdfd</h2>
      </div>
      <Button title="400$" />
    </DivResutCard>
  );
}
