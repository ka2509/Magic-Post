
import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";


export default function Error() {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Not Found'} />
      <h1>Error...</h1>
    </Wrapper>
  )
}