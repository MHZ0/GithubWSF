import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ProfileSideBar from "./components/ProfileSideBar";
import { BrowserRouter, Routes } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <div className="container flex flex-col h-16 mx-auto md:flex-row max-w-7xl">
            <ProfileSideBar />
            <header className="w-full mt-12 mb-5 md:w-2/3">
              <Navbar />
            </header>
          </div>

          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
