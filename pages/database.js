import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  // return (
  //   <MDXLayoutRenderer
  //     layout={frontMatter.layout || DEFAULT_LAYOUT}
  //     mdxSource={mdxSource}
  //     frontMatter={frontMatter}
  //   />
  // )
  return (
    <>
      <label className=''>M Mโดยที่การยอมรับศักดิ์ศรีแต่กำเนิด และสิทธิที่เท่าเทียมกันและที่ไม่อาจเพิกถอนได้ของสมาชิกทั้งมวลแห่งครอบครัวมนุษยชาติ</label>
    </>
  )
}
