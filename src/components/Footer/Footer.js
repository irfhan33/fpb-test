import React from "react";
import styled from "styled-components";
import { SubTitle } from "../Description/Description";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
const Footer = () => {
  return (
    <Container>
      <SubTitle>30 Day Return & Refund</SubTitle>
      <Wrapper>
        <LocalPoliceIcon className="shield-icon" />
        <Detail>
          <Top>
            <span> Shop with Confidencel</span>
            <p>Learn More</p>
          </Top>
          <p>
            We want you to be completely satisfied with your purchase on Wish.
            Return all products within 30 days of delivery if they are not up to
            your satisfaction.
          </p>
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  .shield-icon {
    color: #3db6d2;
    margin-right: 12px;
  }
`;

const Detail = styled.div`
  p {
    font-size: 14px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
    color: rgba(49, 53, 59, 0.96);
  }

  p {
    font-size: 14px;
    color: #3db6d2;
    margin-bottom: 8px;
  }
`;
