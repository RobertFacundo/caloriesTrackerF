import styled from "styled-components";

export const LoaderContainer = styled.div`
  height: 100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Spinner = styled.div`
  width: 160px;
  height: 160px;
  border: 6px solid ${({ theme }) => theme.primary || '#ccc'};
  border-top: 6px solid ${({ theme }) => theme.secondary || '#333'};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
