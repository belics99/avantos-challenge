'use client'

import { Handle, HandleType, Position } from "reactflow"

interface IProps {
    position: string
    type: HandleType
}

export const FormNodeHandle = ({type, position}: IProps) => {

    return <Handle type={type} position={position as Position} />
}