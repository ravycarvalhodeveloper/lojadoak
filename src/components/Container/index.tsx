import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div className="w-full scale-90 px-4 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}