

# Kometa Brno - Swimming - Headless CMS
Content management system for Kometa Brno swimming club.

> Repository for the websites is located [here](https://github.com/Kapaak/kometa-web)

## 🚀 Project Structure

```text
├── components
├── customTypes
├── schemaTypes
├── src/
│   ├── constants.ts
│   ├── structure.ts
└── package.json
```

## ❗️ How to generate schema types
> [Sanity documentation](https://www.sanity.io/learn/course/typescripted-content/configuring-sanity-typegen-for-multiple-folder-projects)

- Generate schema.json by typing ```yarn extract-schema```.
- Create new types by typing ```yarn generate-fe-types```.
- Configurate path in ```sanity-typegen.json``` to link with FE folder.
- Generate FE types in the path configured in ```sanity-typegen.json``` and type ```yarn sanity typegen generate```


## 💡 Start the development
- Use yarn package manager.
- Development is in port 3333 and start it by typing ```yarn dev```.
