/* Shared Components */

import React, {ErrorInfo} from "react";

/* Shared Objects / Functions */

const BitShiftString = (length: number = 16) => ((new Date().getTime()) ^ Math.random()).toString(length);

export { BitShiftString };

/* ErrorBoundary */

interface ErrorBoundaryProps {
    children?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {

    public state = {
        hasError: false,
        error: ""
    };

    public static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error: error.message };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.state.error = `${error.name}: ${error.message}`;
    }

    public render() {
        if (this.state.hasError) {
            return <>
                <div className={"text-white"}>
                    <h1>ERR</h1>
                    <h5>Something went wrong.</h5>
                    <p>Try refreshing the page!</p>
                    <div className={"bg-red-200 m-4 p-2"}></div>
                </div>
            </>;
        }

        return this.props.children;
    }
}

export { ErrorBoundary }

/* LoadingDisc */

import { IconContext } from "react-icons";
import { FaCircleNotch } from "react-icons/fa/index.js";

const LoadingDisc = () => {

    return <IconContext.Provider value={{ color: "var(--bs-light)" }}>
        <div id={`loading-disc-${BitShiftString(16)}`} className="loading-disc d-flex"><FaCircleNotch size={96} /></div>
    </IconContext.Provider>
};

export { LoadingDisc };