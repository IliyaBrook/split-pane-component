import { ReactElement } from 'react'
import SplitPaneComponent from '../src'
import './App.scss'

 const App = (): ReactElement => {
	return (
		<SplitPaneComponent
			split={'vertical'}
			className="root"
		>
			<div className="fist_elem"><span>1</span></div>
			<div className="second_elem"><span>2</span></div>
		</SplitPaneComponent>
	)
}

export default App