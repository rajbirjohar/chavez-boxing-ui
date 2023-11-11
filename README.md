# Chavez Boxing UI

This project was created to refresh the old Chavez Boxing website. Created in Astro, it prioritizes
performance and accessibility. This not a true open source project, but I am making it public for
anyone who wants to see how I built it.

You can see the live site at [chavez-boxing.vercel.app](https://chavez-boxing.vercel.app).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin this project, ensure you have met the following requirements:

- You have installed the latest version of `node`
- You have installed the latest version of `pnpm`. You can install it with `npm i -g pnpm` (or choose your favorite package manager).
- You have a Payload backend running at `http://localhost:8000`. You can find the repo [here](https://github.com/rajbirjohar/chavez-boxing-api) with instructions on how to set it up.

## Installation

Clone and install the packages for the project:

```bash
git clone https://github.com/rajbirjohar/chavez-boxing-ui
cd chavez-boxing-ui
pnpm install
```

Create an `.env` file in the root of the project and add the following:

```bash
PUBLIC_PAYLOAD_API_URL=http://localhost:8000 // PUBLIC is required for Astro to use it on the client
```

## Usage

To start the development server, run:

```bash
pnpm run dev
```

And open up `http://localhost:4321` in your browser.

## Features

### Astro

I selected Astro for this project primarily due to its exceptional performance capabilities and its alignment with the client's specific requirements for a fast, SEO-friendly blog. Astro stands out because it compiles code into static HTML, CSS, and JavaScript, which translates to a significant reduction in load times for end-users. This approach means that the client's website does not require users to download large amounts of JavaScript to render pages, ensuring a quicker and more efficient browsing experience.

The developer experience so far has been superb as well. Astro's documentation is excellent, and the community is very active. I have not run into any issues that I could not resolve with a quick search on the Astro Discord server or GitHub issues page.

### Static Site Generation (SSG)

The site has a recipes blog where the client uses Payload to add recipes which triggers a redeployment on Vercel via a webhook. This approach is not ideal for a large site with many pages due to how long build times can grow, but it works well for this project. I chose to use SSG over SSR because the client does not need to update the site frequently, and the site does not have any other frequent dynamic content.

### Performance

Below are metrics to outline the site's performance:

#### Key Highlights

- **Rapid Build Times** - Build times never exceed more than 45 seconds meaning content is updated quickly.
- **Exceptional Load Speed** - Thanks to SSG, the website loads with all content pre-rendered. This means users enjoy an immediately interactive site from the moment it loads, enhancing user engagement.
- **Optimized for Mobile** -  The site is fully responsive, providing a smooth and consistent experience across all devices, especially on mobile. This responsiveness is crucial in today’s mobile-first digital landscape.
- **Minimal JavaScript Usage** - Minimal JavaScript ensures that the site remains functional and accessible, even when JavaScript is disabled. This approach not only boosts performance but also enhances accessibility for all users.

## Contributing

While the project is public, I am not accepting contributions at this time unless the site needs a bug fix. If you have any questions, feel free to reach out to me at hello@rajbir.io. This repo is meant to be a reference for anyone looking to build a simple full-stack site with Astro and Payload.

## License

It's simple. Don't take credit for what you didn't do. If you want to use this code, feel free to do so, but please don't claim it as your own. I spent time building this, and I would appreciate it if you gave me credit for it. Thanks!



