# fe-tools-astro-fwb

## Build Setup

Add an entry in your hosts file for `http://dev.nextgenstats.nfl.com:8080/`

`127.0.0.1 	dev.nextgenstats.nfl.com`

You need to view your dev build at `http://dev.nextgenstats.nfl.com:8080/`. The API calls use fetch and the site url is set to `http://dev.nextgenstats.nfl.com:8080/` in `.env.development`.

```bash
# build for dev
yarn install

# run in dev
yarn dev

# build for production
yarn build

# run in production mode
yarn st
```

## URLs

TBD

## Libraries

- Flowbite
- Astro
- Tailwind
- Reef
- Nanostores - query and persistent
