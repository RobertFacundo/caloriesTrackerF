import styled from "styled-components";
import coverImage from '../../assets/cover.jpg'

export const StatsContainer = styled.section`
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${coverImage});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  color:${({ theme }) => theme.secondary};
  min-height: 30vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

export const StatsLeft = styled.div`
  flex: 1;
  max-width: 33.33%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  font-family: "Raleway", sans-serif; 

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.4rem 0;
    font-size: 1rem;
    line-height: 1.6;
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
  }
`;

export const StatsRight = styled.div`
  flex: 2;
  max-width: 66.66%;
  height: 100%; 

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background-color: ${({ theme }) => theme.border};
    border-radius: 34px;
    transition: 0.3s;
  }
  span::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.surface};
    border-radius: 50%;
    transition: 0.3s;
  }
  input:checked + span {
    background-color: ${({ theme }) => theme.primary};
  }
  input:checked + span::before {
    transform: translateX(20px);
  }
`;