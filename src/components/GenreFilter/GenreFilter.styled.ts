import styled from 'styled-components'

export const GenreFilterStyled = styled.aside`
  flex-shrink: 0;
  width: 168px;
  padding-right: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.line};

  h2 {
    margin: 0 0 1rem;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    display: block;
    padding: 0.15rem 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`

