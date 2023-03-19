import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};
`
