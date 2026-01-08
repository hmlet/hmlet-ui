import type {Meta, StoryObj} from '@storybook/react'
import {Skeleton} from '../../components/ui/skeleton'

type DefaultArgs = {
  avatarSize: number
  line1Width: number
  line2Width: number
  rounded: boolean
  loading: boolean
}

type CardArgs = {
  loading: boolean
  avatar: boolean
  lines: number
  width: number
  height: number
}

type FeedArgs = {
  loading: boolean
  items: number
  avatar: boolean
}

type ProfileArgs = {
  loading: boolean
  avatarSize: number
  showDetails: boolean
}

type TableArgs = {
  loading: boolean
  rows: number
  columns: number
  cellHeight: number
  cellWidth: number
}

const meta: Meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<DefaultArgs> = {
  args: {
    avatarSize: 40,
    line1Width: 160,
    line2Width: 112,
    rounded: true,
    loading: true,
  },
  argTypes: {
    avatarSize: {
      control: {type: 'number', min: 24, max: 80},
      description: 'Avatar size (px)',
    },
    line1Width: {
      control: {type: 'number', min: 40, max: 320},
      description: 'First line width (px)',
    },
    line2Width: {
      control: {type: 'number', min: 40, max: 320},
      description: 'Second line width (px)',
    },
    rounded: {control: 'boolean', description: 'Avatar rounded'},
    loading: {control: 'boolean', description: 'Show skeleton or content'},
  },
  parameters: {
    controls: {
      include: ['avatarSize', 'line1Width', 'line2Width', 'rounded', 'loading'],
    },
    actions: {argTypesRegex: '^on.*'},
  },
  render: ({avatarSize, line1Width, line2Width, rounded, loading}) => (
    <div className="flex items-center gap-3">
      {loading ? (
        <Skeleton
          style={{height: avatarSize, width: avatarSize}}
          className={rounded ? 'rounded-full' : ''}
        />
      ) : (
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: rounded ? '9999px' : '0.5rem',
          }}
        />
      )}
      <div className="space-y-2">
        {loading ? (
          <Skeleton style={{height: 16, width: line1Width}} />
        ) : (
          <div className="font-medium">Default User</div>
        )}
        {loading ? (
          <Skeleton style={{height: 16, width: line2Width}} />
        ) : (
          <div className="text-xs text-muted-foreground">default@hmlet.com</div>
        )}
      </div>
    </div>
  ),
}

export const Card: StoryObj<CardArgs> = {
  args: {
    loading: true,
    avatar: true,
    lines: 3,
    width: 320,
    height: 180,
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Show skeleton or content',
      action: 'toggled',
    },
    avatar: {control: 'boolean', description: 'Show avatar skeleton'},
    lines: {
      control: {type: 'number', min: 1, max: 5},
      description: 'Number of text lines',
    },
    width: {
      control: {type: 'number', min: 200, max: 600},
      description: 'Card width (px)',
    },
    height: {
      control: {type: 'number', min: 100, max: 400},
      description: 'Card height (px)',
    },
  },
  parameters: {
    controls: {include: ['loading', 'avatar', 'lines', 'width', 'height']},
    actions: {argTypesRegex: '^on.*|loading'},
  },
  render: ({loading, avatar, lines, width, height}) => (
    <div
      style={{width, height}}
      className="rounded-xl border bg-card p-6 shadow flex flex-col gap-4 justify-between"
    >
      <div className="flex items-center gap-4">
        {avatar &&
          (loading ? (
            <Skeleton className="h-12 w-12 rounded-full" />
          ) : (
            <img
              src="https://i.pravatar.cc/48"
              alt="avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
          ))}
        <div className="flex-1">
          {loading ? (
            <Skeleton className="h-4 w-32 mb-2" />
          ) : (
            <div className="font-semibold">Jane Doe</div>
          )}
          {loading ? (
            <Skeleton className="h-3 w-20" />
          ) : (
            <div className="text-xs text-muted-foreground">Product Manager</div>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-2">
        {loading ? (
          Array.from({length: lines}).map((_, i) => (
            <Skeleton
              key={i}
              className={`h-3 w-full${i === lines - 1 ? ' w-2/3' : ''}`}
            />
          ))
        ) : (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            aliquam nunc, eget aliquam massa nisl quis neque.
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        {loading ? (
          <Skeleton className="h-8 w-20 rounded" />
        ) : (
          <button className="px-4 py-2 rounded bg-primary text-white">
            Action
          </button>
        )}
        {loading ? (
          <Skeleton className="h-8 w-20 rounded" />
        ) : (
          <button className="px-4 py-2 rounded border">Cancel</button>
        )}
      </div>
      <div className="mt-2">
        <button
          type="button"
          className="text-xs underline text-primary"
          onClick={() => {
            const event = new CustomEvent('storybook:card-toggle-loading')
            window.dispatchEvent(event)
          }}
        >
          Toggle Loading (play)
        </button>
      </div>
    </div>
  ),
  play: async ({canvasElement, args, step, updateArgs}) => {
    // Simulate toggling loading state via button
    const button = canvasElement.querySelector(
      'button.text-xs',
    ) as HTMLButtonElement | null
    if (button) {
      await step('Toggle loading', async () => {
        button.click()
        updateArgs({loading: !args.loading})
      })
    }
  },
}

export const Feed: StoryObj<FeedArgs> = {
  args: {
    loading: true,
    items: 4,
    avatar: true,
  },
  argTypes: {
    loading: {control: 'boolean', description: 'Show skeleton or content'},
    items: {
      control: {type: 'number', min: 1, max: 10},
      description: 'Number of feed items',
    },
    avatar: {control: 'boolean', description: 'Show avatar skeleton'},
  },
  parameters: {
    controls: {include: ['loading', 'items', 'avatar']},
    actions: {argTypesRegex: '^on.*'},
  },
  render: ({loading, items, avatar}) => (
    <div className="space-y-6 max-w-md">
      {Array.from({length: items}).map((_, i) => (
        <div key={i} className="flex gap-3 items-start">
          {avatar &&
            (loading ? (
              <Skeleton className="h-10 w-10 rounded-full" />
            ) : (
              <img
                src={`https://i.pravatar.cc/40?img=${i + 1}`}
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
            ))}
          <div className="flex-1 space-y-2">
            {loading ? (
              <>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </>
            ) : (
              <>
                <div className="font-medium">User {i + 1}</div>
                <div className="text-xs text-muted-foreground">
                  This is a feed item content for user {i + 1}.
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Profile: StoryObj<ProfileArgs> = {
  args: {
    loading: true,
    avatarSize: 56,
    showDetails: true,
  },
  argTypes: {
    loading: {control: 'boolean', description: 'Show skeleton or content'},
    avatarSize: {
      control: {type: 'number', min: 32, max: 96},
      description: 'Avatar size (px)',
    },
    showDetails: {control: 'boolean', description: 'Show name and bio'},
  },
  parameters: {
    controls: {include: ['loading', 'avatarSize', 'showDetails']},
    actions: {argTypesRegex: '^on.*'},
  },
  render: ({loading, avatarSize, showDetails}) => (
    <div className="flex flex-col items-center gap-4 p-6 max-w-xs border rounded-xl bg-card">
      {loading ? (
        <Skeleton
          style={{width: avatarSize, height: avatarSize}}
          className="rounded-full"
        />
      ) : (
        <img
          src="https://i.pravatar.cc/80"
          alt="avatar"
          style={{width: avatarSize, height: avatarSize}}
          className="rounded-full object-cover"
        />
      )}
      {showDetails && (
        <div className="w-full text-center">
          {loading ? (
            <>
              <Skeleton className="h-4 w-24 mx-auto mb-2" />
              <Skeleton className="h-3 w-32 mx-auto" />
            </>
          ) : (
            <>
              <div className="font-semibold">Alex Smith</div>
              <div className="text-xs text-muted-foreground">
                Frontend Developer at Hmlet
              </div>
            </>
          )}
        </div>
      )}
    </div>
  ),
}

export const Table: StoryObj<TableArgs> = {
  args: {
    loading: true,
    rows: 5,
    columns: 4,
    cellHeight: 16,
    cellWidth: 80,
  },
  argTypes: {
    loading: {control: 'boolean', description: 'Show skeleton or content'},
    rows: {
      control: {type: 'number', min: 1, max: 10},
      description: 'Number of rows',
    },
    columns: {
      control: {type: 'number', min: 1, max: 8},
      description: 'Number of columns',
    },
    cellHeight: {
      control: {type: 'number', min: 8, max: 40},
      description: 'Cell height (px)',
    },
    cellWidth: {
      control: {type: 'number', min: 40, max: 200},
      description: 'Cell width (px)',
    },
  },
  parameters: {
    controls: {
      include: ['loading', 'rows', 'columns', 'cellHeight', 'cellWidth'],
    },
    actions: {argTypesRegex: '^on.*'},
  },
  render: ({loading, rows, columns, cellHeight, cellWidth}) => (
    <div className="overflow-x-auto">
      <table className="min-w-full border rounded-lg">
        <thead>
          <tr>
            {Array.from({length: columns}).map((_, col) => (
              <th
                key={col}
                className="px-2 py-2 text-left text-xs font-semibold text-muted-foreground border-b"
              >
                {loading ? (
                  <Skeleton className="h-4 w-16" />
                ) : (
                  `Header ${col + 1}`
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({length: rows}).map((_, row) => (
            <tr key={row}>
              {Array.from({length: columns}).map((_, col) => (
                <td key={col} className="px-2 py-2 border-b">
                  {loading ? (
                    <Skeleton style={{height: cellHeight, width: cellWidth}} />
                  ) : (
                    `Row ${row + 1}, Col ${col + 1}`
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}
