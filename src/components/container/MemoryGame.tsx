import { useEffect, useState } from 'react';

import StartWindow from '../start-window/StartWindow';
import Cards from '../cards/Cards';
import Modal from '../modal/Modal';
import './memoryGame.scss';

const MemoryGameContainer = () => {
  const [size, setSize] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if(isFinished) {
      toggleModalVisibility()
    }
  }, [isFinished])

  const toggleModalVisibility = () => {
    setIsModalOpen(open => !open);
  }
  
  function restartGame() {
    toggleModalVisibility();
    setTimeout(() => {
      setSize(0);
      setIsFinished(false);
    }, 800)
  }

  return (
    <div className="container">
      {!size ? (
        <StartWindow setSize={setSize} />
      ) : (
        <Cards size={size} setIsFinished={setIsFinished} />
      )}
      {isModalOpen && <Modal restartGame={restartGame} />}
    </div>
  );
};

export default MemoryGameContainer;