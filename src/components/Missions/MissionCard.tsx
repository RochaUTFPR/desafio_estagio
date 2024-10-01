import './index.css'

interface Mission {
    id: string;
    nome: string;
    descricao: string;
    dificuldade: string;
    status: string;
    UrlImg: string;
}

interface Props {
    mission: Mission; 
}
export function MissionCard(props : Props) {

    return (
        <>
            <div  className={`MissionCard ${props.mission.status === 'Disponível' ? 'Hover' : 'Bloqueado'}`}>
                <div className='Container-img'><img src={props.mission.UrlImg} alt="" /></div>
                <p>Nome: <span>{props.mission.nome}</span></p>
                <p>Descrição: <span>{props.mission.descricao}</span></p>
                <p>Dificuldade: <span>{props.mission.dificuldade}</span></p>
                <p>Status: <span>{props.mission.status}</span></p>
                {props.mission.status === "Bloqueado" ?
                <span className='Description'>Resolva as missões de nível facíl e médio</span>
                :
                <></>
                }
                
            </div>
        </>
    )
}