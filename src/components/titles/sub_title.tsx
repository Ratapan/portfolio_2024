import { ScriptProps } from "next/script";

export default function SubTitle({children}:ScriptProps) {
  return (
    <h1 className="w-full text-lg py-2 text-center font-bold" >
      {children}
    </h1>
  )
}
