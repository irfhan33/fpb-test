import React from "react";
import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const StarReview = ({ rating, reviewhidden }) => {
  const ratings = [
    {
      rating: 1,
      status: rating >= 1 && "true",
    },
    {
      rating: 2,
      status: rating >= 2 && "true",
    },
    {
      rating: 3,
      status: rating >= 3 && "true",
    },
    {
      rating: 4,
      status: rating >= 4 && "true",
    },
    {
      rating: 5,
      status: rating >= 5 && "true",
    },
  ];

  return (
    <Container>
      {ratings.map((ratings, i) => (
        <StarWrapper
          status={ratings.status}
          key={i}
          reviewhidden={reviewhidden}
        >
          <StarOutlinedIcon className="icon-star" />
        </StarWrapper>
      ))}

      {!reviewhidden && <span>(143 Reviews)</span>}
    </Container>
  );
};

export default StarReview;

const Container = styled.div`
  display: flex;

  span {
    color: #3db6d2;
    margin-left: 10px;
  }
`;

const StarWrapper = styled.div`
  .icon-star {
    color: ${({ status }) => (status ? "#3db6d2" : "#d8e1e7")};
    font-size: ${({ reviewhidden }) => reviewhidden && "20px"};
  }
`;
