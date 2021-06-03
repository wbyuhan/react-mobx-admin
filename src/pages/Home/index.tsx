import React,{ FC } from 'react';
import { inject, Observer, observer } from 'mobx-react';
import { Button } from 'antd';

const Home:FC = (props:any) =>{
  const { HomeStore } = props
  const test = () => {
    console.log("test")
    return 'a'
  }
  return (
    <div>
      <p>{HomeStore.count}</p>
      <Button type="primary" onClick={HomeStore.increase}>新增一次</Button>
      <Button type="primary" onClick={HomeStore.decrease}>减少一次</Button>
      <Observer>{() => <p>{test()}</p>}</Observer>
    </div>
  );
}

export default inject("HomeStore")(observer(Home));

