import Container from '../../components/container'
import LayoutBanner from '../../components/layout-banner'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import YourStories from '../../components/your-stories'

export default function Stories({ allPosts }) {
    const yourPosts = allPosts;    

    return (
        <>
            <LayoutBanner>
                <Container>
                    <Head>
                        <title>Stories</title>
                    </Head>
                    <h2 className="mt-16 mb-12 text-5xl font-bold font-roboto leading-tight">
                        Your stories
                    </h2>
                     <div className="flex flex-row justify-start mb-2">
                        <Link href="./drafts"><a className="pr-4 text-gray-600 hover:text-gray-900">Drafts</a></Link>
                        <Link href="./stories"><a className="pr-4 text-gray-900">Published</a></Link>                        
                    </div>
                    <hr className="border-accent-2 mb-4"/>                    
                    {yourPosts.length > 0 && <YourStories posts={yourPosts} />}                    
                </Container>
            </LayoutBanner>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'subtitle',
        'readTime',
        'publication',
    ])

    return {
        props: {
            allPosts,            
        },
    }
}