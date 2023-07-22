import {client} from 'common'

export const get = async (id = null) => {
	const config = {
		method: 'get',
		url:'/transaction',
		params: {
			id: id
		},
		headers: {
			'Authorization': `Bearer ${process.env.TOKEN}`,
		}
	}
	return  client.request(config)
}
