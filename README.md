# rpgmaker-mv-typescript-webpack
This is a boiler plate for using webpack and typescript with rpg maker mv.

To use it, copy the contents into your project directory (by default on windows, it's `documents/Games/project_name`). If you use git in your game project, you may not want to copy over the `.gitignore` and just add `node_modules` to your existing ignore file.

The code for each plugin is in a subfolder in the `my_plugins` folder. The name of the plugin will be the name of the subfolder. 

By default, there are two **EXTREMELY CREATIVELY NAMED** plugins, `plugin1` and `plugin2`.

## To build the plugins

First, [cut a hole in a box](https://www.youtube.com/watch?v=VHQBgOZKk6k).

Ok, seriously, first you need [nodejs](https://nodejs.org/). Install it, and make sure the `npm` command works in your cmd/powershell/terminal. 

Next, go to your game directly where you copied these files, and run `npm install` to install all the dependencies.

To compile your plugin files into othe final plugin js file in the `js/plugins` folder, run `npm run plugin1-build` or `npm run plugin2-build` for plugin1 or plugin2.

## Development time

I suggest using [vscode](https://code.visualstudio.com) when writing plugins because it has jawsome support for typescript, and with [Narazaka's typings](https://github.com/Narazaka/rpgmakermv_typescript_dts), you'll get jawesome intellisense while coding.

For developoment, I suggest using the watch scripts, `npm run plugin1-watch`. These will detect changes when you save files, and automagically compile/build the plugins as you work. It's super duper pooper fast.

I used multiple files (`main.ts` and `myPlugin.ts`) to show that you don't have to stick everything into one file. But you could put everything in `main.ts` if your are an inferior being from a mystical plane of migets. 

## Changing plugin name

Rename the folders `plugin1` or `plugin2` to be whatever you want. Der! gosh...

## Creating a new plugin

You want more plugins? God damn plugin horder are ya?

Creating new ones is easy.

1. Add a new folder under `my_plugins`
2. copy the `webpack.config.js` from one of the existing plugin folders
3. Add a `main.ts` file for your plugin entry point
4. Add the script entries in the `package.json` for the new plugin.
5. `???`
6. profit

## Conclusion

This will make you pee your pants wondering how you ever lived with the old way of making plugins.