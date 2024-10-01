import { useState, useEffect } from 'react'
import  NET from 'vanta/src/vanta.NET'

import { Characters } from '../../components/Characters/Characters';
import { MissionCard } from '../../components/Missions/MissionCard'
import { useApi } from '../../hooks/useApi';

import '../Mission/index.css'

interface Mission {
    id: string;
    nome: string;
    descricao: string;
    dificuldade: string;
    status: string;
    UrlImg: string;
}

interface Character {
    id: string;
    nome: string;
    descricao: string;
    habilidades: string[]; 
    status: string;
    UrlImg: string;
}

export function Mission() {
    const [HandlChoose, setHandlChoose] = useState('false');
    const [missions, setMissions] = useState<Mission[]>([]); 
    const [characters, setCharacters] = useState<Character[]>([]); 
    const [slidePerView, setSlidePerView] = useState(3);

    useEffect(() => {

        function handleResize(){
            if(window.innerWidth < 1500) {
                setSlidePerView(2)
            }
            if(window.innerWidth < 1000) {
                setSlidePerView(1)
            }if(window.innerWidth > 1500) {
                setSlidePerView(3)
            }
        }   

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    const api = useApi()

    const handleClickPerson = async () => {
        setHandlChoose('Person');
        if(characters.length === 0) {
            try {
                const data = await api.PersonRoute();
                setCharacters(data)
            } catch (error) {
                console.error('Erro ao chamar a rota de Personagens:', error);
            }
        }
      };
    
      const handleClickMission = async () => {
        setHandlChoose('Mission');
        if(missions.length === 0) {
            try {
                const data = await api.MissionsRoute();
                setMissions(data)
            } catch (error) {
                console.error('Erro ao chamar a rota de missoes:', error);
            }
        }
        
    };

    useEffect(() => {
        NET({
            el:'#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1e6155,
            backgroundColor: 0x8080c,
            points: 14.00,
            maxDistance: 25.00,
            spacing: 20.00
        })
    },[])

    return(
        <>
        <div className="Container-Mission" id='vanta'>
                <div>
                    <div className ='Choose' onClick={handleClickMission}>
                        <h3>Missões</h3>
                    </div>
                    <div className ='Choose' onClick={handleClickPerson}>
                        <h3>Personagens</h3>
                    </div>
                </div>
                <div className='Container-cards'>
                    {HandlChoose === 'Mission' ? 
                        <swiper-container 
                        slides-per-view={slidePerView} 
                        loop="true" 
                        navigation 
                        style={{"--swiper-theme-color": "#fff",}} >
                            {missions.map( mission => (
                                <swiper-slide style={{display: 'flex', justifyContent: 'center', padding: 10}} key={mission.id}>
                                    <MissionCard  mission={mission}/>
                                </swiper-slide>
                            ))}
                        </swiper-container>
                     :  <swiper-container 
                        slides-per-view={slidePerView} 
                        loop="true" 
                        navigation 
                        style={{"--swiper-theme-color": "#fff"}} >
                            {characters.map( characters => (
                                <swiper-slide style={{display: 'flex', justifyContent: 'center', padding: 10}} key={characters.id}>
                                    <Characters character={characters} />
                                </swiper-slide>
                            ))}
                        </swiper-container>}
                     
                </div>
        </div> 

        </>
        
    )
}

