import { useState } from 'react'
import { useRecoilState, useRecoilValue, RecoilRoot} from 'recoil';
import countState from './store/atoms/countState';
import Counter from './components/counter';
import Buttons from './components/buttons';

function App() {

  return (
    <>
    <RecoilRoot>
      {console.log("hi")}
      <Counter />
      <Buttons />
      </RecoilRoot>
    </>
  )
}

export default App
