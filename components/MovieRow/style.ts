import styled from '@emotion/styled';


export const MovieRowContainer = styled.div`
    margin-bottom: 30px;
    
    h2 {
        margin: 0px 0px 0px 30px;
    }
`;

export const MovieRowListArea = styled.div`
    
    overflow-x: hidden;
    padding-left: 30px;

`;

export const MovieRowList = styled.div`
    transition: all ease 0.5s;
`;

export const MovieRowItem = styled.div`
    
    display: inline-block;
    width: 150px;
    height: auto;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;

        :hover {
            transform: scale(1);
        }
    }
 
`;

export const ArrowLeft = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    left: 0;

    :hover {
        opacity: 1;
    }

    @media (max-width : 760px) {
        opacity: 1;   
    }
`;

export const ArrowRight = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    right: 0;

    :hover {
        opacity: 1;
    }

    @media (max-width : 760px) {
        opacity: 1;   
    }
`;