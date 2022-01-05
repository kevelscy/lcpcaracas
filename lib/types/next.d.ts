import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
  NextPage
} from 'next'
import type { AppProps } from 'next/app'
import { ComponentType, ReactElement, ReactNode } from 'react'

declare module 'next' {
  // eslint-disable-next-line no-unused-vars
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode
  }
}

declare module 'next/app' {
  // eslint-disable-next-line no-unused-vars
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
  }
}

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}
