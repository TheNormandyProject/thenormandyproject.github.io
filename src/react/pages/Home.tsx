import {
    ViteLogo,
    ReactLogo,
    AllianceLogo,
    NormandyLetterA,
    NormandyLetterD,
    NormandyLetterM,
    NormandyLetterN,
    NormandyLetterO,
    NormandyLetterR,
    NormandyLetterY,
    ParagonLogo,
    RenegadeLogo,
    N7Logo,
    Credits
} from "../../assets/SVGs";

export const Home = () => {

    return <>
        <main>
            <article className={"bg-slate-900 text-white h-screen w-full"}>
                <section className={"flex flex-col justify-center container max-w-screen-md h-full mx-auto"}>
                    <div className={"flex justify-center w-full px-4 md:px-0 py-4 sm:py-6 md:py-8"}>
                        <NormandyLetterN id="NormandyLetterN" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterO id="NormandyLetterO" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterR id="NormandyLetterR" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterM id="NormandyLetterM" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterA id="NormandyLetterA" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterN id="NormandyLetterN2" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterD id="NormandyLetterD" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                        <NormandyLetterY id="NormandyLetterY" className={"NormandyLetter fill-transparent stroke-white h-16"}/>
                    </div>
                    <nav className={"flex flex-col md:flex-row gap-4 w-full px-4 md:px-0 ButtonGroupFadeIn opacity-0"}>
                        <a className={"flex-1 hollow icon-button button-white"} href="/store">
                            <Credits className={"h-6"} />
                            <span className="w-full -ml-6">Store</span>
                        </a>
                        <a className={"flex-1 hollow icon-button button-white"} href="https://ko-fi.com/thenormandyproject">
                            <ParagonLogo className={"h-6"} />
                            <span className="w-full -ml-6">Support</span>
                        </a>
                        <a className={"flex-1 hollow icon-button button-white"} href="https://youtube.com/@TheNormandyProject">
                            <RenegadeLogo className={"h-6"} />
                            <span className="w-full -ml-6">Videos</span>
                        </a>
                    </nav>
                </section>
            </article>
        </main>
    </>

}