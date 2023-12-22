import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ForgotArea from "@components/login-register/forgot-area";
import SEO from "@components/seo";
import FooterFour from "@layout/footer/footer-4";
import HeaderOne from "@layout/header/header-one";
import Wrapper from "@layout/wrapper";



export default function forgotPassword() {
  return (
    <Wrapper>
      <SEO pageTitle={'Delport'} />
      <HeaderOne headerClass={'header__two menu-sticky white-bg'}/>
      <Breadcrumb title="Forgot Password" subTitle="Forgot Password" />
      <ForgotArea/>
      <FooterFour/>
    </Wrapper>
  )
}