export function success(message, data) {
    return { message, count: data.length, data }
}