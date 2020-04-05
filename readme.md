# COEXISTING REACT VERSIONS (WIP)

A project to test how different React versions can coexist in a same site. The project consists in a regular Gatsby site which will fetch another React app and inject it to it's DOM. Both projects will have their own different React version so this will help us test and manage how can affect injecting our apps directly to another site's DOM without realying on an iframe, and if one version overwrites the other. Also, we'll test the same with styles.

##Issues

1. Styles
2. Element ids
3. Race condition when attaching app to site's #root elem.
