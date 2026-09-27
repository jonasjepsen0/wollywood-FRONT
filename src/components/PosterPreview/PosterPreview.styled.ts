import styled from 'styled-components'

export const PosterPreviewStyled = styled.article`
  display: flex;
  gap: 1.25rem;

  img {
    flex-shrink: 0;
    align-self: flex-start;
    width: 141px;
  }

  .tekst {
    flex-grow: 1;
  }

  h2 {
    margin: 0 0 0.75rem;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  p {
    margin: 0 0 1rem;
  }

  a {
    display: inline-block;
    padding: 0.3rem 1rem;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.button};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  }
`
