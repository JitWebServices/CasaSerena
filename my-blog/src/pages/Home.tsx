import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

// 1) Declare your Post shape
interface Post {
  id: number
  title: string
  author: string
  date: string
  tags: string[]
  excerpt: string
  slug: string
}

// 2) Give `posts` an explicit type
const posts: Post[] = [
  {
    id: 1,
    title: 'Blog Title That Is Very Insightful',
    author: 'Marcos Vega',
    date: 'July 10, 2025',
    tags: ['Credit Cards', 'Personal Finance', 'Debt Consolidation'],
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem condimentum, tempus nisi nec, vehicula arcu…',
    slug: '/blog/1',
  },
  {
    id: 2,
    title: 'Another Insightful Post',
    author: 'Marcos Vega',
    date: 'July 9, 2025',
    tags: ['Investing', 'Stocks'],
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium…',
    slug: '/blog/2',
  },
]

const Home: React.FC = () => {
  return (
    <>
      {/* — Hero ABOVE the nav — */}
      <header className="text-center py-16 bg-white">
        <h1 className="text-8xl font-met text-gray-900 leading-tight">
          MaisonSerene
        </h1>
        <p className="mt-4 text-3xl font-met text-gray-700">
          Financial Advising
        </p>
      </header>

      {/* — Nav sits directly below — */}
      <Navbar />

      {/* — only _this_ wrapper has the soft background — */}
      <div className="bg-gray-50"> {/* or: bg-gradient-to-b from-gray-50 to-gray-100 */}
        {/* removed mt-8 so this starts flush beneath the navbar */}
        <div className="max-w-5xl mx-auto bg-white p-12 shadow-lg">
          <main className="space-y-20">
            {posts.map((post) => (
              <article key={post.id}>
                {/* …your post markup unchanged… */}
              </article>
            ))}
          </main>
        </div>
      </div>
    </>
  )
}

export default Home
