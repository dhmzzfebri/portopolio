import styled from 'styled-components';
export const PaddingContact = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }
`;
export const Contacts = styled.div`
  padding-top: 50px;
  margin-left: 0px;

  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const TextH2 = styled.div`
width: 415px;
  font-weight: 400;
  /* line-height: 30px; */
  margin-top: 30px;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const Phone = styled.div`
width: 245px;
height: 70px;
flex-shrink: 0;
display: flex;
margin-top: 50px;

@media only screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const Email = styled.div`
width: 245px;
height: 70px;
flex-shrink: 0;
display: flex;
margin-top: 50px;

@media only screen and (max-width: 950px) {
    width: 100%;
    margin-top: 30px;
  }
`;
export const CardPhone = styled.div`
display: inline-flex;
padding: 20px;
align-items: flex-start;
border-radius: 3px;
background: rgba(255, 255, 255, 0.05);


`;

export const TextCard = styled.div`
margin-left: 20px;
margin-top: auto;
margin-bottom: auto;
line-height: normal;

@media only screen and (max-width: 950px) {
    width: 100%;
    margin-left: 10px;
  }
`;
export const CardFont = styled.div`
width: 209px;
height: 97px;
border-radius: 6px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.05);
position: absolute;
top: 230px;
right: 300px;

@media only screen and (max-width: 950px) {
    position: static;
    display: none;
  }
`;
export const TextCard2 = styled.div`
width: 209px;
height: 97px;
align-items: center;
display: flex;
text-align: center;
/* margin-left: 30px; */
`;
export const Rectangle = styled.div`
width: 550px;
height: 536px; 

img{
  width: 550px;
height: 436px;

@media only screen and (max-width: 950px) {
  position: relative;
top: -450px;
  }
}
`;
export const Ellipse1= styled.div`
width: 110px;
height: 110px;
background-color: rgba(255, 255, 255, 0.05);
display: flex;
justify-content: center;
border-radius: 50%;
align-items: center;
right: 150px;
top: 350px;
position: absolute;

@media only screen and (max-width: 950px) {
    position: static;
    display: none;
  }
`;
export const Ellipse2= styled.div`
width: 84px;
height: 84px;
background-color: rgba(255, 255, 255, 0.05);
z-index: 5px;
display: flex;
justify-content: center;
border-radius: 50%;
align-items: center;
`;
export const Ellipse3= styled.div`
display: flex;
justify-content: center;
border-radius: 50%;
align-items: center;
img{
width: 60px;
height: 60px;
border-radius: 60px;
}
`;
