import styled from 'styled-components';

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
    img{
        width: 250px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    width: 30%;
    height: 300px;
    border-radius: 20px;
    img{
        width: 100px;
    }
`;