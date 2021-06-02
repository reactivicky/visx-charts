import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import ChartComponent from '../Chart/Chart'
import update from 'immutability-helper'
import classes from './Dnd.module.css'

const DndContainer = () => {
	const [chart, setChart] = useState({
		a: { top: 0, left: 0 },
	})

	const moveBox = useCallback(
		(id, left, top) => {
			setChart(
				update(chart, {
					[id]: {
						$merge: { left, top },
					},
				})
			)
		},
		[chart, setChart]
	)

	const [, drop] = useDrop(
		() => ({
			accept: 'CHART',
			drop(item, monitor) {
				const delta = monitor.getDifferenceFromInitialOffset()
				const left = Math.round(item.left + delta.x)
				const top = Math.round(item.top + delta.y)
				moveBox(item.id, left, top)
				return undefined
			},
		}),
		[moveBox]
	)

	return (
		<div ref={drop} className={classes.Dnd}>
			{Object.keys(chart).map((key) => {
				const { left, top } = chart[key]
				return <ChartComponent key={key} id={key} left={left} top={top} />
			})}
		</div>
	)
}

export default DndContainer
