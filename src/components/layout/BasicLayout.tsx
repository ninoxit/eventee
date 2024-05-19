import { Children } from 'react';

export default function BasicLayout({ children }){
    return(
        <>
            <div className="container">
                {children}
            </div>
        </>
    )
}
