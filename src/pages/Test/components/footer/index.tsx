const Footer = ({ children }) => {
  console.log(children);
  return (
    <div>
      <div style={{ color: 'red' }}>我是footer</div>
      {children}
    </div>
  );
};

export default Footer;
