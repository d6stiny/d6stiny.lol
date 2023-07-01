import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFastify,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiPrisma,
  SiPlanetscale,
  SiCloudflare,
  SiVercel,
  SiMacos,
} from "react-icons/si";
const techstack = {
  backend: [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Node.js",
      url: "https://nodejs.dev",
      icon: SiNodedotjs,
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org",
      icon: SiTypescript,
    },
    {
      name: "Fastify",
      url: "https://fastify.io",
      icon: SiFastify,
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
      icon: SiNextdotjs,
    },
  ],
  frontend: [
    {
      name: "React",
      url: "https://reactjs.org",
      icon: SiReact,
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
      icon: SiNextdotjs,
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      icon: SiTailwindcss,
    },
  ],
  tools: [
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com",
      icon: SiVisualstudiocode,
    },
    {
      name: "Git",
      url: "https://git-scm.com",
      icon: SiGit,
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: SiGithub,
    },
    {
      name: "GitHub Actions",
      url: "https://github.com/features/actions",
      icon: SiGithubactions,
    },
  ],
  databases: [
    {
      name: "Prisma",
      url: "https://www.prisma.io",
      icon: SiPrisma,
    },
    {
      name: "PlanetScale",
      url: "https://planetscale.com",
      icon: SiPlanetscale,
    },
  ],
  others: [
    {
      name: "Vercel",
      url: "https://vercel.com",
      icon: SiVercel,
    },
    {
      name: "Cloudflare",
      url: "https://www.cloudflare.com",
      icon: SiCloudflare,
    },
    {
      name: "macOS",
      url: "https://www.apple.com/macos",
      icon: SiMacos,
    },
  ],
};

export default function TechStack() {
  return (
    <div className="space-y-10 mt-20 sm:mt-32 mb-20">
      <section id="techstack">
        <h2 className="text-2xl font-medium text-rose-100/80 sm:text-3xl mb-2">
          Tech Stack
        </h2>
        <div className="ml-2 gap-7 mt-4">
          {Object.entries(techstack).map(([name, items]) => (
            <>
              <section key={name} className="flex flex-row gap-2">
                <h3 className="text-xl font-medium text-rose-100/80 mb-2">
                  {name.charAt(0).toUpperCase() +
                    name.slice(1).replace("_", "/")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, url, icon: Icon }) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                      key={name}
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </section>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
