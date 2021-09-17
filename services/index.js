export function getMenu() {
    const apiMenu = 'api/Menu'
    
    return fetch(apiMenu)
            .then(res => res.json())
    
}

export function getCategories() {
    const apiMenu = 'api/Categories'

    return (
        fetch(apiMenu)
            .then(res => res.json())
    )
}
