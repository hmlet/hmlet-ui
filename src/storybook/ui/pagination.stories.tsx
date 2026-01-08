import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../components/ui/pagination'

type PaginationStoryArgs = React.ComponentProps<typeof Pagination> & {
  totalPages?: number
  initialPage?: number
  siblingCount?: 0 | 1 | 2
  showEdges?: boolean
  pageLinkSize?: React.ComponentProps<typeof PaginationLink>['size']

  onPageChange?: (page: number) => void
  onLinkClick?: (href: string) => void
}

function clampPage(page: number, totalPages: number) {
  return Math.min(Math.max(page, 1), totalPages)
}

function makeRange(from: number, to: number) {
  const out: number[] = []
  for (let i = from; i <= to; i += 1) out.push(i)
  return out
}

function getPaginationModel({
  page,
  totalPages,
  siblingCount,
  showEdges,
}: {
  page: number
  totalPages: number
  siblingCount: number
  showEdges: boolean
}): Array<number | 'ellipsis'> {
  if (totalPages <= 0) return []
  if (totalPages <= 7 + siblingCount * 2) return makeRange(1, totalPages)

  const leftSibling = Math.max(page - siblingCount, 1)
  const rightSibling = Math.min(page + siblingCount, totalPages)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  const items: Array<number | 'ellipsis'> = []

  if (showEdges) {
    items.push(1)
  }

  if (showLeftEllipsis) {
    items.push('ellipsis')
  } else {
    const end = showEdges ? 2 : Math.min(3, totalPages)
    items.push(...makeRange(1, end).filter(n => (showEdges ? n !== 1 : true)))
  }

  const start = Math.max(leftSibling, showEdges ? 2 : 1)
  const end = Math.min(rightSibling, showEdges ? totalPages - 1 : totalPages)
  items.push(...makeRange(start, end))

  if (showRightEllipsis) {
    items.push('ellipsis')
  } else {
    const startTail = showEdges ? totalPages - 1 : Math.max(totalPages - 2, 1)
    items.push(
      ...makeRange(startTail, totalPages).filter(n =>
        showEdges ? n !== totalPages : true,
      ),
    )
  }

  if (showEdges) {
    items.push(totalPages)
  }

  // De-dupe adjacent duplicates (can occur with tiny totals)
  return items.filter((item, index) => item !== items[index - 1])
}

function PaginationDemo(args: PaginationStoryArgs) {
  const totalPages = args.totalPages ?? 10
  const siblingCount = args.siblingCount ?? 1
  const showEdges = args.showEdges ?? true
  const pageLinkSize = args.pageLinkSize ?? 'icon'

  const [page, setPage] = React.useState(() =>
    clampPage(args.initialPage ?? 1, totalPages),
  )

  React.useEffect(() => {
    setPage(prev => clampPage(prev, totalPages))
  }, [totalPages])

  const model = getPaginationModel({
    page,
    totalPages,
    siblingCount,
    showEdges,
  })

  return (
    <div className="grid gap-3">
      <div className="text-sm text-muted-foreground">Page: {page}</div>
      <Pagination {...args}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#prev"
              aria-disabled={page === 1}
              tabIndex={page === 1 ? -1 : 0}
              onClick={event => {
                event.preventDefault()
                args.onLinkClick?.('#prev')
                if (page === 1) return
                const next = page - 1
                setPage(next)
                args.onPageChange?.(next)
              }}
            />
          </PaginationItem>

          {model.map((item, index) => {
            if (item === 'ellipsis') {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }

            const pageNumber = item
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={`#page-${pageNumber}`}
                  size={pageLinkSize}
                  isActive={pageNumber === page}
                  onClick={event => {
                    event.preventDefault()
                    args.onLinkClick?.(`#page-${pageNumber}`)
                    setPage(pageNumber)
                    args.onPageChange?.(pageNumber)
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem>
            <PaginationNext
              href="#next"
              aria-disabled={page === totalPages}
              tabIndex={page === totalPages ? -1 : 0}
              onClick={event => {
                event.preventDefault()
                args.onLinkClick?.('#next')
                if (page === totalPages) return
                const next = page + 1
                setPage(next)
                args.onPageChange?.(next)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

const meta: Meta<PaginationStoryArgs> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'totalPages',
        'initialPage',
        'siblingCount',
        'showEdges',
        'pageLinkSize',
        'className',
        'onPageChange',
        'onLinkClick',
      ],
    },
    docs: {
      description: {
        component:
          'Pagination primitives. The component set is presentational; this Storybook file includes a small stateful demo to illustrate typical usage.',
      },
    },
  },
  argTypes: {
    totalPages: {control: {type: 'number', min: 1, step: 1}},
    initialPage: {control: {type: 'number', min: 1, step: 1}},
    siblingCount: {options: [0, 1, 2], control: {type: 'inline-radio'}},
    showEdges: {control: 'boolean'},
    pageLinkSize: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: {type: 'select'},
    },
    onPageChange: {action: 'onPageChange'},
    onLinkClick: {action: 'onLinkClick'},
  },
  args: {
    totalPages: 10,
    initialPage: 1,
    siblingCount: 1,
    showEdges: true,
    pageLinkSize: 'icon',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Usage',
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const Interactive: Story = {
  render: args => <PaginationDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText(/page: 1/i)).toBeInTheDocument()

    await userEvent.click(canvas.getByRole('link', {name: '2'}))
    await expect(canvas.getByText(/page: 2/i)).toBeInTheDocument()
    await expect(canvas.getByRole('link', {name: '2'})).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(canvas.getByRole('link', {name: /next/i}))
    await expect(canvas.getByText(/page: 3/i)).toBeInTheDocument()
  },
}

export const WithEllipsis: Story = {
  args: {
    totalPages: 20,
    initialPage: 10,
    siblingCount: 1,
    showEdges: true,
  },
  render: args => <PaginationDemo {...args} />,
}

export const LinkSizes: Story = {
  render: () => (
    <div className="grid gap-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="sm" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="sm">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="default" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="default">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  ),
}
