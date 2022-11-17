import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {Router} from "./Router"
import { CartContext } from './components/CartContext'
import { CartContextProvider } from './components/CartContext'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>

  
    <Router />

    </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
 
)