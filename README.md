# Hackathon Board 👨‍💻

A site where people can post hackathons and register hackathons

## Stack

- NextJS
- Chakra UI
- Octocat
- Cypress

## Design 

You can check the design from [DESIGN.md](./DESIGN.md)


## Installation

To install follow these instuctions

**Clone the project:**
git clone https://github.com/JS-Hub-ZW/hackathon-board 

**Navigate to folder:**
```sh
cd hackathon-board 
```

**Install dependencies:**
```sh
pnpm install 
```

**Add configuration:**

Check `.env.example` to see the kind of configuration that we need. Then create an `.env.local` file with your configuration

**Run it up:**
```sh
pnpm dev
```

## Testing 
### Cypress
We use cypres for [E2E tests](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) and for [Components tests](https://docs.cypress.io/guides/component-testing/overview).

To run it type the following:

```sh
pnpm cy:open
```

## Contribution
If you find bugs or if you have new features please create an Issue. You can also check the Issue section and ask to be assigned. We respond within a day.


## Containerization
You should be able to run hackathon board in a Docker container

**Build the image:**

```sh
sudo sh build.sh
```

**Run the image:**

Modify `run.sh` and run it:

```sh
sudo sh run.sh
```