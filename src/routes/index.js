import React from "react";
import { useRoutes } from 'react-router-dom';
import { CommitmentProvider } from "../context/CommitmentProvider";
import Home from "../pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <CommitmentProvider><Home /></CommitmentProvider>,
    },
  ]);
}