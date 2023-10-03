import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useAppStore } from 'app/model';
import './config/i18n.config';
import './styles/index.css';

export const App = () => {
  const theme = useAppStore((state) => state.theme);

  return (
    <div className={theme} role="application">
      <RouterProvider router={router} />
    </div>
  );
};
