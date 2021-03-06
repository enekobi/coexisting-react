# COEXISTING REACT VERSIONS (WIP)

A project to test how different React versions can coexist in a same site. The project consists in a regular Gatsby site which will fetch another React app and inject it to it's DOM. Both projects will have their own different React version so this will help us test and manage how can affect injecting our apps directly to another site's DOM without realying on an iframe, and if one version overwrites the other. Also, we'll test the same with styles.

![screenshot](./screenshot.png)

## Issues (notes shown in the screen)

1. Styles
2. Watch out with assets. Could not be added to the bundle by default
3. Element ids
4. Race condition when attaching app to site's #root elem.

## Updates!!

We have changed the site to load the **wrapped-app inside an iframe. The styles that were overwritting before aren't now, so both apps are running on trully insulated environments.**
![oniframe](./oniframe.png)

## To run

1. Clone the repo.
2. Install both folders (some-site and wrapped-app) dependencies
3. run `yarn dev` from the root folder.
4. Once up, go to http://localhost:8000

