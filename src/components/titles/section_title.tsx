import { ScriptProps } from "next/script";

export default function SectionTitle({children}:ScriptProps) {
  return (
    <h1 className="w-full text-lg py-2 font-semibold" >
      {children}
    </h1>
  )
}
