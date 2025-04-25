import { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', category: '', feedback: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/feedback/submit', form);
      alert('Feedback submitted!');
      setForm({ name: '', email: '', category: '', feedback: '' });
    } catch (err) {
      alert('Error submitting feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
      <h2 className="text-xl font-semibold">Submit Feedback</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <select
        className="w-full p-2 border rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        <option value="suggestion">Suggestion</option>
        <option value="bug">Bug</option>
        <option value="feature">Feature Request</option>
      </select>
      <textarea
        placeholder="Your Feedback"
        className="w-full p-2 border rounded"
        rows="4"
        value={form.feedback}
        onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
