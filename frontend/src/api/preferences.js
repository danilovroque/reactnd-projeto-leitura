export const ORDER_BY = 'ORDER_BY'

export function savePreference(prefName, prefValue) {
    localStorage.setItem(prefName, prefValue)
}

export function getPreference(prefName, defaultValue) {
    return localStorage.getItem(prefName) || defaultValue
}