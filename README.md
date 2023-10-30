# Reproduction

Using MapboxVectorLayer with a public service may infer incorrect access tokens leading to bad requests.

## Running the example

```bash
$ npm install
$ npm run start
```

Open browser at http://localhost:5173/ and inspect the network console; there should be bad requests to the configured service.
The service's mapbox style document defines that tile requests to the service shall use `f=mvt` but the layer
incorrectly passes `f=mbs` (which was guessed to be the access token).
