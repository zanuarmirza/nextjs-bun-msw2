'use client'

import { useEffect, useState } from "react"
import { getData } from "services/fetch-dummy"

export const DataClientSide = () => {
    const [data, setData] = useState<any>(undefined)
    const getDataHandler = async () => {
        const data = await getData()
        setData(data)
    }
    useEffect(() => {
        getDataHandler()
    }, [])
    return (
        <div>{data?JSON.stringify(data):'-'}</div>
    )
}
