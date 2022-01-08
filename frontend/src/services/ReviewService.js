import Client from './'


export const GetReviews = async () => {
    try {
        const res = await Client.get('/api/reviews')
        console.log(res)
        return res.data.reviews
    } catch (error) {
        throw error
    }
}

export const AddReviews = async () => {
    try {
        const res = await Client.get('/api/reviews')
        console.log(res)
        return res.data.results
    } catch (error) {
        throw error
    }
}

    export const UpdateReviews = async () => {
        try {
            const res = await Client.get('/api/reviews')
            console.log(res)
            return res.data.results
        } catch (error) {
            throw error
        }
    }