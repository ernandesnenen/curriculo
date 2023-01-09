import { ReactNode } from "react"
import {Header}  from "./header";

type layoutPros={
    children: ReactNode;
}

export default function Layout({ children }:layoutPros) {
  return (
    <div className="bg-slate-900 min-h-[calc(100vh)]">
      <Header />
      <main>{children}</main>    
    </div>
  )
}