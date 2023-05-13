import clsx from "clsx";
import Link from "next/link";

import { FOCUS_VISIBLE_OUTLINE } from "./Links";

export default function Card({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={clsx(
        "block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium",
        FOCUS_VISIBLE_OUTLINE
      )}
    >
      <h3 className="text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">
        {title}
      </h3>

      <p className="mt-4 text-lg text-rose-100/70 line-clamp-3">
        {description}
      </p>
    </Link>
  );
}
