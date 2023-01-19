import Link from "next/link";

export function Menu(){
    return(
       
            <ul className=" flex gap-4 text-base">
                    <Link  href="/" >                    
                        <li className="   hover:text-destaque text-slate-300" >
                            Home
                        </li>
                    </Link>
                    <Link  href="/sobre">                    
                        <li className=" hover:text-destaque text-slate-300 " >
                            Sobre
                        </li>
                    </Link>
                    <Link  href="/titulos">                    
                        <li className=" hover:text-destaque text-slate-300" >
                            Conquistas
                        </li>
                    </Link>
                    <Link  href="/vivencia">                    
                        <li className=" hover:text-destaque text-slate-300 " >
                            Vivência Profissional
                        </li>
                    </Link>
                    <Link href="/contatos">                    
                         <li className=" hover:text-destaque text-slate-300 " >Contatos</li>
                    </Link>
                
               
            </ul>
       
    )
}