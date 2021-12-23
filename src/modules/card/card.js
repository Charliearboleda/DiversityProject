import React from "react";
import styled from "@emotion/styled";

const Card = (props) => {
  const Card = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 0;
    padding: 0 30px;
    background-color: white;
    max-width: 500px;
    min-width: 150px;
  `;

  const Pill = styled.h5`
    background-color: #800b8a80;
    border: none;
    color: black;
    padding: 8px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
    font: 12px roboto;
    font-weight: 500;
  `;
  const Time = styled.h5`
    margin: 0 0 0 1vw;
    font: 12px roboto;
    white-space: nowrap;
    font-weight: 500;
  `;
  const Title = styled.h3`
    margin: 0 0 10px 0;
    text-align: start;
    font: 20px roboto;
    font-weight: 500;
    line-height: 23px;
  `;
  const Snippet = styled.p`
    margin: 0 0 0 0;
    text-align: start;
    font: 17px roboto;
    font-weight: 300;
    line-height: 21px;
  `;

  const Button = styled.button`
    width: 160px;
    margin-bottom: 15px;
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;
    text-align: start;
    background: white;
    font: 13px roboto;
    font-weight: 500;
    padding: 12px 5px 30px 13px;
    cursor: pointer;
  `;
  const TopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0px;
  `;
  const TopLeftDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `;

  const MiddleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
  `;

  return (
    <Card>
      <h3 style={{ display: "none" }}>{8888}</h3>
      <TopDiv>
        <TopLeftDiv>
          <Pill>
            {props.data.included[0].attributes.contents[0].content_type.toUpperCase()}
          </Pill>
          <Time>{props.data.included[0].attributes.contents[0].duration}</Time>
        </TopLeftDiv>
        <i
          onClick={props.addFeaturedBookMark}
          style={{
            fontSize: "15px",
            marginLeft: "12vw",
            //   background: "#F1F1F1",
            borderRadius: "50px",
            padding: "5px 8px",
          }}
          className="far fa-bookmark"
        ></i>
      </TopDiv>
      <MiddleDiv>
        <div>
          <Title>
            Hiring For Diversity:{" "}
            {props.data.included[0].attributes.contents[0].title}
          </Title>
          <Snippet>
            {props.data.included[0].attributes.contents[0].snippet}
          </Snippet>
        </div>
      </MiddleDiv>

      <Button>
        Read Chapter 11{" "}
        <i
          style={{
            fontSize: "8px",
            margin: "0 0 0 1vw",
            border: "1px solid #000",
            borderRadius: "50%",
            padding: "5px 5px 4px 5px",
          }}
          className="fas fa-arrow-right"
        ></i>
      </Button>
    </Card>
  );
};
export default Card;
