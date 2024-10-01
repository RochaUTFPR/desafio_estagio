import { useNavigate } from "react-router-dom";

import  NET from 'vanta/src/vanta.NET'
import '../Home/index.css'
import { useEffect } from 'react'

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        NET({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3f77ff,
            backgroundColor: 0x60618
        })
    },[])

    const HandleIniciar = () =>  {
        setTimeout(() => {
            navigate('/mission');
        }, 500);
    }

    return(
        <>
            <div className="Container-Home" id='vanta'>
                <h1 className="glow">O Artesão de Ilusões</h1>
                <p className="glow">Explore o universo digital, onde heróis enfrentam desafios virtuais em busca da segurança cibernética.</p>
                <button onClick={HandleIniciar} className="wrapper">
                    <a className="glow" href="#"><span>Iniciar</span></a>
                </button>
            </div>
        </>
    )
}