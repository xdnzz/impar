import { Button } from "../../components/Button/Button";
import {Card } from "../../components/Card/Card";

export function MainContentPage() {
    return (
        <main className="w-full flex h-screen flex-col items-center ">
            <div className=" py-7">
                <div className="flex space-x-[600px]">
                    <span className="text-darkPurple text-[32px]">
                    Resultado de busca
                    </span>
                    <Button />
                </div>
                <Card/>
               
            </div>
            
        </main>
    )
}