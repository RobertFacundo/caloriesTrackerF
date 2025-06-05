import styled from "styled-components";

export const InfoBox = styled.div`
  width: 100%;
  height: 100%;     
  background-color: ${({ theme }) => theme.surface}90;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding-top: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  letter-spacing: 0.1px;
  font-family: "Raleway", sans-serif;
  line-height: 1.8;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const BoxTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  letter-spacing: 0.8px;
`;

export const BoxSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 0 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
  }

  p {
   padding: 0.1rem;
  }
`;

export const BoxSectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & > ${BoxSection}:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.border};
  }
`;

export const BoxHighLight = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;
