import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';


export const ContainerFeatured = styled.section`
    height: 100vh;

    @media (max-width: 768px) {
        height: 90vh;
    }
`;

export const ContainVertical = styled.div`
   
    width: inherit;
    height: inherit;
    background: linear-gradient(to top,#111 10%,transparent 90%);
 
`;

export const ContainHorizontal = styled.div`

    width: inherit;
    height: inherit;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
    background: linear-gradient(to right,#111 30%,transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContentName = styled.div`
    font-size: 60px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

export const ContentInfo = styled.div`
     
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
 
`;


export const FeaturedPoints = styled.div`
    color: #46d369;
`;

export const ContainerSeasonsYear = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const FeaturedDescription = styled.div`
    
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;

     @media (max-width: 768px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }

`;

export const FeaturedButton = styled.div`
    margin-top: 15px;
`;

export const MyView = styled.a`
    
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;transition: all ease 0.2s;

    background-color: #fff;
    color: black;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    :hover {
        opacity: 0.7;
    }
`;

export const MyList = styled.a`
    
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;transition: all ease 0.2s;

    background-color: #333;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    :hover {
        opacity: 0.7;
    }
`;

export const Generos = styled.div`
    
    margin-top: 15px;
    font-size: 18px;
    color: #999;


    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

