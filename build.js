
const { build } = require("esbuild")
const path = require("path")
const fs = require("fs")

// サーバー側のビルド
const serverOptions = {
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  minify: true,
  bundle: true,
  target: "es2020",
  platform: "node",
  outdir: path.resolve(__dirname, "dist"),
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  external: fs.readdirSync("./node_modules")
}
build(serverOptions).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})