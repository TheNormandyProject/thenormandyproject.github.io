import React from "react";
import { ViteLogo, ReactLogo } from "./SVGs";

function App() {

    return (<>
        <main className={"bg-brand h-screen"}>
            <article className={"relative h-full w-full overflow-hidden"}>
                <div className={"absolute w-2/4 -right-1/4 top-1/2 -translate-y-1/2"}>
                    <img className={"box invert opacity-30"}
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4331453-0a1e-46fb-bc94-290ce5330f9e/d4pt8y2-299bd7e1-c395-4cba-a42b-e48d5577def7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0MzMxNDUzLTBhMWUtNDZmYi1iYzk0LTI5MGNlNTMzMGY5ZVwvZDRwdDh5Mi0yOTliZDdlMS1jMzk1LTRjYmEtYTQyYi1lNDhkNTU3N2RlZjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RxAtdO2d0WgmH_VnxWNITPk4LLYJ-XWUJz_HvQzPqn8" />
                </div>
                <section className={"absolute h-full w-full"}>
                    <div className={"flex flex-col container h-full mx-auto items-center"}>
                        <a
                        href="https://thenormandyproject.podia.com" role={"navigation"}
                        className={"relative md:w-2/3 py-6 px-6 rounded shadow-md text-3xl font-bold select-none bg-white text-brand text-center no-underline m-auto overflow-hidden after:absolute after:top-0 after:w-24 after:h-full after:-left-24 hover:after:shines hover:animate-shineGlow hover:bg-brandLight hover:text-white transition-all"}>Enter</a>
                    </div>
                </section>
            </article>
        </main>
        <footer className={"absolute bottom-0 h-24 w-full p-6"}>
            <div className={"flex justify-center"}>
                <a className={"drop-shadow-lg mx-2 text-[rgba(255,255,255,0.3)] motion-safe:animate-none hover:motion-safe:animate-pulse hover:text-orange-200 transition-all"} href="https://vitejs.dev" target="_blank">
                    <ViteLogo id="vite-logo" role="image" aria-description="ViteJS icon"/>
                </a>
                <a className={"drop-shadow-lg mx-2 text-[rgba(255,255,255,0.6)] motion-safe:animate-none hover:motion-safe:animate-pulse hover:text-orange-200 transition-all"} href="https://reactjs.org" target="_blank">
                    <ReactLogo id="react-logo" role="image" aria-description="ReactJS icon"/>
                </a>
            </div>
        </footer>
        <style>
        {`
            #react-logo {
                stroke: rgba(0,0,0,.6);
                stroke-width: 1px; 
            }

            #vite-logo\\/background {
                stroke: rgba(0,0,0,.6);
                stroke-width: 8px; 
            }

            #vite-logo\\/foreground {
                stroke: rgba(0,0,0,.6);
                stroke-width: 8px; 
            }

            a:hover #vite-logo\\/foreground {
                fill: rgb(253, 186, 116);
            }
        `}
        </style>
        </>)
}

export default App
