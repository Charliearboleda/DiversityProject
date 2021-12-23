import React from "react";
import styled from "@emotion/styled";
import Loading from "../loading.js";

const Book = (props) => {
  const BookSection = styled.div`

   border: none;
   color: black;
   text-align: center;
   text-decoration: none;
   display: flex;
   flex-direction:column;
   width: 26vw;
   margin-left:9vw;
   padding-top: 25px;
 }
`;

  const Intro = styled.h4`
    margin: 14px 0;
    text-align: start;
    font: 14px roboto;
    font-weight: 500;
    line-height: 21px;
  `;

  const IntroBio = styled.h4`
    border-top: 1px solid black;
    padding-top: 8px;
    margin: 14px 0;
    text-align: start;
    font: 14px roboto;
    font-weight: 500;
    line-height: 21px;
  `;

  const TitleDiv = styled.h2`
    display: flex;
    justify-content: start;
    font: 30px roboto;
    font-weight: 500;
  `;

  const Card = styled.div`
display: flex;
flex-direction: column;
padding: 0 30px;
width:15.2vw;
background: #FFF;
border-radius: 7px;
outline: 1px solid #E5E5E5;
height:315px;
margin: 15px 15px;
position: relative;
overflow: hidden;
}
`;

  const Pill = styled.h5`
border: none;
color: black;
padding: 7px 14px 7px 14px;
text-align: center;
text-decoration: none;
margin: 4px 2px;
white-space:nowrap;
border-radius: 16px;
font: 12px roboto;
font-weight: 500;
letter-spacing: 1px;
}
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
    margin-top: 15px;
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
    justify-content: space-between;
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

  const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    flex: 0 0 90%;
    margin-left: 8vw;
  `;
  const Image = styled.img`
    width: 100px;
  `;

  const P = styled.p`
    font: 13px roboto;
    font-weight: 200;
    text-align: start;
    margin: 0;
    line-height: 19px;
  `;

  const Name = styled.h4`
    font: 14px roboto;
    font-weight: 500;
    text-align: start;
    margin: 0 0 6px 0;
  `;

  const AuthorContainer = styled.div`
    display: flex;
  `;

  const AuthorBioDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px 0 0 8px;
  `;

  const BuyBook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 50px auto 0 auto;
    justify-content: end;
  `;

  const ImageBook = styled.img`
    width: 70%;
    margin: 0 150px 6px 0;
    float: left;
  `;
  const BuyBookDiv = styled.div``;

  const BookButton = styled.button`
    border: none;
    background: #000;
    padding: 15px 80px;
    color: white;
    font: 13px roboto;
    border-radius: 5px;
    margin-top: 20px;
  `;

  const AmazonText = styled.h4`
    font: 10px roboto;
    color: white;
    background: #000;
    border-radius: 4px;
    padding: 5px 20px 5px 8px;
    letter-spacing: 1.5px;
  `;

  const BookMark = styled.div`
    height: 24px;
    width: 24px;
    background: #ddd;
    position: absolute;
    transform: rotate(45deg);
    right: -13px;
  `;

  return (
    <div
      className="middle-body"
      style={{ display: "flex", width: "84%", flexDirection: "column" }}
    >
      {!props.loading ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "60px",
            }}
          >
            <BookSection>
              <TitleDiv>{props.bookGetData.data.attributes.title}</TitleDiv>
              <Intro>{props.bookGetData.data.attributes.intro}</Intro>
              <IntroBio>MEET THE AUTHORS</IntroBio>
              <AuthorContainer>
                <Image src="image 2.png" />
                <AuthorBioDiv>
                  <Name>Arthur Woods</Name>
                  <P>
                    {" "}
                    Co-founder of Mathison, LGBTQ+ leader, social entrepreneur
                    in equity technology, World Economic Forum Global Shaper
                  </P>
                </AuthorBioDiv>
              </AuthorContainer>

              <AuthorContainer style={{ margin: "27px 0 0 0" }}>
                <Image src="image 3.png" />
                <AuthorBioDiv>
                  <Name>Susanna Tharakan</Name>
                  <P>
                    Head of Diversity at Sisense, DEI researcher and
                    practitioner in industrial, organizational psychology
                  </P>
                </AuthorBioDiv>
              </AuthorContainer>
            </BookSection>
            <BuyBook>
              <div style={{ display: "flex", position: "relative" }}>
                <ImageBook src="image 1.png" />
                <div
                  style={{
                    background: "#DDD",
                    borderRadius: "50%",
                    padding: "40px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "35px",
                    top: "5px",
                  }}
                >
                  <Image src="Amazon logo 1.png" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <AmazonText>#1 BEST SELLER</AmazonText>
                    <BookMark></BookMark>
                  </div>
                </div>
              </div>
              <BuyBookDiv>
                <P
                  style={{
                    margin: "10px 0",
                    fontStyle: "italic",
                    fontSize: "14px",
                  }}
                >
                  If you are looking for specific, actionable and practical
                  advice to attract and engage diverse teams, “Hiring for
                  Diversity” will hit the mark.
                </P>
                <Name style={{ margin: "15px 0" }}>
                  Kathi Endere, PhD <br />
                  Vice President, Research
                </Name>
                <BookButton>Buy The Book</BookButton>
              </BuyBookDiv>
            </BuyBook>
          </div>
          <CardDiv>
            {props.bookGetData.included.map((card) => {
              return (
                <Card className={card.type}>
                  <TopDiv>
                    <TopLeftDiv>
                      <Pill className={card.attributes.type}>
                        {card.attributes.identifier}
                      </Pill>
                      <i
                        style={{
                          fontSize: "15px",
                          borderRadius: "50px",
                          padding: "5px 8px",
                        }}
                        className="far fa-bookmark"
                      ></i>
                    </TopLeftDiv>
                  </TopDiv>
                  <MiddleDiv>
                    <Title>{card.attributes.title}</Title>
                    <div style={{ overflow: "hidden", height: "82px" }}>
                      <Snippet>{card.attributes.snippet}...</Snippet>
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
            })}
          </CardDiv>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};
export default Book;
