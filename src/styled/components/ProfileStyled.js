import styled from "styled-components";
import statsImage from '../../assets/stats.jpg';

export const Container = styled.div`
  min-height: 100%;
  background-image: url(${statsImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center; 

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem; 
    align-items: stretch; 
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
}
`;

export const RightPanel = styled.div`
  flex: 4;
  background-color: ${({ theme }) => theme.surface}80;  
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  max-height: 80vh;

  @media (max-width: 768px) {
    width: 100%; /* ocupan toda la línea */
  }

`;

