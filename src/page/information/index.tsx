import { Link } from 'react-router-dom'
import Card from '../../components/card'
import Back from '../../../public/Frame 71.svg'
import How from '../../../public/How to Play.svg'


export default function Info() {
  return (
    <div className='container'>
        <header>
          <Link to={'/'} > 
          <img src={Back} alt="" className='back ' />

          </Link>
 <img src={How} alt=""  className='How' />
        </header>
        <div className="cards">
        <Card title='01' text='First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.' paragraf='Choose a category' />
        <Card title='02' text='Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.' paragraf='Guess letters' />
        <Card title='03' text='You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.' paragraf='Win or lose' />
        </div>
        
        
    </div>
  )
}
