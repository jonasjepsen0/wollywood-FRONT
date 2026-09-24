import styled from 'styled-components'

export const FooterStyled = styled.footer`
  .inner {
    display: flex;
    gap: 4rem;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 1.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.line};
  }

  address {
    font-style: normal;
    line-height: 1.6;
  }

  address a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  .logo {
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
  }
`
