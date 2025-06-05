import styled from "styled-components";
import backgroundImage from '../../assets/authenticationCover.jpg'

export const AuthWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  bacground-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`