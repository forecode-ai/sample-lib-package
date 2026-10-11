# sample-lib-package

Part of the ForeCode test estate. Not a real product, and never actually published.

A small JavaScript library. Every change is tested; a release (run manually) publishes it to the npm registry from the
`release` environment, which needs an approval.

Publishing is simulated: `.github/simulate.sh` makes `npm publish` print what it would do.
