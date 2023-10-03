import React from 'react';
import { Loader } from 'shared/ui';
import { ROUTES } from 'shared/consts/routes';
import { Outlet, Navigate } from 'react-router-dom';
import { BaseLayout } from 'app/layouts/base-layout';
import { TopBar } from 'widgets/top-bar';
import { AsyncTransactionPage } from 'pages/transactions';
import { AsyncNotFoundPage } from 'pages/not-found';
import { AsyncWelcomePage } from 'pages/welcome';
import { AsyncErrorPage } from 'pages/error';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: ROUTES.root,
    element: (
      <BaseLayout
        header={<TopBar heading="Ton 💎" />}
        content={
          <React.Suspense fallback={<Loader visible />}>
            <Outlet />
          </React.Suspense>
        }
      />
    ),
    children: [
      {
        index: true,
        element: <AsyncWelcomePage />,
      },
      {
        path: ROUTES.transactions,
        element: <AsyncTransactionPage />,
        errorElement: <AsyncErrorPage />,
      },
      {
        path: ROUTES.notFound,
        element: <AsyncNotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.notFound} replace />,
  },
];
