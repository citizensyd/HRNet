import styled from 'styled-components';

export const ContainerStyles =  styled.section `
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  padding: 20px;
`;

export const FormStyles =  styled.form `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  width: 500px;
  height: 350px;
  padding: 20px;
  `;

export const CalendarContainer = styled.div `

`;

export const StyledModal = styled.div`
  display: ${props => props.isModalOpen ? 'block' : 'none'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 100%;
  max-width: 600px;
  height: auto;
  padding: 20px;
  background: #6c8012;
  border-radius: 10px;

  h2 {

  }

  button {

  }
`;


