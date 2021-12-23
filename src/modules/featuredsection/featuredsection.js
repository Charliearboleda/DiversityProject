import React from "react";
import styled from "@emotion/styled";
import Img from "../img/img.js";
import Card from "../card/card.js";

const FeaturedSection = (props) => {
  const FeaturedSection = styled.div`

       border: none;
       color: black;
       text-align: center;
       text-decoration: none;
       display: in-line block;
       width: 65vw;
       margin-left:9vw;
       padding-top: 25px;
     }
   `;
  const FeaturedSectionDiv = styled.div`
    display: flex;
    border-radius: 3px;
    outline: 1px solid #e5e5e5;
  `;

  const TitleDiv = styled.h2`
    display: flex;
    justify-content: start;
    font: 30px roboto;
    font-weight: 500;
  `;

  return (
    <FeaturedSection>
      <TitleDiv>Featured Content</TitleDiv>
      <FeaturedSectionDiv>
        <Img></Img>
        <Card
          addFeaturedBookMark={props.addFeaturedBookMark}
          addBookMark={props.addBookMark}
          data={props.data}
        ></Card>
      </FeaturedSectionDiv>
    </FeaturedSection>
  );
};
export default FeaturedSection;
