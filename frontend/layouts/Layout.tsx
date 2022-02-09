import React, {FC} from "react";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="w-full min-h-screen bg-background">
            {children}
        </div>
    )
}

export default Layout
