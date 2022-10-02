import React,{useContext} from 'react'
import GameContext from '../../context/gameContext'

const SideBar = () => {
  const gameContext = useContext(GameContext);

  const {history} = gameContext.gameState
    
  return (
    <div className='main'>
        <h2>Historiques des jeux</h2>
        <br/>
        {history.slice(0).reverse().map((item, index)=> (<div key={index}>
            <p className='historique'>{item}</p>
            
        </div>))}
    </div>
    
  )
}

export default SideBar