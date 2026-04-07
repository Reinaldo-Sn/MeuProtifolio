import styled from 'styled-components'

export const PageTitle = styled.h2`
  font-size: 36px;
  color: #fff;
  font-weight: 800;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ffffff;
    margin-top: 12px;
  }
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: stretch;
  height: calc(720px - 140px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    height: auto;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageColumn = styled.div`
  margin-top: -60px;
  margin-right: -60px;
  margin-bottom: -80px;
  overflow: hidden;

  @media (max-width: 1024px) {
    margin: 0;
  }
`

export const AboutImage = styled.div`
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Description = styled.p`
  color: #ddd;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 18px;
`

export const PrimaryButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 13px 32px;
  background-color: #ffffff;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #cccccc;
    transform: translateY(-2px);
    color: #000;
  }
`
