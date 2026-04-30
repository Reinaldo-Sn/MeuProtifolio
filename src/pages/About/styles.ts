import styled, { keyframes } from 'styled-components'

const inkReveal = keyframes`
  from { clip-path: circle(0% at 50% 50%); }
  to   { clip-path: circle(150% at 50% 50%); }
`

const glitchBefore = keyframes`
  0%, 19.9%, 22.1%, 59.9%, 62.1%, 100% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transform: translate(0);
  }
  20% {
    clip-path: polygon(0 8%, 100% 8%, 100% 28%, 0 28%);
    transform: translate(-8px);
  }
  21% {
    clip-path: polygon(0 8%, 100% 8%, 100% 28%, 0 28%);
    transform: translate(8px);
  }
  60% {
    clip-path: polygon(0 55%, 100% 55%, 100% 72%, 0 72%);
    transform: translate(6px);
  }
  61% {
    clip-path: polygon(0 55%, 100% 55%, 100% 72%, 0 72%);
    transform: translate(-6px);
  }
`

const glitchAfter = keyframes`
  0%, 34.9%, 38.1%, 74.9%, 77.1%, 100% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transform: translate(0);
  }
  35% {
    clip-path: polygon(0 38%, 100% 38%, 100% 58%, 0 58%);
    transform: translate(-6px);
  }
  37% {
    clip-path: polygon(0 38%, 100% 38%, 100% 58%, 0 58%);
    transform: translate(6px);
  }
  75% {
    clip-path: polygon(0 70%, 100% 70%, 100% 83%, 0 83%);
    transform: translate(5px);
  }
  76% {
    clip-path: polygon(0 70%, 100% 70%, 100% 83%, 0 83%);
    transform: translate(-5px);
  }
`

const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`

export const PageTitle = styled.h2`
  font-size: 36px;
  color: #e53935;
  text-shadow: 0 0 22px rgba(229, 57, 53, 0.45);
  font-weight: 800;
  margin-bottom: 50px;
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

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 2px;
  color: #e53935;
  font-weight: 300;
  animation: ${cursorBlink} 0.8s step-end infinite;
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
  justify-content: flex-start;
  overflow-y: auto;
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
  position: relative;
`

export const GlitchLayer = styled.div<{ $imgUrl: string }>`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${({ $imgUrl }) => $imgUrl});
    background-size: cover;
    background-position: center;
  }

  &::before {
    filter: hue-rotate(330deg) saturate(4) opacity(0.85);
    animation: ${glitchBefore} 7s infinite;
  }

  &::after {
    filter: hue-rotate(185deg) saturate(4) opacity(0.85);
    animation: ${glitchAfter} 7s infinite;
    animation-delay: 0.3s;
  }
`

export const BaseImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const AnimatedImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: ${inkReveal} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
