const axios = require('axios')
const url = 'https://www.instagram.com/kentozuka/?__a=1'

async function main () {
  const { data, status } = await axios.get(url)
  if (status === 200) return console.log(data)
  else return console.log({ error: 'failed to load the page', status })
}

main()
