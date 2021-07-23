import Nullstack from 'nullstack';
import SalesPage from './course-fullstack/SalesPage';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link 
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        <SalesPage route="/" />

        <span href="/"></span>
      </main>
    )
  }

}

export default Application;