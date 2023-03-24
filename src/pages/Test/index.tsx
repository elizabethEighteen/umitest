import src from '../../assets/test/1.png';
import Footer from './components/footer';

const Device = () => {
  return (
    <div>
      <div style={{ color: 'red' }}>2222</div>
      <img src={src} alt="" />
      <Footer>
        <div style={{ color: 'green' }}>444</div>
      </Footer>
    </div>
  );
};

export default Device;
