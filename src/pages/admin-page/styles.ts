import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  background: var(--orange);
  height: 100%;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: var(--brown-dark);
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 24px;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;
  margin-top: 40px;
  width: 100%;
`

export const MenuButton = styled.button`
  background: var(--brown);
  color: var(--text-light);
  padding: 32px 24px;
  border-radius: 24px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: var(--brown-dark);
  }
`
