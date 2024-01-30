import styled from 'styled-components';

export const PaddingCon = styled.div`
  margin-top: 100px;
  display: flex;

  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const PageOver = styled.div`
  margin-top: 50px;
  /* margin-left: 80px; */
  width: 503px;

  
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const TextOne = styled.text`
  width:503px;
  margin-bottom: 50px;

`;
export const TextTwo = styled.div`
  width: 415px;

  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const TextTree = styled.div`
  width: 415px;
  
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const Imgs = styled.div`
margin-left: 50px;
margin-top: 170px;
  width: 600px;
  /* height: 503px; */
  justify-content: center;
  display: flex;
  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;
  }
  @media only screen and (max-width: 950px) {
    margin-left: 0px;
margin-top: 0px;
    align-items: center;
  }
`;
