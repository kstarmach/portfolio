import Redirect from "@/components/Redirect"

function DownloadButton() {
    const handleDownload = () => {
        const pdfUrl = '/Kamil_Starmach_Resume.pdf';
        window.open(pdfUrl, '_blank');
    };

    return (
        <button onClick={handleDownload} className="font-medium text-indigo-600 hover:text-indigo-500">Download</button>

    );
}

export default function About() {
    return (
        <>
            <p className="mt-4 w-2xl text-xl text-gray-500">
                In Next.js, you can get the current  information inside the _document.js file by using the getInitialProps method. However, this method is not available in _document.tsx file since a special file used for server-side rendering and is not a page component.
            </p>
            <p className="mt-4 w-2xl text-xl text-gray-500">
                To set the page title dynamically based on the current page, you can pass a title prop to your page components and use the NextSeo component from the next-seo package to set the title tag.
            </p>

            <div className="px-4 pt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">

                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">
                    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                </svg>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">Kamil_Starmach_Resume.pdf</span>
                                    <span className="flex-shrink-0 text-gray-400">103kb</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a> */}
                                <DownloadButton />
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                </svg>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">Kamil_Starmach_Cover_Letter.pdf</span>
                                    <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                            </div>
                        </li>
                    </ul>
                </dd>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Redirect />
            </div>
        </>
    )
}