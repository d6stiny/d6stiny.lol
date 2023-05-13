import Link from "next/link";
import clsx from "clsx";

import { GitHubIcon, InstagramIcon, TwitchIcon } from "./Icons";

export const FOCUS_VISIBLE_OUTLINE =
  "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70";

export default function Links() {
  return (
    <div className="flex items-center space-x-7 text-base font-semibold leading-none text-rose-100/90">
      <Link
        href="https://github.com/d6stiny"
        className={clsx("group", FOCUS_VISIBLE_OUTLINE)}
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
              <GitHubIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
            </div>
          </div>
          <div>GitHub</div>
        </div>
      </Link>

      <Link
        className={clsx("group", FOCUS_VISIBLE_OUTLINE)}
        href="https://www.twitch.tv/d6stinylol"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
              <TwitchIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
            </div>
          </div>
          <div>Twitch</div>
        </div>
      </Link>

      <Link
        className={clsx("group", FOCUS_VISIBLE_OUTLINE)}
        href="https://www.instagram.com/d6stinylol/"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
              <InstagramIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
            </div>
          </div>
          <div>Instagram</div>
        </div>
      </Link>
    </div>
  );
}
