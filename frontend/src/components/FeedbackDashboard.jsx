import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeedbackDashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/feedback/getAll');
      setData(res.data);
    };
    fetchData();
  }, []);

  const filteredData = filter ? data.filter(item => item.category === filter) : data;

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Feedback Dashboard</h2>
      <select
        className="mb-4 p-2 border rounded"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="suggestion">Suggestion</option>
        <option value="bug">Bug</option>
        <option value="feature">Feature</option>
      </select>

      <div className="space-y-4 max-h-[450px] overflow-y-auto">
        {filteredData.map(item => (
          <div key={item._id} className="border p-4 rounded shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">{item.category}</span>
            </div>
            <p className="mt-2">{item.feedback}</p>
            <p className="text-sm text-right text-gray-400">
              {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
