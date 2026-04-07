import styled from 'styled-components'

export const PageTitle = styled.h2`
  font-size: 36px;
  color: #fff;
  font-weight: 800;
  margin-bottom: 40px;
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

export const LoadingText = styled.p`
  color: #aaa;
  font-size: 15px;
`

export const EmptyText = styled.p`
  color: #aaa;
  font-size: 15px;
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
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ProjectName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-transform: capitalize;
`

export const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

export const ProjectLanguage = styled.span<{ $color: string }>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
  }
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`

export const IconLink = styled.a`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding-bottom: 2px;
  transition: border-color 0.3s ease, color 0.3s ease;

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`
