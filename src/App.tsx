import { Header } from './components/Header/Header';
import { MainContentPage } from './pages/MainContentPage';
import { PkmProvider } from './contexts/GetAllPkm'


export function App() {
  return (
    <PkmProvider>
      <div className="w-full flex flex-col justify-center items-center">
        <Header />
        <MainContentPage />
      </div>
    </PkmProvider>
  )
}