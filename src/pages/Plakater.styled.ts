import styled from 'styled-components'

export const PlakaterStyled = styled.div`
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
    flex-grow: 1;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  .gitter {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`
