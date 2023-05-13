import Link from "next/link";

import ProfileImage from "components/ProfileImage";

export default function Home() {
  return (
    <main className="-mt-12 sm:mt-0">
      <div className="flex items-center space-x-6">
        <ProfileImage />
        <div>
          <h1 className="text-3xl font-medium text-rose-100/80 sm:text-4xl">
            d6stiny
          </h1>
          <h2 className="align-middle text-lg leading-6 text-rose-100/50">
            <Link href={"https://blursed.org"}>
              <span className="font-medium text-rose-100/70">blursed</span>
            </Link>{" "}
            <span className="inline">Founder</span>
          </h2>
        </div>
      </div>
      <p className="mt-7 text-xl text-rose-100/90 sm:mt-9">
        i am too lazy to write a bio and copilot is not helping me so ill just
        say that i am a 16 year old who likes to code, play games and watch
        netflix
      </p>
    </main>
  );
}
