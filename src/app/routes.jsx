import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Home, NotFound } from '../pages';
// import { PrivateRoute } from '../app/providers/PrivateRoute';
// import { PublicRoute } from '../app/providers/PublicRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
