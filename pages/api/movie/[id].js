import { apiBase, apiKey } from '../../../lib/tmdb'

export default async(req, res) => {

    const id = req.query.id

    const endPoint = `/movie/${id}`
    const defaultParams = `?api_key=${apiKey}&language=pt-BR`
    const url = `${apiBase}${endPoint}${defaultParams}`
    const response = await fetch(url)
    const json = await response.json()

    res.status(200).json({
        info: json
    })
}
