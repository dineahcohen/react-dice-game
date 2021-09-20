import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dice from 'react-dice-roll';

function App() {
  const [diceValue, setDiceValue] = useState();
  const [currentNumber, setCurrentNumber] = useState();
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    randomNumber();
  });

  const randomNumber = () => {
    setCurrentNumber(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <MainAppWrapper>
      <LeftAppWrapper />
      <RightAppWrapper />

      <AppContainer>
        <h2 className="title"> Roll Dice!</h2>
        <div>
          <p> Current Number: {currentNumber} </p>
          <p> Rolled Number: {diceValue} </p>
        </div>

        <Dice
          rollingTime={500}
          size={50}
          onRoll={(value) => { setDiceValue(value); setShowStatus(true) }}
        />

        {
          showStatus ?
            diceValue === currentNumber ?
              <p> YOU WON</p> : <p> YOU LOST! </p>
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

  height: 80vh;
  width: 40vw;

  background-color: #fff;

  position: absolute;
  top: 10%;
  left: 30%;

  .title{
    text-align: center;
  }

  .dice-container{
    height: 15rem;
  }
`;