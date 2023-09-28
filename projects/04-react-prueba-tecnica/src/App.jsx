import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"


// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const CAT_PREFIX_IMAGE_URL = "https://cataas.com"

// function useCatImage ({ fact }) {
//     const [imageUrl, setImageUrl] = useState()

//     // para recuperar la imagen cada vez que tenemos una cita nueva
//     useEffect(() => {
//         if (!fact) return

//         const threeFirstWord = fact.split(' ', 3).join(' ')

//         fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
//             .then(res => res.json())
//             .then(response => {
//                 const { url } = response
//                 setImageUrl(url)
//         })
//     }, [fact])

//     return { imageUrl }
// } // { imageUrl: 'https://... }

// const useCatFact = () => {
//     const [fact, setFact] = useState()

//     const refreshFact = () => {
//         getRandomFact().then(newFact => setFact(newFact))
//     }
//     // para recuperar la cita al cargar la página
//     useEffect(refreshFact, [])

//     return { fact, refreshFact }
// }

export function App () {
    // const [fact, setFact] = useState()
    // const [imageUrl, setImageUrl] = useState()
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    // const getRandomFact = () => {
    //     fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         .then(res => res.json())
    //         .then(data => {
    //             const { fact } = data
    //             setFact(fact)
    //         })
    // }

    // para recuperar la cita al cargar la página
    
    // useEffect(() => {
    //     getRandomFact().then(newFact => setFact(newFact))
    // }, [])

    // // para recuperar la imagen cada vez que tenemos una cita nueva
    // useEffect(() => {
    //     if (!fact) return

    //     const threeFirstWord = fact.split(' ', 3).join(' ')

    //     fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
    //         .then(res => res.json())
    //         .then(response => {
    //             const { url } = response
    //             setImageUrl(url)
    //     })
    // }, [fact])

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>}
        </main>
    )
}