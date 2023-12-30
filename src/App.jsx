import './index.css'
import Game from "./components/Game"
import Form from "./components/NewGameForm"
import useGameCollection from './hooks/useGameCollection'

export default function App() {
  const useGame = useGameCollection()

  return (
    <div id="app">
      <Form addGame={useGame.addGame} label="Biblioteca de Jogos"/>
      <Game games={useGame.games} onRemove={useGame.removeGame}/>
    </div>
  )
}