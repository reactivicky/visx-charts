import { useSelector, useDispatch } from 'react-redux'
import { Input, SIZE } from 'baseui/input'
import { Select } from 'baseui/select'
import { Block } from 'baseui/block'
import { RadioGroup, Radio, ALIGN } from 'baseui/radio'
import classes from './Sidebar.module.css'

const Sidebar = () => {
	const title = useSelector((state) => state.title)
	const xTitle = useSelector((state) => state.xTitle)
	const yTitle = useSelector((state) => state.yTitle)
	const chartType = useSelector((state) => state.chartType)
	const orientation = useSelector((state) => state.orientation)

	const dispatch = useDispatch()

	const handleTitlesChange = (e, type) => {
		switch (type) {
			case 'title':
				dispatch({
					type: 'title',
					payload: e.target.value,
				})
				break
			case 'xtitle':
				dispatch({
					type: 'xtitle',
					payload: e.target.value,
				})
				break
			case 'ytitle':
				dispatch({
					type: 'ytitle',
					payload: e.target.value,
				})
				break
			default:
				break
		}
	}

	const handleChartTypeChange = (val) => {
		dispatch({
			type: 'chartType',
			payload: val,
		})
	}

	const handleOrientationChange = (val) => {
		dispatch({
			type: 'orientation',
			payload: val,
		})
	}

	return (
		<div className={classes.Sidebar}>
			<h2 className={classes.SidebarTitle}>Chart Settings</h2>

			<Block marginBottom='20px'>
				<p>Chart Title</p>
				<Input
					value={title}
					size={SIZE.mini}
					onChange={(e) => handleTitlesChange(e, 'title')}
					placeholder='Chart Title'
					clearOnEscape
				/>
			</Block>
			<Block marginBottom='20px'>
				<p>X Axis Title</p>
				<Input
					value={xTitle}
					size={SIZE.mini}
					onChange={(e) => handleTitlesChange(e, 'xtitle')}
					placeholder='X Axis Title'
					clearOnEscape
				/>
			</Block>
			<Block marginBottom='20px'>
				<p>Y Axis Title</p>
				<Input
					value={yTitle}
					size={SIZE.mini}
					onChange={(e) => handleTitlesChange(e, 'ytitle')}
					placeholder='Y Axis Title'
					clearOnEscape
				/>
			</Block>

			<Block marginBottom='20px'>
				<p>Chart Type</p>
				<Select
					options={[
						{ label: 'bar', id: 0 },
						{ label: 'line', id: 1 },
						{ label: 'area', id: 2 },
					]}
					clearable={false}
					size={SIZE.mini}
					value={chartType}
					placeholder='Select chart type'
					onChange={(params) => handleChartTypeChange(params.value)}
				/>
			</Block>
			<Block marginBottom='20px'>
				<p>Chart Orientation</p>
				<RadioGroup
					value={orientation}
					onChange={(e) => handleOrientationChange(e.currentTarget.value)}
					name='number'
					align={ALIGN.vertical}
				>
					<Radio value='vertical'>Vertical</Radio>
					<Radio value='horizontal'>Horizontal</Radio>
				</RadioGroup>
			</Block>
		</div>
	)
}

export default Sidebar
