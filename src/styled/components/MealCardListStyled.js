import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  position: relative;
`;

export const CenteredTitle = styled.h2`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 1.8rem;
  padding-top: 0.5rem;
  letter-spacing: 0.5rem;
  font-family: "Raleway", sans-serif;
`;

export const MealsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0rem 1.5rem;
`;

export const AddMealInput = styled.div`
  border: 1px solid ${({theme})=> theme.primary};
  padding: 1rem;
  // background-color: ${({ theme }) => theme.surface};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.primary}40;
  transition: transform 0.9s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    cursor: pointer;
  }
`;

export const AddMealButton = styled.button`
  font-size: 4rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer; 
  transition: transform 0.2 ease;

  &:hover {
    transform scale(1.2);
  }
`;

export const AddMealNameInput = styled.input`
  padding: 0.5rem 1rem;
  border: 0.5px solid ${({ theme }) => theme.border};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  widht: 100%;
  max-width: 250px;
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

export const AddMealNameButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme})=> theme.surface};
  color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.4rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 0.8s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({theme})=> theme.accent};
    color: ${({ theme }) => theme.background};
    transform: scale(1.05)
  }

  &:active {
    transform: scale(0.97);
  }
`;