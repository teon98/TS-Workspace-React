import { ChangeEvent, MouseEvent, useState } from 'react';

function ButtonHandler() {
  /* 함수 표현식
  const showAlert = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };*/

  /* 함수 선언문 */
  function showAlert(event: MouseEvent<HTMLButtonElement>) {
    console.log(event);
    event.target;
  }

  return <button onClick={showAlert}>show</button>
}

function InputHandler() {
  const[todo, setTodo] = useState<string>('');
  /* 함수 표현식 */
  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  }
  
  /* 함수 선언문
  function updateTodo(event: ChangeEvent<HTMLInputElement>){
    setTodo(event.target.value);
  } */

  return <input type="text" onChange={updateTodo} value={todo} />
}

export { ButtonHandler, InputHandler };