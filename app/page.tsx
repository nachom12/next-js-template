import Link from "next/link"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1
          className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
        Hello!
        </h1>
        <p className="text-lg">Next.js template for learning purposes 😄</p>
        <p>
          My github: 
          <Link href={'https://github.com/nachom12'}>nachom12</Link>
        </p>
      </div>
    </div>
  );
}
