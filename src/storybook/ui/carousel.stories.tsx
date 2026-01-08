import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'
import {useArgs} from '@storybook/preview-api'

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel'
import {Button} from '../../components/ui/button'
import {cn} from '../../components/ui/utils'

type CarouselStoryArgs = Omit<
  React.ComponentProps<typeof Carousel>,
  'opts' | 'plugins' | 'setApi' | 'children'
> & {
  slideCount: number
  containerWidth: 'sm' | 'md' | 'lg' | 'full'
  slideHeight: 'sm' | 'md' | 'lg'
  slideSize: 'full' | '1/2' | '1/3'
  spacing: 'none' | 'sm' | 'md' | 'lg'
  showArrows: boolean
  showControls: boolean

  scrollToIndex?: number

  loop?: boolean
  dragFree?: boolean
  skipSnaps?: boolean
  containScroll?: 'trimSnaps' | 'keepSnaps'
  align?: 'start' | 'center' | 'end'
  slidesToScroll?: number
  startIndex?: number
  duration?: number

  onApi?: (api: CarouselApi) => void
  onInit?: () => void
  onReInit?: () => void
  onSelect?: (selectedIndex: number) => void
  onScroll?: () => void
  onSettle?: () => void
  onSlidesInView?: (slides: number[]) => void

  onMethodPrev?: () => void
  onMethodNext?: () => void
  onMethodScrollTo?: (index: number) => void
  onMethodReInit?: () => void
}

const meta: Meta<CarouselStoryArgs> = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'orientation',
        'slideCount',
        'containerWidth',
        'slideHeight',
        'slideSize',
        'spacing',
        'showArrows',
        'showControls',
        'scrollToIndex',
        'loop',
        'dragFree',
        'skipSnaps',
        'containScroll',
        'align',
        'slidesToScroll',
        'startIndex',
        'duration',
        'onApi',
        'onInit',
        'onReInit',
        'onSelect',
        'onScroll',
        'onSettle',
        'onSlidesInView',
        'onMethodPrev',
        'onMethodNext',
        'onMethodScrollTo',
        'onMethodReInit',
        'className',
        'tabIndex',
      ],
    },
    docs: {
      description: {
        component:
          'Carousel built on top of `embla-carousel-react`. Stories expose common Embla options (`opts`) via controls and log Embla events/method calls as Storybook actions.',
      },
    },
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {type: 'inline-radio'},
    },
    slideCount: {control: {type: 'number', min: 1, max: 12, step: 1}},
    containerWidth: {
      options: ['sm', 'md', 'lg', 'full'],
      control: {type: 'inline-radio'},
    },
    slideHeight: {
      options: ['sm', 'md', 'lg'],
      control: {type: 'inline-radio'},
    },
    slideSize: {
      options: ['full', '1/2', '1/3'],
      control: {type: 'inline-radio'},
    },
    spacing: {
      options: ['none', 'sm', 'md', 'lg'],
      control: {type: 'inline-radio'},
      description:
        'Spacing between slides (implemented via `CarouselContent` negative margin and `CarouselItem` padding).',
    },
    showArrows: {control: 'boolean'},
    showControls: {control: 'boolean'},

    scrollToIndex: {
      control: {type: 'number', min: 0, max: 11, step: 1},
      description: 'Used by the “Scroll to” control button.',
    },

    loop: {control: 'boolean'},
    dragFree: {control: 'boolean'},
    skipSnaps: {control: 'boolean'},
    containScroll: {
      options: [undefined, 'trimSnaps', 'keepSnaps'],
      control: {type: 'select'},
    },
    align: {
      options: [undefined, 'start', 'center', 'end'],
      control: {type: 'select'},
    },
    slidesToScroll: {
      control: {type: 'number', min: 1, max: 6, step: 1},
    },
    startIndex: {
      control: {type: 'number', min: 0, max: 11, step: 1},
    },
    duration: {
      control: {type: 'number', min: 0, max: 60, step: 1},
      description: 'Scroll animation duration (Embla option).',
    },

    onApi: {action: 'onApi'},
    onInit: {action: 'onInit'},
    onReInit: {action: 'onReInit'},
    onSelect: {action: 'onSelect'},
    onScroll: {action: 'onScroll'},
    onSettle: {action: 'onSettle'},
    onSlidesInView: {action: 'onSlidesInView'},
    onMethodPrev: {action: 'onMethodPrev'},
    onMethodNext: {action: 'onMethodNext'},
    onMethodScrollTo: {action: 'onMethodScrollTo'},
    onMethodReInit: {action: 'onMethodReInit'},
    className: {control: 'text'},
    tabIndex: {
      control: {type: 'number'},
      description:
        'Make the carousel focusable to try arrow key navigation (handled on `onKeyDownCapture`).',
    },
  },
  args: {
    orientation: 'horizontal',
    slideCount: 5,
    containerWidth: 'md',
    slideHeight: 'md',
    slideSize: 'full',
    spacing: 'md',
    showArrows: true,
    showControls: true,
    scrollToIndex: 0,
    loop: false,
    dragFree: false,
    skipSnaps: false,
    align: 'start',
    slidesToScroll: 1,
    startIndex: 0,
    duration: 25,
    tabIndex: 0,
  },
}

export default meta

type Story = StoryObj<CarouselStoryArgs>

function getContainerWidthClass(width: CarouselStoryArgs['containerWidth']) {
  switch (width) {
    case 'sm':
      return 'max-w-sm'
    case 'md':
      return 'max-w-md'
    case 'lg':
      return 'max-w-lg'
    case 'full':
    default:
      return 'max-w-none'
  }
}

function getSlideHeightClass(height: CarouselStoryArgs['slideHeight']) {
  switch (height) {
    case 'sm':
      return 'h-28'
    case 'lg':
      return 'h-56'
    case 'md':
    default:
      return 'h-40'
  }
}

function getSlideSizeClass(size: CarouselStoryArgs['slideSize']) {
  switch (size) {
    case '1/2':
      return 'basis-1/2'
    case '1/3':
      return 'basis-1/3'
    case 'full':
    default:
      return 'basis-full'
  }
}

function getVerticalViewportHeightClass(
  height: CarouselStoryArgs['slideHeight'],
  slideSize: CarouselStoryArgs['slideSize'],
) {
  // Embla vertical (axis: 'y') needs the viewport to have a height.
  // When `basis-full`, each slide is full viewport height, so keep the viewport modest.
  // When smaller slide sizes are used, make the viewport taller to show multiple slides.
  const isFull = slideSize === 'full'

  if (height === 'sm') return isFull ? 'h-72' : 'h-96'
  if (height === 'lg') return isFull ? 'h-96' : 'h-[32rem]'
  return isFull ? 'h-80' : 'h-[28rem]'
}

function getSpacingClasses(spacing: CarouselStoryArgs['spacing']) {
  switch (spacing) {
    case 'none':
      return {
        contentHorizontal: '-ml-0',
        contentVertical: '-mt-0',
        itemHorizontal: 'pl-0',
        itemVertical: 'pt-0',
      }
    case 'sm':
      return {
        contentHorizontal: '-ml-2',
        contentVertical: '-mt-2',
        itemHorizontal: 'pl-2',
        itemVertical: 'pt-2',
      }
    case 'lg':
      return {
        contentHorizontal: '-ml-6',
        contentVertical: '-mt-6',
        itemHorizontal: 'pl-6',
        itemVertical: 'pt-6',
      }
    case 'md':
    default:
      return {
        contentHorizontal: '-ml-4',
        contentVertical: '-mt-4',
        itemHorizontal: 'pl-4',
        itemVertical: 'pt-4',
      }
  }
}

type CarouselDemoProps = CarouselStoryArgs & {
  onScrollToIndexChange?: (nextIndex: number) => void
}

function CarouselDemo(storyArgs: CarouselDemoProps) {
  const {
    slideCount,
    containerWidth,
    slideHeight,
    slideSize,
    spacing,
    showArrows,
    showControls,
    scrollToIndex,
    loop,
    dragFree,
    skipSnaps,
    containScroll,
    align,
    slidesToScroll,
    startIndex,
    duration,
    onApi,
    onInit,
    onReInit,
    onSelect,
    onScroll,
    onSettle,
    onSlidesInView,
    onMethodPrev,
    onMethodNext,
    onMethodScrollTo,
    onMethodReInit,
    className,
    orientation,
    tabIndex,
    ...rest
  } = storyArgs

  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)

  const opts = React.useMemo(() => {
    return {
      loop,
      dragFree,
      skipSnaps,
      containScroll,
      align,
      slidesToScroll,
      startIndex,
      duration,
    }
  }, [
    align,
    containScroll,
    dragFree,
    duration,
    loop,
    skipSnaps,
    slidesToScroll,
    startIndex,
  ])

  React.useEffect(() => {
    if (!api) return
    onApi?.(api)

    // Ensure initial state is in sync.
    setSelectedIndex(api.selectedScrollSnap())
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())

    const handleInit = () => onInit?.()
    const handleReInit = () => onReInit?.()
    const handleSelect = () => {
      const index = api.selectedScrollSnap()
      setSelectedIndex(index)
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
      onSelect?.(index)
    }
    const handleScroll = () => onScroll?.()
    const handleSettle = () => onSettle?.()
    const handleSlidesInView = () => onSlidesInView?.(api.slidesInView())

    api.on('init', handleInit)
    api.on('reInit', handleReInit)
    api.on('select', handleSelect)
    api.on('scroll', handleScroll)
    api.on('settle', handleSettle)
    api.on('slidesInView', handleSlidesInView)

    // Run once so UI updates even before first event.
    handleSelect()

    return () => {
      api.off('init', handleInit)
      api.off('reInit', handleReInit)
      api.off('select', handleSelect)
      api.off('scroll', handleScroll)
      api.off('settle', handleSettle)
      api.off('slidesInView', handleSlidesInView)
    }
  }, [
    api,
    onApi,
    onInit,
    onReInit,
    onScroll,
    onSelect,
    onSettle,
    onSlidesInView,
  ])

  const widthClass = getContainerWidthClass(containerWidth)
  const heightClass = getSlideHeightClass(slideHeight)
  const sizeClass = getSlideSizeClass(slideSize)
  const spacingClasses = getSpacingClasses(spacing)

  const viewportClassName =
    orientation === 'vertical'
      ? cn(getVerticalViewportHeightClass(slideHeight, slideSize), 'w-full')
      : undefined

  const wrapperPadding =
    orientation === 'vertical' ? 'py-12 px-12' : 'py-6 px-12'

  return (
    <div className={cn('w-full', wrapperPadding)}>
      <div className={cn('mx-auto', widthClass)}>
        <Carousel
          {...rest}
          orientation={orientation}
          opts={opts}
          setApi={setApi}
          className={cn('outline-none', className)}
          tabIndex={tabIndex}
        >
          <CarouselContent
            viewportClassName={viewportClassName}
            className={cn(
              orientation === 'horizontal'
                ? spacingClasses.contentHorizontal
                : spacingClasses.contentVertical,
            )}
          >
            {Array.from({length: slideCount}).map((_, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  sizeClass,
                  orientation === 'horizontal'
                    ? spacingClasses.itemHorizontal
                    : spacingClasses.itemVertical,
                )}
              >
                <div
                  className={cn(
                    'flex items-center justify-center rounded-md border bg-card',
                    heightClass,
                  )}
                >
                  Slide {index + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {showArrows ? (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          ) : null}
        </Carousel>

        {showControls ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                api?.scrollPrev()
                onMethodPrev?.()
              }}
              disabled={!api || !canPrev}
            >
              Prev
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                api?.scrollNext()
                onMethodNext?.()
              }}
              disabled={!api || !canNext}
            >
              Next
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const nextIndex =
                  typeof scrollToIndex === 'number'
                    ? Math.max(0, Math.min(scrollToIndex, slideCount - 1))
                    : 0
                api?.scrollTo(nextIndex)
                onMethodScrollTo?.(nextIndex)
                storyArgs.onScrollToIndexChange?.(nextIndex)
              }}
              disabled={!api}
            >
              Scroll to
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                api?.reInit()
                onMethodReInit?.()
              }}
              disabled={!api}
            >
              ReInit
            </Button>

            <div className="text-muted-foreground ml-auto text-sm">
              {api ? `Selected: ${selectedIndex + 1} / ${slideCount}` : '—'}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function CarouselStoryRender(storyArgs: CarouselStoryArgs) {
  const [{scrollToIndex}, updateArgs] = useArgs<{scrollToIndex?: number}>()

  return (
    <CarouselDemo
      {...storyArgs}
      scrollToIndex={scrollToIndex}
      onScrollToIndexChange={nextIndex =>
        updateArgs({scrollToIndex: nextIndex})
      }
    />
  )
}

export const Examples: Story = {
  render: CarouselStoryRender,
}

export const Sizes: Story = {
  args: {
    containerWidth: 'lg',
    slideHeight: 'lg',
    slideSize: '1/2',
    slideCount: 8,
  },
  render: CarouselStoryRender,
}

export const Spacing: Story = {
  args: {
    spacing: 'lg',
    slideSize: '1/3',
    slideCount: 9,
  },
  render: CarouselStoryRender,
}

export const Orientation: Story = {
  args: {
    orientation: 'vertical',
    slideHeight: 'sm',
    containerWidth: 'sm',
    slideCount: 6,
    slideSize: '1/2',
  },
  render: CarouselStoryRender,
}
