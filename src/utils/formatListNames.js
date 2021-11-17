const formatListNames = (value) => value.charAt(0).toUpperCase() + value.slice(1).replaceAll('_', ' ')

export default formatListNames