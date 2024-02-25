import React, { useState } from 'react';

import Back from '../../../public/Frame 71.svg';
import { Link } from 'react-router-dom';

const Play: React.FC = () => {
  const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const handleBtnClick = (letter: string) => {
    if (selectedLetters.length < 10) {
      setSelectedLetters([...selectedLetters, letter]);
    }
  };

  const handleDeleteClick = () => {
    setSelectedLetters([]);
  };

  return (
    <div className="container" style={{ height: 800 }}>
      <header> 
        <Link to={'/'}><img src={Back} alt="" className='back' /></Link></header>
      <div className="information">
        {selectedLetters.slice(0, 10).map((selectedLetter, index) => (
          <span key={index}>{selectedLetter}</span>
        ))}
      </div>
      <div className="typing">
        {letters.map((letter, index) => (
          <div key={index} className='btn' onClick={() => handleBtnClick(letter)}>{letter}</div>
        ))}
        <div className="delete" onClick={handleDeleteClick}>delete</div>
      </div>
    </div>
  );
};

export default Play;
