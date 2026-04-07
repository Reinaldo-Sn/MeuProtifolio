import { ReactNode } from 'react'
import { Wrapper, ContentBox } from './styles'

interface PageLayoutProps {
  background: string
  children: ReactNode
}

function PageLayout({ background, children }: PageLayoutProps) {
  return (
    <Wrapper $background={background}>
      <ContentBox>{children}</ContentBox>
    </Wrapper>
  )
}

export default PageLayout
