import '../Characters/index.css'

interface Character {
    id: string;
    nome: string;
    descricao: string;
    habilidades: string[]; 
    status: string;
    UrlImg: string;
}

interface Props {
    character: Character; 
}

export function Characters(props : Props){
    console.log()
    return (
        <>
            <div className={`Container-Characters ${props.character.status === 'Disponível' ? 'Hover' : 'Bloqueado'}`}>
                <div className='Container-align'>
                    <div className='Container-img-Characters'><img src={props.character.UrlImg} alt="" /></div>
                    <div className='Container-text-align'>
                        <p>Nome: <span>{props.character.nome}</span></p>
                        {props.character.habilidades ? (
                         props.character.habilidades.map((habilidade, index) => (
                         <span key={index} >{habilidade}<br /></span>
                         ))
                        ) : null}
                    </div>
                </div>     
                <p>Descrição: <span>{props.character.descricao}</span></p>
                <p>Status: <span>{props.character.status}</span></p>
                {props.character.status === "Bloqueado" ?
                    <span className='Description'>Resolva todas as missões de nivel alto</span>
                    :
                    <></>
                }
            </div>
        </>
    )
}