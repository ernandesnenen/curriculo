import Link from "next/link";

export function Menu(){
    return(
       
            <ul className=" flex gap-4">
                    <Link  href="/"  className="py-24">                    
                        <li className="  text-slate-300 hover:text-cyan-500" >
                            Home
                        </li>
                    </Link>
                    <Link  href="/sobre" className="py-24">                    
                        <li className=" hover:text-cyan-500 text-slate-300 " >
                            Sobre
                        </li>
                    </Link>
                    <Link  href="/titulos" className="py-24">                    
                        <li className=" hover:text-cyan-500 text-slate-300" >
                            Conquistas
                        </li>
                    </Link>
                    <Link  href="/vivencia" className="py-24">                    
                        <li className=" hover:text-cyan-500 text-slate-300 " >
                            Vivência Profissional
                        </li>
                    </Link>
                    <Link href="/contatos" className="py-24">                    
                         <li className=" hover:text-cyan-500 text-slate-300 " >Contatos</li>
                    </Link>
                
               
            </ul>
       
    )
}