import styled from 'styled-components'

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
