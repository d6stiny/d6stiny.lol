import Link from "next/link";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiCplusplus,
  SiHtml5,
  SiMarkdown,
  SiCsharp,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiSvelte,
  SiTailwindcss,
  SiExpress,
  SiFastify,
  SiVisualstudiocode,
  SiJetbrains,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiVite,
  SiPrisma,
  SiPlanetscale,
  SiCloudflare,
  SiAmazonaws,
  SiVercel,
  SiLinux,
} from "react-icons/si";

import ProfileImage from "components/ProfileImage";
import Links from "components/Links";
import Card from "components/Card";

export default function Home() {
  return (
    <div className="-mt-12 sm:mt-0">
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
      <div className="mt-8 sm:mt-12">
        <Links />
      </div>

      <div className="space-y-10 mt-20 sm:mt-32">
        <section>
          <h2 className="text-2xl font-medium text-rose-100/80 sm:text-3xl">
            Experience
          </h2>
          <div className="flex ml-2 flex-wrap justify-start gap-7 mt-4">
            <SiJavascript size={24} />
            <SiTypescript size={24} />
            <SiNodedotjs size={24} />
            <SiCplusplus size={24} />
            <SiHtml5 size={24} />
            <SiMarkdown size={24} />
            <SiCsharp size={24} />
            <SiReact size={24} />
            <SiNextdotjs size={24} />
            <SiAstro size={24} />
            <SiSvelte size={24} />
            <SiTailwindcss size={24} />
            <SiExpress size={24} />
            <SiFastify size={24} />
            <SiVisualstudiocode size={24} />
            <SiJetbrains size={24} />
            <SiDocker size={24} />
            <SiGit size={24} />
            <SiGithub size={24} />
            <SiGithubactions size={24} />
            <SiVite size={24} />
            <SiPrisma size={24} />
            <SiPlanetscale size={24} />
            <SiCloudflare size={24} />
            <SiAmazonaws size={24} />
            <SiVercel size={24} />
            <SiLinux size={24} />
          </div>
        </section>

        <h2 className="text-2xl font-medium text-rose-100/80 sm:text-3xl">
          Projects
        </h2>
        <Card
          title="blursed"
          description="replacement to the already emerging, closed-source social networks"
          link="https://blursed.org"
        />

        <Card
          title="Shiber [archived]"
          description="An open source discord moderation bot with a web dashboard and a lot of features."
          link="https://github.com/comfykayyy/Shiber"
        />
      </div>
    </div>
  );
}
