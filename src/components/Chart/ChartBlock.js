import {
	Axis,
	Grid,
	BarSeries,
	LineSeries,
	AreaSeries,
	BarGroup,
	XYChart,
	Tooltip,
} from '@visx/xychart'
import { useSelector } from 'react-redux'
import classes from './ChartBlock.module.css'

const data1 = [
	{ x: '2020-01-01', y: 50 },
	{ x: '2020-01-02', y: 10 },
	{ x: '2020-01-03', y: 20 },
]

const data2 = [
	{ x: '2020-01-01', y: 30 },
	{ x: '2020-01-02', y: 40 },
	{ x: '2020-01-03', y: 80 },
]

const accessors = (isVertical) => ({
	xAccessor: (d) => (isVertical ? d.x : d.y),
	yAccessor: (d) => (isVertical ? d.y : d.x),
})

const ChartBlock = ({ width, height }) => {
	const title = useSelector((state) => state.title)
	const xTitle = useSelector((state) => state.xTitle)
	const yTitle = useSelector((state) => state.yTitle)
	const chartType = useSelector((state) => state.chartType)
	const orientation = useSelector((state) => state.orientation)

	const isVertical = orientation === 'vertical'

	let series
	switch (chartType[0].label) {
		case 'bar':
			series = (
				<BarGroup>
					<BarSeries dataKey='Data 1' data={data1} {...accessors(isVertical)} />
					<BarSeries dataKey='Data 2' data={data2} {...accessors(isVertical)} />
				</BarGroup>
			)
			break
		case 'line':
			series = (
				<>
					<LineSeries
						dataKey='Data 1'
						data={data1}
						{...accessors(isVertical)}
					/>
					<LineSeries
						dataKey='Data 2'
						data={data2}
						{...accessors(isVertical)}
					/>
				</>
			)
			break
		case 'area':
			series = (
				<>
					<AreaSeries
						dataKey='Data 1'
						opacity={0.8}
						data={data1}
						{...accessors(isVertical)}
					/>
					<AreaSeries
						dataKey='Data 2'
						opacity={0.8}
						data={data2}
						{...accessors(isVertical)}
					/>
				</>
			)
			break
		default:
			series = (
				<BarGroup>
					<BarSeries dataKey='Data 1' data={data1} {...accessors(isVertical)} />
					<BarSeries dataKey='Data 2' data={data2} {...accessors(isVertical)} />
				</BarGroup>
			)
			break
	}

	return (
		<>
			{title && <h3 className={classes.ChartTitle}>{title}</h3>}
			<XYChart
				height={title ? height - 30 : height}
				width={width}
				xScale={isVertical ? { type: 'band' } : { type: 'linear' }}
				yScale={isVertical ? { type: 'linear' } : { type: 'band' }}
			>
				<Axis
					orientation={isVertical ? 'bottom' : 'left'}
					hideTicks
					label={xTitle}
					numTicks={4}
				/>

				<Axis
					orientation={isVertical ? 'left' : 'bottom'}
					label={yTitle}
					numTicks={4}
					hideTicks
				/>

				<Grid columns={!isVertical} rows={isVertical} numTicks={4} />

				{series}

				<Tooltip
					snapTooltipToDatumX
					snapTooltipToDatumY
					showVerticalCrosshair={isVertical}
					showHorizontalCrosshair={!isVertical}
					showSeriesGlyphs
					renderTooltip={({ tooltipData, colorScale }) => (
						<div>
							<div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
								{tooltipData.nearestDatum.key}
							</div>
							{isVertical
								? accessors(isVertical).xAccessor(
										tooltipData.nearestDatum.datum
								  )
								: accessors(isVertical).yAccessor(
										tooltipData.nearestDatum.datum
								  )}
							{', '}
							{isVertical
								? accessors(isVertical).yAccessor(
										tooltipData.nearestDatum.datum
								  )
								: accessors(isVertical).xAccessor(
										tooltipData.nearestDatum.datum
								  )}
						</div>
					)}
				/>
			</XYChart>
		</>
	)
}

export default ChartBlock
