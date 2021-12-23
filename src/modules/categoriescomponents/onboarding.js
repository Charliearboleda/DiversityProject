import React from "react";
import styled from "@emotion/styled";
import Loading from "../loading.js";

const Boarding = (props) => {
  const OnBoardSection = styled.div`

   border: none;
   color: black;
   text-align: center;
   text-decoration: none;
   display: in-line block;
   width: 30vw;
   margin-left:9vw;
   padding-top: 25px;
   }
   `;

  const Intro = styled.p`
    margin: 0 0 0 0;
    text-align: start;
    font: 14px roboto;
    font-weight: 500;
    line-height: 21px;
  `;

  const TitleDiv = styled.h2`
    text-align: start;
    font: 30px roboto;
    font-weight: 500;
  `;

  const Card = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 30px;
   width:19.2vw;
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
    flex-direction: row;
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

  const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 30px;
    justify-content: start;
    margin: 0 15px;
    margin-left: 9vw;
  `;
  return (
    <div
      className="middle-body"
      style={{ display: "flex", width: "84%", flexDirection: "column" }}
    >
      {!props.loading ? (
        <div>
          <OnBoardSection>
            <TitleDiv>{props.onBoardGetData.data.attributes.title}</TitleDiv>
            <Intro>{props.onBoardGetData.data.attributes.intro}</Intro>
          </OnBoardSection>
          <CardDiv>
            {props.onBoardGetData.included[0].attributes.contents.map(
              (card, i) => {
                return (
                  <Card>
                    <h3 style={{ display: "none" }}>{i + 500}</h3>
                    <TopDiv>
                      <TopLeftDiv>
                        <Pill className={card.content_type}>
                          {card.content_type.toUpperCase().replace(/_/g, " ")}
                        </Pill>
                        <Time>{card.duration}</Time>
                      </TopLeftDiv>
                      <i
                        onClick={props.addBookMark}
                        style={{
                          fontSize: "15px",
                          borderRadius: "50px",
                          padding: "5px 8px",
                          position: "absolute",
                          right: "25px",
                          top: "27px",
                        }}
                        className="far fa-bookmark"
                      ></i>
                    </TopDiv>
                    <MiddleDiv>
                      <div>
                        <Title>{card.title}</Title>
                        <Snippet>{card.snippet}...</Snippet>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          marginTop: "5px",
                        }}
                      >
                        {card.tags.map((tags) => {
                          return <Tags>{tags.name}</Tags>;
                        })}
                      </div>
                    </MiddleDiv>

                    <Button>
                      Read More{" "}
                      <i
                        style={{ fontSize: "10px", marginLeft: "5px" }}
                        class="fas fa-arrow-right"
                      ></i>
                    </Button>
                  </Card>
                );
              }
            )}
          </CardDiv>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};
export default Boarding;
