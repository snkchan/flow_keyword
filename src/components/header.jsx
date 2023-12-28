import styled from "styled-components"
import { color, flexAlign } from "../styles/themes"

const Header = () => {
  return (
    <S.Div_MainWrap>
      <S.Img_LogoImg src="logo.png" />
      <S.H1_LogoTitle>OASIS</S.H1_LogoTitle>
    </S.Div_MainWrap>
  )
}
export default Header

const Div_MainWrap = styled.div`
  width: 100vw;
  height: 5rem;
  background-color: ${color.yellow[900]};
  ${flexAlign.justifyCenter}
  ${flexAlign.alignCenter}
  position: fixed;
`
const Img_LogoImg = styled.img`
  width: 5rem;
  aspect-ratio: 1/1;
`
const H1_LogoTitle = styled.h1``

const S = {
  Div_MainWrap,
  Img_LogoImg,
  H1_LogoTitle,
}
