const hentaiDB = require('./index').rule34


async function getPic() {
    const img = await hentaiDB(['pussy','tentacle'])
    console.log(img)
}

getPic()