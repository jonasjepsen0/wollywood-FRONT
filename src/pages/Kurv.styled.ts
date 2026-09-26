import styled from 'styled-components'

export const KurvStyled = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 3rem;

  h1 {
    margin: 1.5rem 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  li > img {
    width: 80px;
  }

  .tekst {
    flex-grow: 1;
  }

  h2 {
    margin: 0 0 0.25rem;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  p {
    margin: 0;
  }

  button {
    padding: 0.4rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.button};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    cursor: pointer;
  }

  button img {
    display: block;
  }
`
