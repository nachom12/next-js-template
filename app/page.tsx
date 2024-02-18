import PresentationCard from "./components/PresentationCard";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1
          className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
        Hi!
        </h1>
        <PresentationCard />
      </div>
    </div>
  );
}
