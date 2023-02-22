import styles from './App.module.css';
import { Container } from './components/container/Container';
import { Spacer } from './components/spacer/Spacer';
import { AppHeader } from './components/header/AppHeader';
import { BookmarkList } from './components/bookmark/BookmarkList';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className={styles['background']}>
      <Spacer />
      <Container>
        <AppHeader />
        <BookmarkList />
      </Container>
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
