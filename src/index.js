import React from 'react'
import ReactDOM from 'react-dom'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers'
import './index.css'
import App from './App'

const engine = new Styletron()
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<StyletronProvider value={engine}>
		<BaseProvider theme={LightTheme}>
			<Provider store={store}>
				<App />
			</Provider>
		</BaseProvider>
	</StyletronProvider>,
	document.getElementById('root')
)
