import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User Feedback System</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <FeedbackForm />
        <FeedbackDashboard />
      </div>
    </div>
  );
}

export default App;
