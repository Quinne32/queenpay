// components/RevenueChart.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

export default function RevenueChart() {
  const chartRef = useRef<any>(null);
  const [gradient, setGradient] = useState<string | CanvasGradient>("");

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, "rgba(15,118,110,0.25)");
      gradient.addColorStop(1, "rgba(15,118,110,0)");
      setGradient(gradient);
    }
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [300000, 520000, 640000, 780000, 920000, 1180000],
        borderColor: "#0f766e",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(15,118,110,0.25)");
          gradient.addColorStop(1, "rgba(15,118,110,0)");
          return gradient;
        },
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280" },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-500">Summary</p>
          <h2 className="text-2xl font-semibold">$1,876,580</h2>
        </div>

        <select className="text-sm text-gray-500 border-none focus:ring-0">
          <option>6 Months</option>
        </select>
      </div>

      {/* line Chart */}
      <Line data={data} options={options} height={100} />
    </div>
  );
}
