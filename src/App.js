import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Sidebar from './components/Sidebar/Sidebar'
import DndContainer from './components/Dnd/Dnd'
import './App.css'

function App() {
	return (
		<div className='app'>
			<Sidebar />
			<DndProvider backend={HTML5Backend}>
				<DndContainer />
			</DndProvider>
		</div>
	)
}

export default App
