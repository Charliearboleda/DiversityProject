import React from "react";
import styled from "@emotion/styled";
import Loading from "../loading.js";

const Mathison = (props) => {
  const MathisonDiv = styled.div`

    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: in-line block;
    width: 26vw;
    margin-left:9vw;
    padding-top: 25px;
    }
    `;

  const TitleDiv = styled.h2`
    text-align: start;
    font: 30px roboto;
    font-weight: 500;
  `;

  return (
    <div
      className="middle-body"
      style={{ display: "flex", width: "84%", flexDirection: "column" }}
    >
      {!props.loading ? (
        <>
          <MathisonDiv data-testid="profile-test">
            <TitleDiv>Mathison Home Page</TitleDiv>
          </MathisonDiv>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};
export default Mathison;
