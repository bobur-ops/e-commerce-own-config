module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)

  const presets = [
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
    'mobx',
  ]

  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    process.env.NODE_ENV === 'development' && 'react-refresh/babel',
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ].filter(Boolean)

  return {
    presets,
    plugins,
  }
}
