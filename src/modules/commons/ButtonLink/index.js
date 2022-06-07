import React from 'react'
import Link from 'next/link'

const ButtonLink = ( { href, title } ) => {
    return (
        <Link href= { href }>
            <a>
                <span> { title } </span>
            </a>
        </Link>        
    );
}

export default ButtonLink;