# Blacksmith Dashboard

The Blacksmith Dashboard enables organizations to have a complete view of their
data engineering solution, on top of [Blacksmith](https://nunchi.studio/blacksmith).

![Blacksmith Dashboard](https://nunchi.studio/images/blacksmith/dashboard.002.png)

The source code of this repository is compiled and exported to be the built-in
dashboard of applications leveraging Blacksmith. It is only available when using
the [Enterprise Edition](https://nunchi.studio/blacksmith/pricing).

To make forks and customization as easy as possible, this repository is available
as an open-source "template" repository.

## Usage

First, you need to create a `.env` file at the root directory of the repository.
It shall be based on the `.env.example` already present.

Then, install dependencies with `npm`:
```bash
$ npm install
```

Finally you can start the dashboard. In development:
```bash
$ npm run dev
```

Or in production:
```bash
$ npm run build
$ npm run start
```

## Version compatibility

This package follows the semantic versioning of [Blacksmith](https://github.com/nunchistudio/blacksmith)
for major and minor versions. For example, the dashboard `v0.18.x` will be compatible
with Blacksmith `v0.18.x`.

## License

Repository licensed under the [Apache License, Version 2.0](./LICENSE).

By downloading, installing, and using Blacksmith, you agree to the
[Blacksmith Terms and Conditions](https://nunchi.studio/legal/terms).
