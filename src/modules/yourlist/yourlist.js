import React from "react";
import styled from "@emotion/styled";
import Carousel from "react-grid-carousel";

const YourList = (props) => {
  const Card = styled.div`
       display: flex;
       flex-direction: column;
       padding: 0 30px;
       width:16.2vw;
       background: #FFF;
       border-radius: 4px;
       outline: 1px solid #E5E5E5;
       height:300px;
       position: relative;

 }
`;

  const Pill = styled.h5`
   border: none;
   color: black;
   padding: 7px 14px 7px 14px;
   text-align: center;
   text-decoration: none;
   margin: 4px 10px 4px 0px;
   white-space:nowrap;
   border-radius: 16px;
   font: 12px roboto;
   font-weight: 500;
   letter-spacing: 1px;
}
`;

  const Time = styled.h5`
    margin: 0 0vw 0 0;
    font: 12px roboto;
    width: 70px;
    white-space: nowrap;
  `;
  const Title = styled.h3`
    margin: 20px 0 12px 0;
    text-align: start;
    font: 17px roboto;
    font-weight: 500;
    line-height: 23px;
    width: 100%;
  `;
  const Snippet = styled.p`
    margin: 0 0 0 0;
    text-align: start;
    font: 14px roboto;
    font-weight: 300;
    line-height: 21px;
  `;

  const Button = styled.button`
    border: none;
    background: none;
    text-align: start;
    font: 12px roboto;
    font-weight: 500;
    // margin-top: 15px;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    width: 100%;
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
    align-items: center;
    margin-top: 20px;
    width: 100%;
  `;

  const MiddleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const TitleSection = styled.h2`
    display: flex;
    justify-content: start;
    font: 17px roboto;
    margin-left: 25px;
    margin-bottom: 8px;
    font-weight: 500;
  `;

  const ButtonLeftArrow = styled.button`
    margin-bottom: 15px;
    border: none;
    font: 13px roboto;
    font-weight: 500;
    cursor: pointer;
    background: #fff;
    position: absolute;
    right: 4vw;
    bottom: -3.4vw;
    border-radius: 50px;
    padding: 5px 10px;
  `;
  const ButtonRightArrow = styled.button`
    margin-bottom: 15px;
    border: none;
    font: 13px roboto;
    font-weight: 500;
    cursor: pointer;
    background: #fff;
    position: absolute;
    right: 2vw;
    bottom: -3.4vw;
    border-radius: 50px;
    padding: 5px 10px;
  `;
  const YourListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 7.5vw;
  `;

  const Tags = styled.h5`
    background-color: #0001;
    border: none;
    color: black;
    padding: 6px 16px 6px 16px;
    text-align: center;
    text-decoration: none;
    margin: 15px 8px 10px 0;
    cursor: pointer;
    border-radius: 16px;
    font: 10px roboto;
    font-weight: 400;
    letter-spacing: 0.5px;
  `;

  return (
    <YourListContainer>
      <TitleSection>Your List</TitleSection>

      <Carousel
        arrowLeft={
          <ButtonLeftArrow type="left">
            <i className="fas fa-chevron-left"></i>
          </ButtonLeftArrow>
        }
        arrowRight={
          <ButtonRightArrow type="right">
            <i className="fas fa-chevron-right"></i>
          </ButtonRightArrow>
        }
        containerStyle={{ width: "69vw", marginTop: "20px" }}
        cols={3}
        rows={1}
        gap={0}
        loop
      >
        {props.yourList
          .slice(0)
          .reverse()
          .map((list, i) => {
            return (
              <Carousel.Item>
                <Card key={i}>
                  <h3 style={{ display: "none" }}>{list.newIndex}</h3>
                  <TopDiv>
                    <TopLeftDiv>
                      <Pill className={list.pill.innerText.toLowerCase()}>
                        {list.pill.innerText}
                      </Pill>
                      <Time>{list.time.innerText}</Time>
                    </TopLeftDiv>
                    <i
                      onClick={props.removeBookMark}
                      style={{
                        fontSize: "15px",
                        borderRadius: "50px",
                        padding: "5px 8px",
                        position: "absolute",
                        right: "25px",
                        top: "27px",
                      }}
                      className="fas fa-bookmark"
                    ></i>
                  </TopDiv>
                  <MiddleDiv>
                    <Title>{list.title.innerText}</Title>
                    <Snippet>{list.snippet.innerText}</Snippet>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: "5px",
                      }}
                    >
                      {list.allTags.map((tags, i) => {
                        return <Tags key={i}>{tags.innerText}</Tags>;
                      })}
                    </div>
                  </MiddleDiv>

                  <Button>
                    Read More{" "}
                    <i
                      style={{ fontSize: "10px", marginLeft: "5px" }}
                      className="fas fa-arrow-right"
                    ></i>
                  </Button>
                </Card>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </YourListContainer>
  );
};
export default YourList;
