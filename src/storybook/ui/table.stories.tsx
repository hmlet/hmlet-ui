import type {Meta, StoryObj} from '@storybook/react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'

const meta = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl rounded-md border">
      <Table>
        <TableCaption>A sample table.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Invoice #001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$100.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Invoice #002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
