import Redirect from "@/components/Redirect"
import ReactGithubCalendar from 'react-github-calendar';
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
        <div className="px-4 pt-4  -cols-3 sm:gap-4 sm:px-0 ">

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

export default function About() {
    return (
        <>
            <p className="my-4 max-w-2xl text-lg sm:text-xl text-gray-800">
                Hello and welcome! My name is [your name], and I am an enthusiastic Full Stack Web Developer with a wealth of knowledge and experience.
            </p>
            <p className="my-4 max-w-2xl text-lg sm:text-xl text-gray-800">
                My journey in web development began a few years ago when I discovered my love for beautiful and functional websites. Since then, I’ve honed my craft working with technologies including ASP.NET MVC, MySQL, and MongoDB, to name a few.
            </p>
            <p className="my-4 max-w-2xl text-lg sm:text-xl text-gray-800">
                My favorite thing about web development is the challenge of integrating different technologies to create a seamless and intuitive user experience. I constantly push myself to learn new things and stay up to date with the latest trends and best practices in the industry.
            </p>
            <p className="my-4 max-w-2xl text-lg sm:text-xl text-gray-800">
                When it comes to my technology stack, I have a deep understanding of front-end and back-end development. I am proficient in HTML, CSS, JavaScript, and have experience working with popular front-end frameworks like ReactJS. Behind the scenes, I have a lot of experience with ASP.NET MVC, and am comfortable working with databases like MySQL and MongoDB.
            </p>
            <p className="my-4 max-w-2xl text-lg sm:text-xl text-gray-800">
                But what really sets me apart is my passion for web development. I truly love what I do and am committed to providing the best for my clients. Whether you’re looking for a simple website or a complex web application, I’m here to help bring your vision to life. So if you’re ready to take the next step, let’s get started!
            </p>
            <a href="https://github.com/kstarmach" target="_blank" rel="noopener noreferrer" title="Github calendar" >
                <ReactGithubCalendar
                    username="kstarmach"
                    blockSize={25}
                    blockMargin={5}
                    hideColorLegend
                    hideTotalCount
                    hideMonthLabels
                />
            </a>

            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                if you are intrested u can downlad my full resume here

            </div>
            <DownloadTable />
        </>
    )
}