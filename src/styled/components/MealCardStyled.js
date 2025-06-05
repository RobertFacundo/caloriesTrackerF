import styled from "styled-components";


export const StyledMealCard = styled.div`
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px ${({ theme }) => theme.primary}40;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: start;
`;

export const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.text};
      letter-spacing: 0.1rem;
      font-family: "Raleway", sans-serif;
    }
  `;

export const TotalNutritionRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const IngredientItem = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  font-family: "Raleway", sans-serif;
  font-weight: 200;
  letter-spacing: 0.05rem;
  border-radius: 0.4rem;
  padding: 0.5rem;
  flex: 1 1 110px; /* crece, reduce, tamaño base */
  max-width: 250px;
  transition: all 0.3s ease-in-out;

  &:hover {
      transform: scale(1.03);
  }
`;

export const IngredientNameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: red;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.08);
    }
  }
`;

export const IngredientNutritionRow = styled.div`
  margin-top: 0.3rem;
  display: flex;
  gap: 0.5rem;
  padding-left: 0.5rem;
`;

export const AddIngredientButton = styled.button`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.surface};
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const InputGroup = styled.div`
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
   padding-right: 8px; 
`;

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border: 0.5px solid ${({ theme }) => theme.border};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.subtext};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent};
  }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 0.9rem;
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const AddIngredientInformationButton = styled.button`
padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.4rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 0.8s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
    transform: scale(1.05)
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;
  margin: 0.3rem;
  
  label {
    min-width: 80px; /* ancho fijo para que queden alineados */
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  input {
    width: 100px;
    flex: 0 0 auto;
  }
`;