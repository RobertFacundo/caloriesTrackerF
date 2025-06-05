import styled from "styled-components";

export const FormCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width:400px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 200;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.muted};
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
   font-size: 1rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.4rem;
  padding: 0.6rem 0.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.surface};
  }

  &:active {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ToggleText = styled.p`
  margin-top: 1rem;
  text-align: center; 

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-weight: bold;
    margin-left: 0.3rem;

    &:hover {
    
      text-decoration: underline;
    }
  }
`;

export const ErrorMsg = styled.p`
  color:red;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const Select = styled.select`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.muted};
  color: ${({ theme }) => theme.text};
`;