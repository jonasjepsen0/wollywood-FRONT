import styled from 'styled-components'

export const HeaderStyled = styled.header`
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  .logo {
    font-family: ${({ theme }) => theme.fonts.logo};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav a {
    font-size: ${({ theme }) => theme.fontSizes.m};
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  nav a.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .kurv img {
    display: block;
  }
`
