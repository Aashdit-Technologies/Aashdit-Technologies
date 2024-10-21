
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ForecastLogin from './components/ForecastLogin';
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ForecastLogin/>
    </QueryClientProvider>
  )
}

export default App
