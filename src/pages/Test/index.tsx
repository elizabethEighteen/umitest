import src from '../../assets/test/1.png';
import Footer from './components/footer';
import UseNameUI from './components/use_memo';
import { useState } from 'react';

const Device = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ color: 'red' }}>2222</div>
      <img src={src} alt="" />
      <Footer>
        <div style={{ color: 'green' }}>444</div>
      </Footer>
      <button onClick={() => setCount((i:any) => i + 1)}>+1</button>
      <UseNameUI count={count}></UseNameUI>
    </div>
  );
};

export default Device;
