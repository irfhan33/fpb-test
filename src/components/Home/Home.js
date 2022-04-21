import React from "react";
import styled from "styled-components";
import Sidebar from "./../Sidebar/Sidebar";
import Carousel from "./../Carousel.js/Carousel";
import Description from "./../Description/Description";
import Title from "./../Title/Title";
import Review from "./../Review/Review";

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Carousel />
        <Description />
        <Title />
        <Review />
        <Footer>Footer</Footer>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1 1 auto;
  display: grid;
  grid-gap: 10px;
  padding: 20px 20px 20px 20px;
  grid-template-columns: 60% 40%;
  grid-template-rows: 35% 15% auto 20%;
  grid-template-areas:
    "carousel title"
    "carousel review"
    "description review"
    "description footer";

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 30% auto auto auto auto;
    grid-template-areas:
      "carousel"
      "title"
      "description"
      "review"
      "footer";
  }
`;

const Footer = styled.div`
  grid-area: footer;
  background: red;
`;
