export function generateId () {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
}

export function postsOrderBy (posts, category, orderBy) {
    const filteredPosts = category 
        ? posts.slice().filter(p => p.category === category)
        : posts.slice()
    
    switch (orderBy) {
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