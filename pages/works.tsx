import Head from "next/head"
import path from "path"
import { md2html, mdfile2html } from "@/utils/posts"

const siteTitle = "Works"
const description = "Where keguigong's thoughts were built"
const title = siteTitle + " - " + description
const md = `
# Under Construction... 🚧
`

export default function Works({ content }: any) {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            description
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  )
}

export async function getStaticProps() {
  const content = md2html(md)
  return {
    props: {
      content
    }
  }
}
