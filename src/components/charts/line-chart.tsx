import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface LineChartProps {
  data: any[];
  lines: { dataKey: string; stroke: string; name?: string }[];
  xAxisKey: string;
  height?: number;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const LineChartComponent: React.FC<LineChartProps> = ({
  data,
  lines,
  xAxisKey,
  height = 300,
  margin = { top: 10, right: 30, left: 0, bottom: 0 },
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {lines.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            name={line.name || line.dataKey}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
