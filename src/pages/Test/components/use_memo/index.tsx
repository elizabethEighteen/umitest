import React, { useEffect } from 'react';
const genRandomName = () => {
  console.log('in genRandomName');
  return Math.random() + '';
};

const useName = () => {
  console.log('useName')
  // 每点一次按钮，genRandomName 就会执行一次
  //   const [name, setName] = React.useState(genRandomName());
  // usmemo()优化
  const randomName = React.useMemo(() => genRandomName(), []);
  const [name, setName] = React.useState(randomName);
  return {
    name,
    setName,
  };
};

const UseNameUI = (props: any) => {
  console.log(props);
  // @ts-ignore
  // eslint-disable-line no-unused-vars
  const { name, setName } = useName<string>('');
  useEffect(()=>{
    setName('222')
  },[])
  return (
    <>
      <div>{props.count}</div>
      <div style={{ color: 'red' }}>{name}</div>
    </>
  );
};

export default UseNameUI;
