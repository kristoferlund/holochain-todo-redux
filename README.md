# holochain-todo-redux

🤖 **This repo is no longer maintained and updated to support holochain beyond version v0.0.4-alpha**

[Gatsby](https://github.com/gatsbyjs/gatsby)/React example using redux and [hc-redux-middleware](https://github.com/holochain/hc-redux-middleware) to communicate with holochain hApp [todo-list](https://github.com/willemolding/holochain-rust-todo).

Builds under the v0.0.4-alpha release of holochain-rust

![img](https://user-images.githubusercontent.com/9698363/52596910-c8f15a80-2e51-11e9-94cb-11bca428a65b.gif)

## Prerequisites

[Holochain developer tools](https://developer.holochain.org/start.html)

## Run

Terminal 1:

```
hc run
```

Terminal 2:

```
cd ui
npm install
npm run develop
```

## Todos

- [ ] Tests are not working - fix
- [ ] Add handling for checking items completed true/false
- [ ] Add form to allow for other than dummy list item titles
- [ ] Edit list name
- [ ] Edit list item
- [ ] User handling?
- [ ] Share lists?
- [x] Improve handling of duplicate entries
