import { Children } from 'react';

export default function BasicLayout({ children }){
    return(
        <>
            <div className="container" style={{marginTop: "63px"}}>
                {children}
            </div>
        </>
    )
}
