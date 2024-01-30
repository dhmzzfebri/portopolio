import styled from 'styled-components';

export const PaddingCon = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 70px;

  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 500px;
  height: 550px;
  @media only screen and (max-width: 950px) {
    align-content: center;
    width: auto;
  }
`;

export const TextCont = styled.div`
  margin-top: 50px;
  width: 467px;

  @media only screen and (max-width: 950px) {
    margin-top: -100px;
    align-items: center;
    width: 100%;
    
  }
`;

export const HStyled = styled.div`
  width: 415px;
  margin-bottom: 20px;
  line-height: 54px;
  @media only screen and (max-width: 950px) {
    font-size: 12px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
  
`;

export const H2Styled = styled.h2`
  width: 467px;
  line-height: 30px;

  @media only screen and (max-width: 950px) {
    text-align: center;
    width: 100%;
  }
`;

export const Overview = styled.div`
  margin-top: 40px;
  display: flex;
  
  @media only screen and (max-width: 950px) {
    justify-content: center;
  }
`;

export const ProjectStyle = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 50px 32px;

  @media only screen and (max-width: 950px) {
    justify-content: center;
    width: auto;
  }
`;

export const PhotoStyle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ProjectChil = styled.div`
  text-align: center;
`;

export const FrameBg = styled.div`
  /* z-index: 10px; */
  margin-right: 50px;
  gap: 20px 22px;
  position: absolute;
  z-index: -5px;

  @media only screen and (max-width: 950px) {
    margin-right: 0px;
    img{
      /* height: 500px;
      width: 400px; */
    }
  }
`;
export const FrameImg = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
  /* background-color: white; */
  z-index: 3;
  border-radius: 50%;
  margin-right: 100px;
  margin-top: 60px;
  img {
    height: 350px;
    width: 350px;
    border-radius: 50%;
    /* background-color: white; */
  }

  @media only screen and (max-width: 950px) {
    height: 487px;
    width:594px;
  display: flex;
  justify-content: center;
  margin-right: 0px;
  }
`;
