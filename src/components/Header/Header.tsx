import logo from '../../assets/logo.svg';
import bg from '../../assets/fundo-busca@2x.png';
import bloom from '../../assets/lupa.svg';
import {useState} from 'react';



export function Header() {
    const [dataHeader, setDataHeader] = useState('');
   
    function saveDataHeaderInLocalStorage(){
        const location = window.location.href;
        localStorage.setItem('search', dataHeader);
        window.location.href = location + 'busca'
    
    }

    return (
        <header>
            <section className="bg-gradient-to-r from-darkPurple to-lightPurple text-white text-2xl px-1 py-2 flex">
                <img src={logo} alt="logo ímpar" className="pl-2"/>
            </section>
            <section className="w-full flex justify-center align-center">
                <div className="absolute flex pt-[140px]">
                    <input 
                    type="text"
                    className="outline-none w-[900px] h-[55px] rounded-l-md text-xl focus: pl-12" placeholder="Digite aqui sua busca..."
                    value={dataHeader} 
                    onChange={(e)=>setDataHeader(e.target.value)}
                    />
                    <button className=" outline-none bg-white rounded-r-md" onClick={saveDataHeaderInLocalStorage}>
                        <img src={bloom} alt="search-btn" className="pr-3"/>
                    </button>
                </div>
                <img src={bg} alt="background-header" />
            </section>

        </header>
    )
}