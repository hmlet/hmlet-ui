import type {Meta, StoryObj} from '@storybook/react'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../../components/ui/chart'
import {Area, AreaChart, CartesianGrid, XAxis, YAxis} from 'recharts'

const meta = {
  title: 'UI/Chart',
  component: ChartExample,
  tags: ['autodocs'],
} satisfies Meta<typeof ChartExample>

export default meta

type Story = StoryObj<typeof meta>

const data = [
  {month: 'Jan', bookings: 120},
  {month: 'Feb', bookings: 98},
  {month: 'Mar', bookings: 160},
  {month: 'Apr', bookings: 140},
  {month: 'May', bookings: 190},
]

const config: ChartConfig = {
  bookings: {
    label: 'Bookings',
    theme: {light: 'var(--chart-1)', dark: 'var(--chart-1)'},
  },
}

function ChartExample() {
  return (
    <div className="w-full max-w-2xl">
      <ChartContainer config={config} className="h-64 w-full">
        <AreaChart data={data} margin={{left: 12, right: 12}}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} width={32} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="bookings"
            stroke="var(--color-bookings)"
            fill="var(--color-bookings)"
            fillOpacity={0.2}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}

export const Default: Story = {
  render: () => <ChartExample />,
}
