import { ScriptProps } from "next/script";

export default function SubTitle({children}:ScriptProps) {
  return (
    <h1 className="w-full text-xl py-4 text-center font-bold" >
      {children}
    </h1>
  )
}
