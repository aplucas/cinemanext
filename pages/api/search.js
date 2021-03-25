import { apiBase, apiKey } from '../../lib/tmdb'

export default async(req, res) => {

    const q = req.query.q

    const endPoint = '/search/movie'
    const defaultParams = `?api_key=${apiKey}&language=pt-BR`
    const url = `${apiBase}${endPoint}${defaultParams}&query=${q}`
    const response = await fetch(url)
    const json = await response.json()

    res.status(200).json({
        list: json.results
    })
}
