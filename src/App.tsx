import { Header } from './components/Header/Header';
import { MainContentPage } from './pages/MainContentPage';
import { PkmProvider } from './contexts/GetAllPkm'
import { PkmSingleProvider } from './contexts/GetSinglePkm';


export function App() {
  return (
    <PkmSingleProvider>
      <PkmProvider>
        <div className="w-full flex flex-col justify-center items-center">
          <Header />
          <MainContentPage />
        </div>
      </PkmProvider>
    </PkmSingleProvider>
  )
}