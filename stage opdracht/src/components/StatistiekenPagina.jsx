import { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StatistiekenPagina() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/statistieken.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div className="p-4">Laden...</div>;

  const bezoekersData = {
    labels: data.map((item) => item.datum),
    datasets: [
      {
        label: "Bezoekers",
        data: data.map((item) => item.bezoekers),
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        fill: false,
      },
    ],
  };

  const downloadsData = {
    labels: data.map((item) => item.datum),
    datasets: [
      {
        label: "Downloads",
        data: data.map((item) => item.downloads),
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">📊 Statistieken</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Bezoekers over tijd</h2>
          <Line data={bezoekersData} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Downloads over tijd</h2>
          <Bar data={downloadsData} />
        </div>
      </div>

      <div className="text-right">
        <button
          className="mt-4 bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
          onClick={() => window.print()}
        >
          📥 Exporteer
        </button>
      </div>
    </div>
  );
}
