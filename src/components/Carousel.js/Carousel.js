import React, { useState } from "react";
import styled from "styled-components";

const Carousel = () => {
  const photos = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/4c4d0ece-25f5-4a9c-b299-842230b6db78.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/55419742-2955-49b8-b556-d66bea7cc221.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/af04119e-669e-4a93-a08d-8faaf1911da8.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/07d62a73-b308-444c-abeb-fd6906e6c1dd.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/236367cd-88e7-4f13-814a-bc95788b55b7.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/d9fc7313-8291-4217-892b-949764da5c85.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/3431e2f3-8c02-46ca-91dc-297181499811.jpg",

    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/14/4281323c-8bb0-41ef-b77e-6949a731edcb.jpg",
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
  return (
    <Container>
      <SideImages>
        {photos.map((photo, index) => (
          <SideImagesItem
            src={photo}
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            active={selectedPhoto === photo && "active"}
          />
        ))}
      </SideImages>
      <MainImages src={selectedPhoto} />
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 8px;
  grid-area: carousel;
`;
const SideImages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  gap: 10px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MainImages = styled.img`
  width: 88%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SideImagesItem = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms;
  border: 3px solid rgba(249, 235, 95, 0);
  border: ${({ active }) => active && "3px solid rgba(249, 235, 95, 1)"};
  &:hover {
    border: 3px solid rgba(49, 53, 59, 0.28);
    transition: all 250ms;
  }
`;
