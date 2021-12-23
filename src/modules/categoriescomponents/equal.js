import React from "react";
import Loading from "../loading.js";
import styled from "@emotion/styled";

const Equal = (props) => {
  const EqualDiv = styled.div`

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
          <EqualDiv data-testid="profile-test">
            <TitleDiv>Equal Page</TitleDiv>
          </EqualDiv>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};
export default Equal;
