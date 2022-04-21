import React from "react";
import styled from "styled-components";
const Description = () => {
  return (
    <Container>
      <SubTitle>Description</SubTitle>
      <Paragraph>Description:</Paragraph>
      <Paragraph>Item Type : Wireless Game Controller</Paragraph>
      <Paragraph>
        For Xbox One Controller, Specially Designedf for Use with the Xbox One
        Console with the Exact Layout, Ideal As An Replacement or Additional
        Controller
      </Paragraph>
      <Paragraph>Package Include:</Paragraph>
      <Paragraph>
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
        1* For Xbox One Wireless Game Controller <br />
      </Paragraph>
      <Paragraph>Note:</Paragraph>
      <Paragraph>
        The Colors Deviation Might Different Due to Different Monitor Settings
      </Paragraph>
      <Paragraph>
        The Colors Deviation Might Different Due to Different Monitor Settings
      </Paragraph>
    </Container>
  );
};

export default Description;

export const SubTitle = ({ children }) => {
  return <SubtitleSc>{children}</SubtitleSc>;
};

const Paragraph = ({ children }) => {
  return <ParagraphSc>{children}</ParagraphSc>;
};

const Container = styled.div`
  grid-area: description;
  padding: 0px 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const SubtitleSc = styled.span`
  font-size: 16px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 800;
  color: rgba(49, 53, 59, 0.96);
`;

const ParagraphSc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
`;
