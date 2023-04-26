import { AiOutlinePaperClip } from 'react-icons/ai'

function DownloadButton() {
  const handleDownload = () => {
    const pdfUrl = '/Kamil_Starmach_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <button onClick={handleDownload} className="font-medium text-indigo-600 hover:text-indigo-500">Download</button>

  );
}

function DownloadTable() {
  return (
    <div className="px-4 pt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">

      <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">
        <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
          <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
            <div className="flex w-0 flex-1 items-center">
              <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0 text-gray-400" />
              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <span className="truncate font-medium">Kamil_Starmach_Resume.pdf</span>
                <span className="flex-shrink-0 text-gray-400">103kb</span>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <DownloadButton />
            </div>
          </li>
          <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
            <div className="flex w-0 flex-1 items-center">
              <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0 text-gray-400" />
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
  )
}

export default function Home() {

  return (
    <>
      <p className="my-4 w-2xl text-xl text-gray-500">
        Hi there! My name is Kamil, and I&apos;m a <b>Full Stack Web Developer</b> who loves to build websites of all kinds of styles.
      </p>
      <p className="my-4 w-2xl text-xl text-gray-500">
        One of my biggest passions is <b>frontend development</b>, especially when it comes to building beautiful and accessible websites. I believe that great design should not come at <b>the expense of accessibility</b>, and I strive to create simple yet functional websites that are easy for all users to use.
      </p>
      <p className="my-4 w-2xl text-xl text-gray-500">
        Whether you need a simple landing page, a powerful eCommerce platform, or something in between, I&apos;m here to help bring your vision to life.
      </p>

      <DownloadTable />
    </>
  )
}
