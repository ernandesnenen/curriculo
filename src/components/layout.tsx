import { ReactNode } from "react"
import {Header}  from "./header";

type layoutPros={
    children: ReactNode;
}

export default function Layout({ children }:layoutPros) {
  return (
    <div className="bg-slate-200 min-h-[calc(100vh)]">
      <Header />
      <main>{children}</main>    
    </div>
  )
}