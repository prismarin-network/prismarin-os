import React, {FC} from "react";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default DefaultLayout
