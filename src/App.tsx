import {Header} from './components/Header/Header';
import {MainContentPage} from './pages/MainContentPage/MainContentPage';

function App() {

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Header/>
      <MainContentPage/>
    </div>
  )
}

export default App
