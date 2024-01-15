## Contribute

### Add a social media

1. add an entry to the object in the script `/packages/static/src/generateConfig.mjs`
2. add an entry in the `/packages/static/src/config` folder (I'll add the svg 😜)
3. if the new social media has a property which has never been used before, please, also update the `defaultValueForDoc` object in the same file

### Add a framework

It's still unclear if I will switch to [Mitosis](https://github.com/BuilderIO/mitosis) to support many framework at once.

In the mean time, you have to:

1. copy the `/packages/react` folder
2. configure the project:

- name, version, dependencies in `package.json`
- build in `rollup.config.mjs`

3. implement `Icon.tsx` and `Link.tsx`
4. implement the templates used to generate all the components in `/templates`
5. if you've made it so far, thank you so much, you can add the new framework support in the doc!
