import styles from './App.module.css';
import { Container } from './components/container/Container';
import { Spacer } from './components/spacer/Spacer';
import { AppHeader } from './components/header/AppHeader';
import { BookmarkList } from './components/bookmark/BookmarkList';
import { Footer } from './components/footer/Footer';
import { BookmarkContextProvider } from './context/bookmark-context';
import { SearchContextProvider } from './context/search-context';

function App() {
  return (
    <BookmarkContextProvider>
      <SearchContextProvider>
        <div className={styles['background']}>
          <Spacer />
          <Container>
            <AppHeader />
            <BookmarkList />
          </Container>
          <Spacer />
          <Footer />
        </div>
      </SearchContextProvider>
    </BookmarkContextProvider>
  );
}

export default App;
