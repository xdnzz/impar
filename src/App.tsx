import { Header } from './components/Header/Header';
import { MainContentPage } from './pages/MainContentPage';
import { SearchNavBar } from './pages/SearchNavBar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<MainContentPage />} />
          <Route path="/busca" element={<SearchNavBar />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
