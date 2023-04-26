import Redirect from "@/components/Redirect";


export default function Home() {

  return (
    <>
      <p className="my-6 w-2xl text-xl text-gray-500">
        Hi there! My name is Kamil, and I&apos;m a <b>Full Stack Web Developer</b> who loves to build websites of all kinds of styles.
      </p>
      <p className="my-4 w-2xl text-xl text-gray-500">
        One of my biggest passions is <b>frontend development</b>, especially when it comes to building beautiful and accessible websites. I believe that great design should not come at <b>the expense of accessibility</b>, and I strive to create simple yet functional websites that are easy for all users to use.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Redirect />
      </div>
    </>
  )
}
