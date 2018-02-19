import styled, { keyframes, css, injectGlobal } from 'react-emotion'

export const injectGlobalStyles = () => injectGlobal`
html, body {
  margin: 0;
  background: #551A8B;
  min-height: 100%;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
}
`

export const basicStyles = css`
font-family: 'Architects Daughter', cursive;
background-color: white;
color: cornflowerblue;
border: 1px solid lightgreen;
border-right: none;
border-bottom: none;
box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
transition: all 0.1s linear;
padding: 16px 8px;
margin: 24px;
`

export const hoverStyles = css`
&:hover {
color: white;
background-color: lightgray;
border-color: aqua;
box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
}
`
export const bounce = keyframes`
from {
transform: scale(1.01);
}
to {
transform: scale(0.99);
}
`

export const PokemonWrapper = styled('div')`
display: flex; 
justifyContent: space-around;
`
export const Basic = styled('div')`
${basicStyles};
`
export const flexCol = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px'
}

export const pokemonDetails = {
  background: 'white',
  padding: '1em',
  marginTop: '24px',
  height: '500px',
  width: '400px',
  border: '2px solid black',
  borderRadius: '10px'
}
export const StyledButton = styled('button')`
${basicStyles};
${hoverStyles};
width: 100px;
& code {
  background-color: linen;
}
`
export const Combined = styled('div')`
${basicStyles};
${hoverStyles};
& code {
  background-color: linen;
}
`
export const Animated = styled('div')`
${basicStyles};
${hoverStyles};
& code {
  background-color: linen;
}
animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`