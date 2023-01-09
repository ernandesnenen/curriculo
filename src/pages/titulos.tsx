export default function Titulos(){
    return(
        <main className="px-4 py-8 text-slate-300">
            <h1 className="text-3xl font-bold">Conquistas</h1>
            <section className="my-24 text-3xl font-bold">
                <h2>Títulos</h2>
                <div className="border-l-2 border-head-color px-2 my-12 space-y-3 max-w-3xl">
                        <h2 className="text-xl font-bold">Universidade Pitágoras Unopar Anhanguera</h2> 
                        <p className="text-xl">Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</p>
                        <p className="flex gap-2 sm:gap-4 items-center sm:justify-between"><strong className="text-xl font-normal ">Tecnólogo</strong> <span className="text-sm sm:text-lg font-normal ">período: 01/03/2019 a 11/12/2021</span></p>
                </div>
                <div className="border-l-2 border-head-color px-2 my-12 space-y-3 max-w-3xl">
                        <h2 className="text-xl font-bold">Instituto Centro de Ensino Tecnológico </h2> 
                        <p className="text-xl">Curso Técnico em Informática</p>
                        <p className="flex gap-2 sm:gap-4 items-center sm:justify-between"><strong className="text-xl font-normal ">Técnico</strong> <span className="text-sm sm:text-lg font-normal ">período: 20/02/2010 a 28/06/2013</span></p>
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold">Cursos</h2>

                <div className="border-l-2 border-head-color px-2 my-12 space-y-3">
                    <h2 className="text-xl font-bold">Rocketseat</h2> 
                    <p className="text-xl">Curso Ignite</p>
                    <p className="flex gap-4 sm:gap-24"><span>Front-end</span>Diego Fernandes<span>100h</span></p>
                   
                </div>

                <div className="border-l-2 border-head-color px-2 my-12 space-y-3">
                    <h2 className="text-xl font-bold">Udemy</h2> 
                    <p className="text-xl">Curso de React.js + Next.js completo do básico ao avançado</p>
                    <p className="flex gap-4 sm:gap-24"><span>Front-end</span>Luis Otávio Miranda<span>92h</span></p>
                   
                </div>

                <div className="border-l-2 border-head-color px-2 my-12 space-y-3">
                    <h2 className="text-xl font-bold">Udemy</h2> 
                    <p className="text-xl">Curso WebDesing Completo: HTML5, CSS e JS + 5Projetos</p>
                    <p className="flex gap-4 sm:gap-24"><span>Front-end</span>Daniel Tapias Morales<span>54h</span></p>
                   
                </div>

                <div className="border-l-2 border-head-color px-2 my-12 space-y-3">
                    <h2 className="text-xl font-bold">Udemy</h2> 
                    <p className="text-xl">Curso de JavaScript Completo do iniciante ao mestre</p>
                    <p className="flex gap-4 sm:gap-24"><span>Front-end</span>Daniel Tapias Morales<span>104h</span></p>
                   
                </div>

                <div className="border-l-2 border-head-color px-2 my-12 space-y-3">
                    <h2 className="text-xl font-bold">Udemy</h2> 
                    <p className="text-xl">Curso Formação Node.js</p>
                    <p className="flex gap-4 sm:gap-24"><span>Back-end</span>Victor Lima<span>50h</span></p>
                   
                </div>
                           
           
            </section>
        </main>
    )
}