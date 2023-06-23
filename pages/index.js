import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Iframe from 'react-iframe';
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Iframe src="https://www.roodb.id/character-class" id=""
        className=""
        position="absolute"
        display="block"
        width="100%"
        height='980px'
        styles={{ left: 0 }}
      />
    </div>
  )
}
