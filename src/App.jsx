import { Layout } from "./components/layout/Layout";
import { ToDoList } from "./components/pages/ToDoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ToDoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
