import React, { useState } from "react";
import { FaTimes } from "react-icons/fa/index.js";
import { GiHamburgerMenu, GiStarSattelites, GiShoppingBag, GiClawHammer, GiSparkles } from "react-icons/gi/index.js";
import { NormandyLetterN } from "../../assets/SVGs";

import { Accessories } from "./sections/Store.Accessories";
import { Digital } from "./sections/Store.Digital";
import { Limited } from "./sections/Store.Limited";
import { Shirts } from "./sections/Store.Shirts";

const StoreNav = () => {

    const testCart = [{}, {}, {}];

    const [cartMenuOpen, setCartMenuOpen] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [cartItems, mutateCartItems] = useState(testCart)

    return <header role="menubar" className={"absolute top-0 left-0 bg-slate-900 text-white h-16 w-full"}>
        <nav className={"flex gap-4 items-center h-full py-4 pl-8"}>
            <a href="/"><NormandyLetterN className={"fill-white hover:fill-n7-600 h-4"} /></a>
            <span>|</span>
            <ul role="menu" className={"flex gap-4 items-center h-full"}>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/">Home</a>
                </li>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/support">Support</a>
                </li>
            </ul>
            <ul role="menu" className={"hidden md:flex items-center gap-4 h-full ml-auto"}>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/store">Featured</a>
                </li>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/store/limited">LIMITED</a>
                </li>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/store/shirts">T-Shirts</a>
                </li>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/store/accessories">Accessories</a>
                </li>
                <li role="menuitem" className={"select-none border-b-2 border-transparent hover:border-n7-600"}>
                    <a href="/store/digital">Digital</a>
                </li>
            </ul>
            <div className={"ml-auto md:ml-4 flex"}>
                {
                    cartMenuOpen
                        ?
                        /* Is open */
                        <a className={"flex items-center justify-center bg-n7-800 h-16 w-16 cursor-pointer"} role="button" onClick={() => {
                            setCartMenuOpen(!cartMenuOpen);
                            setNavMenuOpen(false);
                        }}>
                            <FaTimes className={"fill-white"} />
                        </a>
                        :
                        /* Is closed */
                        <a className={"flex items-center justify-center bg-slate-800 h-16 w-16 cursor-pointer"} role="button" onClick={() => {
                            setCartMenuOpen(!cartMenuOpen);
                            setNavMenuOpen(false);
                        }}>
                            <GiShoppingBag className={"-mt-1 fill-white"} />
                        </a>
                }
                {
                    navMenuOpen
                        ?
                        /* Is open */
                        <a className={"flex md:hidden items-center justify-center bg-n7-800 h-16 w-16 cursor-pointer"} role="button" onClick={() => {
                            setNavMenuOpen(!navMenuOpen);
                            setCartMenuOpen(false);
                        }}>
                            <FaTimes className={"fill-white"} />
                        </a>
                        :
                        /* Is closed */
                        <a className={"flex md:hidden items-center justify-center bg-slate-800 h-16 w-16 cursor-pointer"} role="button" onClick={() => {
                            setNavMenuOpen(!navMenuOpen);
                            setCartMenuOpen(false);
                        }}>
                            <GiHamburgerMenu className={"fill-white"} />
                        </a>
                }
            </div>
        </nav>
        {
            cartMenuOpen === true && <nav id="cart" className={"relative bg-slate-900 border border-n7-800 w-full sm:w-1/2 ml-auto sm:rounded-bl shadow-xl"}>
                <h3 className={"bg-n7-800 text-white text-2xl p-4 select-none"}>Cart</h3>
                <ul className={"flex flex-col overflow-y-auto"}>
                    {cartItems.map((v, index) => {
                        return <li key={index} className={"block w-full p-4 select-none cursor-pointer hover:bg-n7-900 hover:text-white"}>
                            <a className={""}>Test Item</a>;
                        </li>
                    })}
                </ul>
            </nav>
        }
        {
            navMenuOpen === true && <nav id="nav-menu" className={"relative bg-slate-900 border border-n7-800 w-full sm:w-1/2 ml-auto sm:rounded-bl shadow-xl"}>
                <h3 className={"bg-n7-800 text-white text-2xl p-4 select-none"}>Menu</h3>
                <ul role="navigation" className={"flex flex-col overflow-y-auto"}>
                    <li>
                        <a className={"block w-full p-4 select-none cursor:pointer hover:bg-n7-900 hover:text-white"} href="/store">Featured</a>
                    </li>
                    <li>
                        <a className={"block w-full p-4 select-none cursor:pointer hover:bg-n7-900 hover:text-white"} href="/store/limited">LIMITED</a>
                    </li>
                    <li>
                        <a className={"block w-full p-4 select-none cursor:pointer hover:bg-n7-900 hover:text-white"} href="/store/shirts">T-Shirts</a>
                    </li>
                    <li>
                        <a className={"block w-full p-4 select-none cursor:pointer hover:bg-n7-900 hover:text-white"} href="/store/accessories">Accessories</a>
                    </li>
                    <li>
                        <a className={"block w-full p-4 select-none cursor:pointer hover:bg-n7-900 hover:text-white"} href="/store/digital">Digital</a>
                    </li>
                </ul>
            </nav>
        }
    </header>
}

const StoreMain = () => {
    return <>
        <section className={"bg-slate-900 text-white h-screen w-full pt-16"}>
            <article className={"flex flex-col h-full w-full justify-center items-center overflow-hidden"}>
                <figure className={"HammerMotion relative"}>
                    <GiClawHammer size="12em" className={"Hammer h-48"} />
                    <GiSparkles size="4em" className={"Sparks absolute bottom-4 -right-1"} />
                </figure>
                <h1 className={"text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 select-none"}>COMING SOON!</h1>
            </article>
        </section>
        <style>
            {`

                @keyframes HammerMotionHammer {

                    to {
                        transform: rotate3d(0, 0, 1, 0deg);
                    }

                }

                @keyframes HammerMotionSparks {

                    30% {
                        opacity: 0;
                        transform: scale3d(1, .5, 0);
                    }
                    
                    100% {
                        opacity: 0;
                        transform: scale3d(1, .5, 0);
                    }

                }

                .HammerMotion .Hammer {
                    transform: rotate3d(0, 0, 1, 45deg);
                    animation: HammerMotionHammer 2s linear infinite forwards;
                }

                .HammerMotion .Sparks {
                    opacity: 1;
                    transform: scale3d(1, .5, 1);
                    animation: HammerMotionSparks 2s linear infinite forwards;
                }
            
            `}
        </style>
    </>
}

const StoreFooter = () => {
    return <footer>

    </footer>
}

interface StorePageProps {
    category?: JSX.Element;
}

export const StorePage = (props: StorePageProps) => {

    return <>
        <StoreNav />
        {props.category ?? <StoreMain />}
        <StoreFooter />
    </>

}

export default StorePage;

export const Store = {

    Page: StorePage,
    Nav: StoreNav,
    Main: StoreMain,
    Footer: StoreFooter,
    Accessories,
    Digital,
    Limited,
    Shirts

}