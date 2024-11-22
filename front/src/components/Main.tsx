import { ReactElement } from "react";

export function Main({ children }: { children: ReactElement }) {
  return <main className="w-[90%] lg:w-[70%] m-auto">{children}</main>;
}
