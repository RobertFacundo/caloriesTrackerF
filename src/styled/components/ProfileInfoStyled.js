import styled from "styled-components";

export const ProfileContainer = styled.div`
  flex: 1;
  padding: 1rem 0.2rem;
  background-color: ${({ theme }) => theme.surface}90;
  border-radius: 1rem;
  max-height: 80vh;
  min-width: 360px;
  text-align: center;
  overflow-y: auto;
`;

export const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.primary}80;
  margin-bottom: 0.3rem;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.2rem;
  font-weight: 500;
`;

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  gap: 0.2rem;
  text-align: center;
  min-height: 3rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  border-bottom: 2px solid ${({ theme }) => theme.primary}30;
  text-transform: capitalize;
  margin-left: 1.5rem;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
`;

export const Value = styled.span`
  font-size: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({theme})=>theme.background}90;
  min-height: 2.4rem;
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;
  justify-content: center;  /* Centrar horizontalmente */
  border-bottom: 1px solid transparent; /* espacio igual que input sin mostrar borde */
  padding: 0.4rem 0.4rem;
  text-align: center; /* por si acaso */
  width: 100%; 
  box-sizing: border-box;
`;

export const Input = styled.input`
  font-size: 1rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({theme})=>theme.background}90;
  border: none;
  border-radius: 5px;
  padding: 0.2rem 0.4rem;
  width: 100%;
  min-height: 2.4rem;
  text-align: center;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.background};
  }
`;

export const ActionButton = styled.button`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
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
`;

export const Select = styled.select`
  font-size: 1rem;
  margin-left: 1rem;
  text-align:center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem;
  width: 100%;
  appearance: none;
  cursor: pointer;
  min-height: 2.4rem; 
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.surface};
  }

   option {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 0.4rem;
    font-size: 1rem;
  }
`;
