import { Pie, PieChart, Tooltip } from "recharts";
import type { Character } from "../types";
import { House } from "../types";

type HouseObject = {
  [key in keyof typeof House]: number;
};

const initialData = {
  [House.Gryffindor]: 0,
  [House.Hufflepuff]: 0,
  [House.Ravenclaw]: 0,
  [House.Slytherin]: 0,
};

interface ChartProps {
  characters: Character[];
}
export const Chart = ({ characters }: ChartProps) => {
  const data = characters.length
    ? characters.reduce((acc: HouseObject, character) => {
        const house = character.house;
        return {
          ...acc,
          [house]: acc[house] + 1,
        };
      }, initialData)
    : initialData;
  const chartData = Object.entries(data)
    .filter((item) => item[0])
    .map((item) => ({ name: item[0], value: item[1] }));

  if (!characters.length) {
    return <p>Нет подходящих данных</p>;
  }

  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={chartData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};
