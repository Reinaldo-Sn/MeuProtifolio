import { FooterWrapper, FooterContent } from './styles'

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Copyright &copy; {new Date().getFullYear()} Reinaldo Sn. Todos os direitos reservados.</p>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
