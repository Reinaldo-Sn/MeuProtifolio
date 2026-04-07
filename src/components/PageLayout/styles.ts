import styled from 'styled-components'

export const Wrapper = styled.div<{ $background: string }>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 280px;
  padding-top: 80px;
  background-image: url(${({ $background }) => $background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    padding-left: 0;
    padding-top: 60px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`

export const ContentBox = styled.div`
  margin-left: 40px;
  width: calc(100% - 40px);
  height: 720px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 60px 60px 80px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    padding: 24px 20px;
  }
`
