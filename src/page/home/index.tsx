import { Link } from 'react-router-dom'
import Box from '../../../public/box.png';
import Svg from '../../../public/Group 75.svg';
import Play from '../../../public/Group 45.png';
import Button from '../../components/button';

export default function Home() {
  return (
    <div className="container">
         <div className="box-wrapper">

          <img src={Svg} alt="rasm" className='svg' />

          <Link to={'/play'} >
          <img src={Play} alt="rasm" className='play' style={{width:150}}  />

          </Link>
          <img src={Box} alt="rasm" />

<Link to={'/info'} >
<Button />

</Link>
         </div>
    </div>
  )
}
