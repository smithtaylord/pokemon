// @ts-ignore
export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})

// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/taylormon/pokemon',
    timeout: 8000
})