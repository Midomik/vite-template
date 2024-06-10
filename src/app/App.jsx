import { Outlet } from 'react-router-dom';
import { SharedLayout } from '../shared/layouts';

function App() {
  return (
    <SharedLayout>
      <Outlet />
    </SharedLayout>
  );
}

export default App;
