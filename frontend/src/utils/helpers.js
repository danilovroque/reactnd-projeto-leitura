export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function isEmpty (obj) {
    return !obj || obj.length === 0 || obj.length === undefined
}

export function orderPosts (posts, category, orderBy) {
    const filteredPosts = category
        ? posts.filter((p) => p.category === category)
        : posts

        console.log('orderPosts: ', filteredPosts)

    switch(orderBy) {
        case 'score':
            return filteredPosts.sort((a, b) => (b.voteScore - a.voteScore))
        case 'newest':
            return filteredPosts.sort((a, b) => (b.timestamp - a.timestamp))
        case 'oldest':
            return filteredPosts.sort((a, b) => (a.timestamp - b.timestamp))
        default:
            return filteredPosts
    }
}