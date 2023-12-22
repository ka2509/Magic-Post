import SEO from "@components/seo";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import LoginArea from "@components/login-register/login-area";
import Wrapper from "@layout/wrapper";
import FooterFour from "@layout/footer/footer-4";
import HeaderOne from "@layout/header/header-one";



export default function Login() {
  return (
    <Wrapper>
      <SEO pageTitle={'Delport'} />
      <HeaderOne headerClass={'header__two menu-sticky white-bg'}/>
      <Breadcrumb title="Login" subTitle="Login" />
      <LoginArea />
      <FooterFour/>
    </Wrapper>
  )
}