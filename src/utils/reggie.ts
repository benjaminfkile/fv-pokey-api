const reggie = {
    getUrl: (input: string): string | null => {
        const urlPattern = /url\(['"]?(.*?)['"]?\)/
        const match = input.match(urlPattern)
        return match ? match[1] : null
    }
}

module.exports = reggie