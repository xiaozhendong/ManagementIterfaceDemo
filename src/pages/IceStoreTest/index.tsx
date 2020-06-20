import React from 'react';
import {Button} from '@alifd/next'
import {store} from 'ice'
import {store as pageStore} from 'ice/IceStoreTest'
import ClassComponent from './components/ClassComponent'

const IceStoreTest = () => {
  //调用models文件夹下的模型
  const [counterState, counterDispatchers] = store.useModel('counter')
  const [pageCounterState, pageCounterDispatchers] = pageStore.useModel('user')

  return (
    <div>
      <div>
        <div>{counterState.count}</div>
        <Button onClick={counterDispatchers.increment}>+</Button>
        <Button onClick={counterDispatchers.decrementAsync}>-</Button>
      </div>
      <div>
        <div>{pageCounterState.map((item) => {
          return <div>{item.name}</div>
        })}</div>
        <Button onClick={pageCounterDispatchers.addUser}>+</Button>

      </div>
      <ClassComponent/>
    </div>
  )
};

export default IceStoreTest;
