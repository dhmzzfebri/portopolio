import styled from 'styled-components';

export const PaddingCon = styled.div`
  margin-top: 100px;
  display: flex;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ConProject = styled.div`
  margin-top: 50px;
  width: 600px;
  
  @media only screen and (max-width: 950px) {
   justify-items: center;
   width: auto;
  }
`;

export const ConContent = styled.div`
  display: flex;
  
  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 600px;
  
  @media only screen and (max-width: 950px) {
    width: auto;
    margin-top: 40px;
    margin-right: 0px;
  }
`;

export const Card = styled.div`
  width: 285px;
  height: 293px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
`;

export const ContentCard = styled.div`
  width: 249px;
  height: 163px;
  margin-left: auto;
  margin-right: auto;
`;
export const Imgs = styled.div`
  width: 249px;
  height: 163px;
  border-radius: 6ps;
  img {
    width: 249px;
    height: 163px;
    border-radius: 6px;
    margin-top: 20px;
  }
`;

export const TextContent = styled.div`
  margin-top: 50px;
  text-align: center;
  /* height: 100px; */
`;
export const TextProject = styled.text`
  font-weight: 400;
  line-height: 30px;
  width: 415px;

  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
