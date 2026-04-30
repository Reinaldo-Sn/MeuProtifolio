import styled from 'styled-components'

export const PageTitle = styled.h2`
  font-size: 36px;
  color: #e53935;
  text-shadow: 0 0 22px rgba(229, 57, 53, 0.45);
  font-weight: 800;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #e53935;
    margin-top: 12px;
    box-shadow: 0 0 8px rgba(229, 57, 53, 0.5);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(229, 57, 53, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(229, 57, 53, 0.6);
    box-shadow: 0 0 22px rgba(229, 57, 53, 0.12);
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const ProjectImage = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
`

export const ProjectBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 14px;
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ProjectName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`

export const ProjectDescription = styled.p`
  font-size: 13px;
  color: #aaa;
  line-height: 1.6;
`

export const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

export const LangIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const LangIcon = styled.span<{ $color: string }>`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${({ $color }) => $color};
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2px;
  transition: all 0.25s ease;

  svg {
    font-size: 13px;
    flex-shrink: 0;
  }

  &:hover {
    color: #e53935;
    border-color: #e53935;
  }
`
