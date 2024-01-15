import { ScriptProps } from "next/script";

export default function TitleHeader({children}:ScriptProps) {
  return (
    <h1 className="w-full text-4xl py-4 text-center font-semibold" >
      {children}
    </h1>
  )
}
