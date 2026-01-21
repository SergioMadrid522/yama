import { menuModalOptions } from "@/data";
import Link from "next/link";

export default function MenuContent() {
  return (
    <div>
      <ul>
        {menuModalOptions.map(({ page, link }) => (
          <li key={page}>
            <Link href={link}>{page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
