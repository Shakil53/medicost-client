import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
    children: ReactNode,
    className: string,
}
const Container = ({children, className}: TContainerProps) => {
    return (
        <div className={cn('w-full mx-auto max-w-[1240px]', className)}>
            {children}
            
        </div>
    );
};

export default Container;