import React from "react";
import styled from "styled-components";
import StarReview from "../Title/StarReview";

const ReviewItem = ({ name, joined, reviews, testimoni, rating, date }) => {
  return (
    <Container>
      <Avatar>{name.charAt(0)}</Avatar>
      <Wrapper>
        <Top>
          <UserInformation>
            <span>{name}</span>
            <Bottom>
              <p>Joined {joined}</p>
              <p>•</p>
              <p>
                <span>{reviews}</span> reviews
              </p>
            </Bottom>
          </UserInformation>
          <StarReview rating={rating} date={date} reviewhidden />
        </Top>
        <Testimoni>{testimoni}</Testimoni>
        <p>about {date}</p>
      </Wrapper>
    </Container>
  );
};

export default ReviewItem;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Avatar = styled.div`
  background: #bfe8f5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 14px;
  font-family: "Nunito Sans", sans-serif;
  color: #6abcc7;
  font-weight: 800;
  font-size: 20px;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  p {
    font-size: 12px;
    color: rgba(49, 53, 59, 0.68);
  }
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const UserInformation = styled.div`
  span {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
  }

  p {
    font-size: 12px;
    color: rgba(49, 53, 59, 0.68);
  }
`;

const Testimoni = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const Bottom = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
