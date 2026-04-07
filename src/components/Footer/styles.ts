import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 280px;
  right: 0;
  padding: 16px 40px;
  background: transparent;

  @media (max-width: 1024px) {
    left: 0;
  }
`

export const FooterContent = styled.div`
  text-align: center;

  p {
    color: #666;
    font-size: 13px;
  }
`
