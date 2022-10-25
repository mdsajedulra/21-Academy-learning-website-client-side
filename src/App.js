import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthProvider/AuthProvider';
import { RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import { router } from './routes/routes/Routes';



function App() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
