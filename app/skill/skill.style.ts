import styled from "styled-components";
export const Con=styled.div`
margin-top:50px ;
`;

export const Padding=styled.div`
padding: 0 100px;
margin-top: 150px;

@media only screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const TextSkill =styled.div`
width: 415px;
font-weight: 400;
line-height: 30px;
margin-top:30px ;

@media only screen and (max-width: 950px) {
    text-align: center;
    width: auto;
  }
`;

export const ContentSkill =styled.div`
display: flex;
margin-top: 20px;

@media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardSkill =styled.div`
width: 321px;
border-radius: 6px;
margin-top: 25px;
margin-right: 15px;
margin-left: 15px;

@media only screen and (max-width: 950px) {
    /* width: 100%;
    align-items: center; */
  }
`;

export const CardText =styled.div`
text-align: center;
margin-top: 20px;
line-height:26px;

@media only screen and (max-width: 950px) {
    width: 100%;
    align-items: center;
  }
`;