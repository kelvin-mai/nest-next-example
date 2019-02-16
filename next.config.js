const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  useFileSystemPublicRoutes: false,
});
