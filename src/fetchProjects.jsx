import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: "0ceoyrc5kma4",
    environment: "master",
    accessToken: "d9GHiwwxotAWI6giqq0Vf-ylenp-lIEL7wiPZuySBuI",
})
export  const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [project_showcase, setProject_showcase] = useState([])

    const getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: "project_showcase",
            })
            const project_showcase = response.items.map((item) => {
                const { title, url, image } = item.fields 
                const id = item.sys.id
                const img = image?.fields?.file?.url
               return {
                   title,
                   url,
                   img,
                   id
               } 
            })
            setProject_showcase(project_showcase)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return {
        loading,
        project_showcase
    }
}

