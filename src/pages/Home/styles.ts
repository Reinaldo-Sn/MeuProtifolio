import styled, { keyframes } from 'styled-components'
import firstBg from '../../assets/images/first_bg.jpg'

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const HomeWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url(${firstBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-left: 280px;
  padding-top: 80px;

  @media (max-width: 1024px) {
    padding-left: 0;
    padding-top: 60px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`

export const ContentBox = styled.div`
  width: calc(100% - 40px);
  height: 720px;
  margin-left: 40px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px 40px 80px;

  @media (max-width: 1024px) {
    width: 100%;
    height: calc(100vh - 60px);
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 30px 20px;
    overflow-y: auto;
    margin: 0;
  }
`

export const AuthorImage = styled.div`
  flex-shrink: 0;

  img {
    width: 220px;
    height: 220px;
    border-radius: 20%;
    object-fit: cover;
    border: 4px solid #ffffff;
  }

  @media (max-width: 1024px) {
    img {
      width: 160px;
      height: 160px;
    }
  }
`

export const TextContent = styled.div`
  max-width: 480px;
`

export const Greeting = styled.h1`
  font-size: 42px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 800;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: #ddd;
  margin-bottom: 35px;
  line-height: 1.8;
  max-width: 480px;
  animation: ${fadeSlideUp} 0.8s ease forwards;
  animation-delay: 1.5s;
  opacity: 0;

  @media (max-width: 1024px) {
    margin: 0 auto 35px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

export const PrimaryButton = styled.a`
  display: inline-block;
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

export const SecondaryButton = styled.a`
  display: inline-block;
  padding: 13px 32px;
  background-color: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ffffff;
    color: #ffffff;
    transform: translateY(-2px);
  }
`
