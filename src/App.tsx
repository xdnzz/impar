import {Header} from './components/Header/Header';
import {MainContentPage} from './pages/MainContentPage';

function App() {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header/>
      <MainContentPage/>
    </div>
  )
}

export default App
