import DownloadTable from '@/components/DownloadTable';
import ReactGithubCalendar from 'react-github-calendar';


export default function About() {
    return (
        <>
            <p className="text-justify my-4  text-lg sm:text-xl text-gray-800">
                Welcome to my <i>About Page</i>! My name is <b>Kamil Starmach</b> and I am a <b>Full Stack Web Developer</b>, with a passion for web development. I started my journey by studying <b>Computer Networking And Telecommunications</b> in <b>Wroclaw University of Science and Technology</b>, gaining a deeper understanding of the concepts and principles behind internet technology.
            </p>
            <p className="text-justify my-4 text-lg sm:text-xl text-gray-800">
                During my studies, I got my first job in the industry, working in an <b>affiliate network company</b>, where I had the opportunity to learn web development. There I also learned how <i>affiliate systems</i> work and how to cooperate and operate with <b>online stores and eCommers</b>.  Together with a second developer, we built the entire web application almost from scratch, using <b>ASP.NET MVC</b> technology, <b>Bootstrap</b> for frontend design, and databases like <b>MongoDB</b>, <b>MySQL</b>, and <b>Redis</b> for data storage.
            </p>
            <p className="text-justify my-4 text-lg sm:text-xl text-gray-800">
                After working in that role for <b>3-4 years</b>, I decided to venture out and learn more about the latest technologies in the industry. I was particularly drawn to and fell in love with <b>single-page applications</b> like in <b>ReactJS</b>. I spent a lot of time self-learning and mastering this technology, and I&apos;m excited to pursue a career in this field.
            </p>
            <p className="text-justify my-4 text-lg sm:text-xl text-gray-800 mb-10">
                Along my journey, I&apos;ve learned many other techniques that have helped me become an even better developer. These include technologies like <i>GraphQL, TypeScript, React Native, CI/CD and Containers</i> as well as writing a master&apos;s thesis on <b>web accessibility</b> and the principles of creating websites to make them accessible. I am constantly looking for opportunities to learn more and expand my skills  in this constantly evolving web development career.
            </p>
            <a href="https://github.com/kstarmach" target="_blank" rel="noopener noreferrer" title="Github calendar">
                <ReactGithubCalendar
                    username="kstarmach"
                    colorScheme='light'          
                />
            </a>
            <p className="text-justify my-4  text-lg sm:text-xl text-gray-800 mt-10">
                If you&apos;re interested in learning more about my qualifications and experience, I invite you to download my <b>resume</b> using the link below. My resume includes a detailed summary of my education, work experience, technical skills, and achievements.
            </p>
            <DownloadTable />
        </>
    )
}