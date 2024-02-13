import Chart from 'chart.js/auto'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type MoodData = {
  index: number;
  moodTemp: number;
  date: Date;
}

interface MoodChartProps {
  myMoods: MoodData[];
}

function MoodChart() {
  const myMoods = useSelector((state: RootState) => state.reducer.moods)

  const moodChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (moodChartRef.current) {
      const moodChart = new Chart(moodChartRef.current, {
        type: 'line',
        data: {
          labels: myMoods.map(i => {
            const year: number = i.date.getFullYear();
            const month: number = i.date.getMonth() + 1;
            const date: number = i.date.getDate();
            return `${year}/${month}/${date}`;
          }),
          datasets: [{
            data: myMoods.map(i => i.moodTemp),
            label: '기분 온도'
          }]
        }
      });
      return () => {
        moodChart.destroy();
      }
    };

  }, [myMoods])

  console.log(myMoods);

  return (
    <div id="chartBody">
      <canvas ref={moodChartRef}></canvas>
    </div>
  );
}

export default MoodChart;