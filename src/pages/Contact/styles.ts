import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 48px;
`

export const SocialSection = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 767px) {
    gap: 32px;
  }
`

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;

  svg {
    font-size: 72px;

    @media (max-width: 767px) {
      font-size: 48px;
    }
  }

  &:hover {
    transform: translateY(-6px);
    color: #ccc;
  }
`

export const SocialLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const Divider = styled.hr`
  width: 60%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`

export const TechSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const TechTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;

  @media (max-width: 767px) {
    gap: 18px;
  }
`

export const TechItem = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ $color }) => $color};
  transition: transform 0.3s ease;

  svg {
    font-size: 36px;
  }

  &:hover {
    transform: translateY(-4px);
  }
`

export const TechName = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.5px;
`
