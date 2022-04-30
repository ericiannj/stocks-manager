import api from './api'

const apiKey = process.env.IEX_API_TOKEN

export default class HistoryServices {
    static async getHistory(symbol: string, range: string, date?: string) {
        try {
            const result = await api.get(
                `/stock/${symbol}/chart/${range}/${date}?token=${apiKey}`,
                {}
            )
            if (result.status === 200 || result.status === 201) {
                return result.data.result
            }
            return { error: true }
        } catch (e) {
            console.log(e)
        }
    }
}
