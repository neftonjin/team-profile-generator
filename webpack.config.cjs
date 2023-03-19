
import path from "path"

module.exports = {
  // ... other configuration options
  resolve: {
    extensions: ['.js', '.jsx'], // file extensions to resolve
    modules: [
      path.resolve(__dirname, 'src'), // include the src directory
      'node_modules' // include node_modules
    ]
  }
}