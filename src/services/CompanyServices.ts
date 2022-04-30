import api from './api'

const apiKey = process.env.IEX_API_TOKEN

export default class CompanyServices {
    static async getCompany(symbol: string) {
        try {
            const result = await api.get(
                `/stock/${symbol}/company?token=${apiKey}`,
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
