import { useState } from 'react';

//리액트 상태코드 작성하는 법
//1.<제네릭>으로 type 선언
//2.초기값으로 타입추론
function ReactState(){
  const [counter, setCounter] = useState<boolean>(true);

  return <div>{counter}</div>;
}

export default ReactState;