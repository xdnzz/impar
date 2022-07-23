import { useState, useEffect } from 'react';


export function SearchNavBar() {

    const [dataLocal, setDataLocal] = useState<string | null>('')

useEffect(() => {
const getData = localStorage.getItem('search');
const convertData = JSON.stringify(getData)
setDataLocal(dataitem => getData)
})
return (
    <main>
        Você buscou por: {dataLocal}
    </main>
)
}