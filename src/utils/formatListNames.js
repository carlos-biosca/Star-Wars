const formatListNames = (value) => {
  if (value === 'episode_id') return 'Episode'
  return value.charAt(0).toUpperCase() + value.slice(1).replaceAll('_', ' ')
}

export default formatListNames