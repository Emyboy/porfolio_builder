import { BuilderComponent } from '@components/Builder/Builder.component'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function BuilderPage({}: Props): ReactElement {
    return <>
        <BuilderComponent />
    </>
}
