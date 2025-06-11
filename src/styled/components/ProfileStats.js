import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.1rem;
  font-weight: 300;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 900px){
    max-width: 800px;
    height: 300px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const RangeButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color:  ${({ active, theme }) => (active ? theme.primary : theme.surface)};
  color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.8s ease;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.1rem;

   &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.surface};
  }
`;

export const TotalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.surface}95;
  color: ${({ theme }) => theme.text};

  p {
    flex: 1;
    text-align: center;
    span{
      color: ${({ theme }) => theme.text};
      font-weight: 500;
    }
  }
`;