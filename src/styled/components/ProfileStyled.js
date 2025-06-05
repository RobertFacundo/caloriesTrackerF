import styled from "styled-components";
import statsImage from '../../assets/stats.jpg';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url(${statsImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 1rem;
  height: calc(100vh -20px);
  gap: 2rem;
`;

export const LeftPanel = styled.div`
  flex: 1;
  margin-top: 7rem;
  max-height: 50vh;
`;

export const RightPanel = styled.div`
  flex: 4;
  background-color: ${({ theme }) => theme.surface}80;  
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  max-height: 80vh;
`;

