import Redirect from "@/components/Redirect";


export default function Home() {

  return (
    <div className="grid">
      <div>
        <p className="my-4 max-w-2xl text-lg sm:text-xl ">
          Hi there! My name is Kamil, and I&apos;m a <b>Full Stack Web Developer</b> who loves to build websites of all kinds of styles.
        </p>
      </div>
      <Redirect />
      <div>
        <p className="my-4 max-w-2xl text-lg sm:text-xl ">
          One of my biggest passions is <b>frontend development</b>, especially when it comes to building beautiful and accessible websites. I believe that great design should not come at <b>the expense of accessibility</b>, and I strive to create simple yet functional websites that are easy for all users to use.
        </p>
      </div>
    </div>
  )
}
