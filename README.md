# UI components extending components from Mantine

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run storybook`

To see the changes live in storybook

### `npm run build-storybook`

To create storybook-static folder which can then be hosted

## Storybook link:
https://65813f4a58f3e674f295bb25--bespoke-gnome-49d690.netlify.app/?path=/story/components-lyricbutton--primary

## Folder structure

<img width="280" alt="image" src="https://github.com/Sanjalee22/lyric-ui/assets/34329090/6741f414-026c-4e8a-a86f-ed7c6a2e3971">


## Observations
The project is structured in such a  way that it is ready to be published on npm with all the exports being done from the projects entry point -> index.tsx. This would make imports from the package by the consumer app easy and readable.

Apart from the components, theme and CSS variable resolver will also be available to the consumer application. The consumer application can import the theme and variable resolver to set up it's Mantine Provider. This is an essential step for the consumer to use the components provided by the library. 

For example:

<img width="704" alt="image" src="https://github.com/Sanjalee22/lyric-ui/assets/34329090/f2ef8f12-4f06-470c-9d18-6d09a02f8320">

