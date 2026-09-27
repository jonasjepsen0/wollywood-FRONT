import styled from 'styled-components'

export const ForsideStyled = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 3rem;

  .forhaeng {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-top: 1.5rem;
  }

  h1 {
    margin: 2rem 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  .gitter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2.5rem;
  }
`
