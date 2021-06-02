import { ParentSize } from '@visx/responsive'
import { useDrag } from 'react-dnd'
import ChartBlock from './ChartBlock'

const style = {
	position: 'absolute',
	width: '500px',
	height: '500px',
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
}

const Chart = ({ id, left, top }) => {
	const [, drag] = useDrag(
		() => ({
			type: 'CHART',
			item: { id, left, top },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[id, left, top]
	)

	return (
		<div ref={drag} style={{ ...style, left, top }}>
			<ParentSize>
				{(parent) => <ChartBlock width={parent.width} height={parent.height} />}
			</ParentSize>
		</div>
	)
}

export default Chart
