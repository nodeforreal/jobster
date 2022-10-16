import {
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Chart = ({data}) => {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid  strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="count" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" maxBarSize={45}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
