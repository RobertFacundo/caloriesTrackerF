import styled from "styled-components";


export const NavContainer = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.background};
  
  a{
    margin-right: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: "Raleway", sans-serif;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  
  .nav-left {
    display: flex;
    align-items: center;
  }
  
  .theme-toggle {
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2); 
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3); 
    }
  }
`;