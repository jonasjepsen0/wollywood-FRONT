import styled from 'styled-components'

export const PosterCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
 
  img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: contain;
  }

  h3 {
    margin: 0.5rem 0 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  p {
    margin: 0 0 0.75rem;
  }

  button {
    margin-top: auto;
    padding: 0.3rem 1rem;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.button};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    cursor: pointer;
  }
`
