import Redirect from "@/components/Redirect"
import ReactGithubCalendar from 'react-github-calendar';


export default function About() {
    return (
        <>
            <p className="mt-4 w-2xl text-xl text-gray-500">
                Hello and welcome! My name is [your name], and I am an enthusiastic Full Stack Web Developer with a wealth of knowledge and experience.
            </p>
            <p className="my-4 w-2xl text-xl text-gray-500">
                My journey in web development began a few years ago when I discovered my love for beautiful and functional websites. Since then, I’ve honed my craft working with technologies including ASP.NET MVC, MySQL, and MongoDB, to name a few.
            </p>
            <p className="my-4 w-2xl text-xl text-gray-500">
                My favorite thing about web development is the challenge of integrating different technologies to create a seamless and intuitive user experience. I constantly push myself to learn new things and stay up to date with the latest trends and best practices in the industry.
            </p>
            <p className="my-4 w-2xl text-xl text-gray-500">
                When it comes to my technology stack, I have a deep understanding of front-end and back-end development. I am proficient in HTML, CSS, JavaScript, and have experience working with popular front-end frameworks like ReactJS. Behind the scenes, I have a lot of experience with ASP.NET MVC, and am comfortable working with databases like MySQL and MongoDB.
            </p>
            <p className="my-4 w-2xl text-xl text-gray-500">
                But what really sets me apart is my passion for web development. I truly love what I do and am committed to providing the best for my clients. Whether you’re looking for a simple website or a complex web application, I’m here to help bring your vision to life. So if you’re ready to take the next step, let’s get started!
            </p>
            <a href="https://github.com/kstarmach" target="_blank" rel="noopener noreferrer" >
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
                <Redirect />
            </div>
        </>
    )
}