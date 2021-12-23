import React from "react";
import styled from "@emotion/styled";

const Loading = () => {
  const Image = styled.img`
    width: 3.5vw;
  `;

  return (
    <div className="loading-container">
      <Image className="loader" src="logo.png" />
    </div>
  );
};
export default Loading;
