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
            <p className="text-justify my-4  text-lg sm:text-xl text-gray-800">
                Welcome to my About Page! My name is <b>Kamil Starmach</b> and I am a <b>Full Stack Web Developer</b>, with a passion for web development. I started my journey by studying <b>Computer Networking And Telecommunications</b> in <b>Wroclaw University of Science and Technology</b>, gaining a deeper understanding of the concepts and principles behind internet technology.
            </p>
            <p className="text-justify my-4 text-lg sm:text-xl text-gray-800">
                During my studies, I got my first job in the industry, working in an <b>affiliate network company</b>, where I had the opportunity to learn web development. There I also learned how <i>affiliate systems</i> work and how to cooperate and operate with <b>online stores and eCommers</b>.  Together with a second developer, we built the entire web application almost from scratch, using <b>ASP.NET MVC</b> technology, <b>Bootstrap</b> for frontend design, and databases like <b>MongoDB</b>, <b>MySQL</b>, and <b>Redis</b> for data storage.
            </p>
            <p className="text-justify my-4 text-lg sm:text-xl text-gray-800">
                After working in that role for <b>3-4 years</b>, I decided to venture out and learn more about the latest technologies in the industry. I was particularly drawn to and fell in love with <b>single-page applications</b> like in <b>ReactJS</b>. I spent a lot of time self-learning and mastering this technology, and I&apos;m excited to pursue a career in this field.
            </p>
            <p className="text-justify my-4 text-lg sm:text-xl text-gray-800">
                Along my journey, I&apos;ve learned many other techniques that have helped me become an even better developer. These include technologies like <i>GraphQL, TypeScript, React Native, CI/CD and Containers</i> as well as writing a master&apos;s thesis on <b>web accessibility</b> and the principles of creating websites to make them accessible. I am constantly looking for opportunities to learn more and expand my skills  in this constantly evolving web development career.
            </p>
            <p className="text-justify my-4  text-lg sm:text-xl text-gray-800">
                I am confident that my passion, skills and experience make me an ideal candidate for any company to hire a skilled and motivated developer. Thank you for taking the time to read about me, and please feel free to get in touch if you have any questions or if you are interested in working together.
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
            <p className="text-justify my-4  text-lg sm:text-xl text-gray-800">
                If you&apos;re interested in learning more about my qualifications and experience, I invite you to download my CV using the link below. My CV includes a detailed summary of my education, work experience, technical skills, and achievements.

            </p>
            <DownloadTable />
        </>
    )
}