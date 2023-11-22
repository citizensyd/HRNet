import styled from 'styled-components';

export const ContainerStyles =  styled.section `
  position: relative;
`;

export const FormStyles =  styled.form `
  position: relative;
  `;


export const CalendarContainer = styled.div `
  position: relative;
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
    // Styles pour le titre h2
    font-size: 50px;
  }

  button {
    // Styles pour le bouton
  }
`;


