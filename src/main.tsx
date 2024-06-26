import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router/Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './contexts/AuthProvider/AuthProvider.tsx';


// tanstackQuery
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
        
        <RouterProvider router={router} />
      
    </AuthProvider>
      </QueryClientProvider>
     
  </React.StrictMode>,
)

