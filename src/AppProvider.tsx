"use client"
import { useState } from "react"
import { clientSessionToken } from "./lib/http"

export default function AppProvider({children, inititalSessionToken = ''}: {children : React.ReactNode, inititalSessionToken? : string}) {
    useState(() => {
        if(typeof window !== 'undefined') {
            clientSessionToken.value = inititalSessionToken
        }
    })
    return (
        <>
            {children}
        </>
    )
}
