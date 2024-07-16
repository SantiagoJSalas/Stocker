import { Trash } from "lucide-react";
import { useState } from "react";
import Calendar from 'react-calendar';

function Dashboard() {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className="w-full h-full grid grid-cols-5 grid-rows-7 text-xl gap-5">
                <section className="col-span-4 bg-white rounded-lg h-fit p-5 w-full text-2xl">
                    <h1>Bienvenido de vuelta, <b>John Doe</b>!</h1>
                    <p>Echa un vistazo a tu semana</p>
                </section>

                <section className="bg-white rounded-lg row-span-2">
                    <Calendar
                        onChange={setDate}
                        value={date}
                    />
                    <div>
                        Selected date: {date.toDateString()}
                    </div>
                </section>

                <section className="bg-white rounded-lg row-span-5 col-start-5 p-5">
                    <div className="w-full  text-center space-y-4 ">
                        <h1 className="font-bold">PROXIMOS A VENCER</h1>
                        <p className="font-light text-lg">Estos productos vencen en los proximos 7 dias</p>
                        <div className="w-full grid grid-cols-2 items-stretch">
                            <div className="place-self-start">
                                <h1>Hello</h1>
                            </div>
                            <div className="place-self-end">
                                <button><Trash color="#f00" /></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="col-span-4 row-start-7 grid grid-cols-3 gap-5">
                    <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
                        <h1>AGREGAR ALIMENTOS</h1>
                        <p>Agrega nuevos alimentos al inventarios</p>
                        <button className="w-[80%] rounded-lg p-1 bg-st_green font-bold text-white">Ir</button>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                        <h1>AGREGAR INSUMOS</h1>
                        <p>Agrega nuevos recursos al inventarios</p>
                        <button className="w-full rounded-lg p-1 bg-st_yellow font-bold text-white">Ir</button>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                        <h1>AGREGAR MOBILIARIA</h1>
                        <p>Agrega nuevoa mobiliaria al inventarios</p>
                        <button className="w-full rounded-lg p-1 bg-st_blue font-bold text-white">Ir</button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Dashboard;