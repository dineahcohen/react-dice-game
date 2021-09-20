import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dice from 'react-dice-roll';

function App() {
  const [diceValue, setDiceValue] = useState('-');
  const [currentNumber, setCurrentNumber] = useState();
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    randomNumber();
  }, []);

  const randomNumber = () => {
    setCurrentNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <MainAppWrapper>
      <LeftAppWrapper />
      <RightAppWrapper />

      <AppContainer>
        <div>
          <h2 className="title"> Roll Dice!</h2>
          <h4> Click the dice to roll </h4>
        </div>

        <div>
          <p> Current Number: {currentNumber} </p>
          <p> Rolled Number:  {diceValue} </p>
        </div>

        <Dice
          rollingTime={500}
          size={70}
          onRoll={(value) => { setDiceValue(value); setShowStatus(true) }}
        />

        {
          showStatus ?
            diceValue === currentNumber ?
              <p className="winner-font"> YOU WON!</p> : <p className="loser-font"> You lost! Roll again. </p>
            :
            null
        }

      </AppContainer>
    </MainAppWrapper>
  );
}
export default App;

const MainAppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftAppWrapper = styled.div`
  background-color: #020122;
  height: 100vh;
  width: 50vw;
`;

const RightAppWrapper = styled.div`
  background-color: #1985A1;
  height: 100vh;
  width: 50vw;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  padding: 10px;

  height: 80vh;
  width: 40vw;

  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  position: absolute;
  top: 10%;
  left: 30%;

  .title{
    text-align: center;
  }

  .winner-font{
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  .loser-font{
    font-size: 20px;
    font-weight: 700;
    color: red;
    text-align: center;
  }

  @media (max-width: 768px) {
  .title{
    font-size: 3rem;
  }
  
  h4{
    font-size: 2rem;
    text-align: center;
  }
  
  p, .winner-font, .loser-font{
    font-size: 2rem;
    text-align: center;
  }
  } 

  @media (max-width: 500px) {
  .title{
    font-size: 2rem;
  }
  
  h4{
    font-size: 1.5rem;
    text-align: center;
  }
  
  p, .winner-font, .loser-font{
    font-size: 1.5rem;
    text-align: center;
  }
  }  

  @media (max-width: 430px) {
  .title{
    font-size: 1rem;
  }
  
  h4{
    font-size: 1rem;
    text-align: center;
  }
  
  p, .winner-font, .loser-font{
    font-size: 1rem;
    text-align: center;
  }
  } 
`;
