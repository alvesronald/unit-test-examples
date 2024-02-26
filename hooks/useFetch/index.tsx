import { useEffect, useState } from "react"

const useFetch = () => {

    const [data, setData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSetLoading = () => setIsLoading(true)


    useEffect(() => {
       let timer = setTimeout(() => {
            setData([{ name: 'Ronald' }])
        }, 1000)


        return () => clearTimeout(timer);
    },[])
 
    return {
        data,
        isLoading,
        handleSetLoading
    }
}

export default useFetch;