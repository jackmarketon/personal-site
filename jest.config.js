module.exports = {
  setupFiles: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': 'identity-obj-proxy'
  },
  transform: {
//    '\\.(gql|graphql)': 'jest-transform-graphql',
    '.*': 'babel-jest'
  }
};

