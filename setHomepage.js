const fs = require('fs');
const packageJson = require('./package.json');

const homepage = process.env.REACT_APP_HOMEPAGE || null;
packageJson.homepage = homepage;

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));