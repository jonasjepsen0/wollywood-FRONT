import styled from 'styled-components'

export const PlakatStyled = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 3rem;

  h1 {
    margin: 1.5rem 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  .indhold {
    display: flex;
    gap: 2.5rem;
  }

  section {
    display: flex;
    flex-grow: 1;
    gap: 2.5rem;
  }

  .tekst {
    flex-grow: 1;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  p {
    margin: 0 0 1rem;
  }

  .pris {
    margin: 1.5rem 0;
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 700;
  }

  img {
    flex-shrink: 0;
    align-self: flex-start;
    width: 293px;
  }

  button {
    padding: 0.3rem 1rem;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.button};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    cursor: pointer;
  }
`
