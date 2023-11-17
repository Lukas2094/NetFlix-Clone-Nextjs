import styled from '@emotion/styled';

export const HeaderBlack = styled.header`
   
   position: fixed;
   z-index: 999;
   top: 0;
   left: 0;
   right: 0;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0px 30px;
   background: transparent;
   transition: all ease 1s;

`;

export const BlackHead = styled.header`
   
   background: #000;
   position: fixed;
   z-index: 999;
   top: 0;
   left: 0;
   right: 0;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0px 30px;
   transition: all ease 1s;
`;

export const HeaderLogo = styled.div`
     height: 60px;


     img {
        height: 100%;
     }

     :hover {
          height: 62px;
        }
`;

export const Headeruser = styled.div`
     height: 50px;

     img {
        height: 100%;
        border-radius: 5px;
     }

     :hover {
          height: 62px;
      }
`;