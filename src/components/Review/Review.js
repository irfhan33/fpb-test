import React from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

const Review = () => {
  const reviews = [
    {
      name: "Shiomo",
      joined: "2017",
      reviews: "2",
      testimoni:
        "Excellent Works on my android phone tablet and windows surface book laptop. Definitely getting another one",
      rating: "5",
      date: "a year ago",
    },
    {
      name: "Steve",
      joined: "2019",
      reviews: "3",
      testimoni: "Best remote control everything is brilliant and thanks",
      rating: "4",
      date: "11 month ago",
    },
    {
      name: "Wendy",
      joined: "2017",
      reviews: "5",
      testimoni: "While i love your clothes well made on all",
      rating: "3",
      date: "a 9 month ago",
    },
    {
      name: "CendyLover",
      joined: "2020",
      reviews: "1",
      testimoni:
        "Great controller, tiny bit smaller than my hand, nothing that makes using it any less fun. Still great and came early",
      rating: "5",
      date: "a 6 month ago",
    },
    {
      name: "Irfan",
      joined: "2022",
      reviews: "99",
      testimoni: "Late Delivery",
      rating: "2",
      date: "a month ago",
    },
  ];

  return (
    <Container>
      {reviews.map((review, i) => (
        <ReviewItem
          name={review.name}
          joined={review.joined}
          reviews={review.reviews}
          testimoni={review.testimoni}
          rating={review.rating}
          date={review.date}
          key={i}
        />
      ))}

      <ShowMore>Show More</ShowMore>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  grid-area: review;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ShowMore = styled.span`
  color: #3db6d2;
  cursor: pointer;
  text-align: right;
`;
