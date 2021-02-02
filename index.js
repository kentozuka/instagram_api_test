const axios = require('axios')
const url = 'https://www.instagram.com/kentozuka/?__a=1'

exports.handler = async () => {
  const { data, status } = await axios.get(url)
  if (status === 200) return data
  else return { error: 'failed to load the page', status }
}
