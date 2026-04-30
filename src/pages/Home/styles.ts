import styled, { keyframes } from 'styled-components'
import firstBg from '../../assets/images/first_bg.jpg'

const scanMove = keyframes`
  from { background-position: 0 0; }
  to   { background-position: 0 4px; }
`

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
  background-color: rgba(0, 0, 0, 0.8);
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
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 20%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.18) 0px,
      rgba(0, 0, 0, 0.18) 1px,
      transparent 1px,
      transparent 4px
    );
    animation: ${scanMove} 2s linear infinite;
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 55%,
      rgba(229, 57, 53, 0.18) 100%
    );
    z-index: 3;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }
`

export const TextContent = styled.div`
  max-width: 480px;
`

export const Greeting = styled.h1`
  font-size: 42px;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 800;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const RedName = styled.span`
  color: #e53935;
  text-shadow: 0 0 22px rgba(229, 57, 53, 0.45);
`

export const RoleText = styled.h2`
  font-size: 22px;
  color: #bbb;
  margin-bottom: 28px;
  font-weight: 500;
  letter-spacing: 0.5px;

  @media (max-width: 767px) {
    font-size: 16px;
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
  padding: 12px 30px;
  background-color: #e53935;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid #e53935;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #e53935;
    transform: translateY(-2px);
    box-shadow: 0 0 18px rgba(229, 57, 53, 0.4);
  }
`

export const SecondaryButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: transparent;
  color: #aaa;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: #e53935;
    color: #e53935;
    transform: translateY(-2px);
    box-shadow: 0 0 18px rgba(229, 57, 53, 0.2);
  }
`
