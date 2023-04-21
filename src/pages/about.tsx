import Redirect from "@/components/Redirect"

export default function About() {
    return (
        <>
            <p className="mt-4 w-2xl text-xl text-gray-500">
            In Next.js, you can get the current  information inside the _document.js file by using the getInitialProps method. However, this method is not available in _document.tsx file since a special file used for server-side rendering and is not a page component.
            </p>
            <p className="mt-4 w-2xl text-xl text-gray-500">
            To set the page title dynamically based on the current page, you can pass a title prop to your page components and use the NextSeo component from the next-seo package to set the title tag.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Redirect />
            </div>
        </>
    )
}