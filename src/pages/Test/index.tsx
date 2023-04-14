import src from '../../assets/test/1.png';
import Footer from './components/footer';
import UseNameUI from './components/use_memo';
import ContextUI from './components/context';
import { useEffect, useState } from 'react';

const Device = () => {
  const [count, setCount] = useState(0);
  const [number,setNumber] = useState(0)

  const handleClick = ()=>{
    setCount((i:any) => i + 1)
    for(let i=0;i<5;i++) {
      // setNumber(number+1)
      setNumber(i)
      console.log(number,'number')
      console.log(i,'i')
    }
  }

  useEffect(()=>{
    console.log(number,'useffect_number')
  },[number])

  return (
    <div>
      <div style={{ color: 'red' }}>2222</div>
      <img src={src} alt="" />
      <Footer>
        <div style={{ color: 'green' }}>444</div>
      </Footer>
      <button onClick={handleClick}>+1</button>
      <UseNameUI count={count}></UseNameUI>
      <ContextUI></ContextUI>
    </div>
  );
};

export default Device;
