import { ReactElement } from 'react'
import './App.scss'
import SplitPaneComponent from '../src/components/SplitPaneComponent/SplitPaneComponent'

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