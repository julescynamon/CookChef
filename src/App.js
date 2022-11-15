import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
// import { seedRecipes } from './data/seed';

// seedRecipes();

function App() {
    const user = useLoaderData();

    console.log(user);
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <div className="d-flex flex-column flex-fill">
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default App;
