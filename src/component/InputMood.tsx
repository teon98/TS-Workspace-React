import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addMood } from "../ReactRedux";
import "../style/common.css";

function InputMood() {
  const [date, setDate] = useState<string>('2024-02-13');
  const [temp, setTemp] = useState<number>(0);

  const dispatch = useDispatch();

  const onAddMood = (temp: number, date: string) => {
    const newDate = new Date(date);
    dispatch(addMood(temp, newDate));
  }

  const onChange = (target: string, e: ChangeEvent<HTMLInputElement>) => {
    switch (target) {
      case 'date':
        setDate(e.target.value);
        break;
      case 'mood':
        setTemp(Number(e.target.value));
        break;
    }
  }

  return (
    <div id="inputBody">
      <input
        type="date"
        value={date}
        onChange={(e) => onChange('date', e)}
      />
      <input
        type="number"
        step="10"
        value={temp}
        onChange={(e) => onChange('mood', e)} />
      <button type="button" onClick={() => onAddMood(temp, date)}>기분 온도 올리기</button>
    </div>
  );
}

export default InputMood;