BitBook

  -This is the final project!


Project Structure

bit-book/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    app/
      components/
        zzz.js
      partials/
        loadingSquare/
          Square.js
          Square.css
        Header.js
        Footer.js
      App.js
      App.css
    entities/
      zzz.js
    services/
      zzz.js
    shared/
      constants.js
    index.css
    index.js


Project Components

<HashRouter>
  <App>
    <Fragment>
      <Header />
        <Main>
          <Switch>
            <Routes>
          </Switch>
        </Main>
      <Footer />
    </Fragment>
  </App>
</HashRouter>