import styled from 'styled-components';
import { Button } from '../styled/style';

const StartGame = ({toggle}) => {
  return (
    <Container className='content'>
        <img src="/images/dices.png"/>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame 

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content h1{
     font-size: 96px;
     white-space: nowrap;
    }
   
`;
