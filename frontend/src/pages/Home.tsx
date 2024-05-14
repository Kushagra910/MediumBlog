
import {Link} from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>
       <nav className='w-full bg-slate-400'><Navbar name={"kushagra"}/></nav>
      <header className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800 ">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover the Latest News and Insights
            </h1>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
              Stay informed and inspired with our curated selection of featured articles.
            </p>
            <div className="mt-10">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                to="#"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main >
        <section className="py-12 md:py-20 w-11/12 mx-auto">
          <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white shadow-md dark:bg-gray-950">
              <img
                alt="Article Image"
                className="h-48 w-full rounded-t-lg object-cover"
                height="200"
                src="public/diego-ph-fIq0tET6llw-unsplash.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  <Link to="#">The Future of Web Development</Link>
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Explore the latest trends and technologies shaping the future of web development.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md dark:bg-gray-950">
              <img
                alt="Article Image"
                className="h-48 w-full rounded-t-lg object-cover"
                height="200"
                src="public/diego-ph-fIq0tET6llw-unsplash.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  <Link to="#">Mastering React Hooks</Link>
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Dive deep into the power of React Hooks and learn how to leverage them in your projects.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md dark:bg-gray-950">
              <img
                alt="Article Image"
                className="h-48 w-full rounded-t-lg object-cover"
                height="200"
                src="public/diego-ph-fIq0tET6llw-unsplash.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  <Link to="#">The Rise of Serverless Computing</Link>
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Explore the benefits and use cases of serverless computing and how it's transforming the industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-8 dark:bg-gray-800 ">
        <div className="container">
          <div className="grid w-11/12 mx-auto pl-4  grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className="text-lg font-bold">About</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Content</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Community</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Contact</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Blog-web. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}