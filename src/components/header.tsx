import Image from "next/image";
import { Menu } from "./menu";
import NavBar from "./navbar";
import avatar from "../../public/avatar.png"
import Link from "next/link";

export function Header(){
    return(
        <div className="bg-head-color flex justify-between items-center h-20 px-4 " >
            <div>
                {/* <Link href="/">
                    <strong className="text-2xl text-slate-200"> Ernandes</strong>
                </Link> */}
            </div>
            <div className="sm:hidden m-4">
                <NavBar />
            </div>
            <div className="hidden sm:flex">
                <Menu />
            </div>

        </div>
    )
}