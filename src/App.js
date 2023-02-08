import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from 'react-router-dom'
import router from './routes/index';

const App = () => {
  const routing = useRoutes(router);
  return (
    <div>{routing}</div>
  );
}

export default App;

