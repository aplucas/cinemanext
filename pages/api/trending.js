import { apiBase, apiKey } from '../../lib/tmdb'

export default async(req, res) => {
    const endPoint = '/trending/movie/week'
    const defaultParams = `?api_key=${apiKey}&language=pt-BR`
    const response = await fetch(`${apiBase}${endPoint}${defaultParams}`)
    const json = await response.json()

    res.status(200).json({
        list: json.results
    })
}
