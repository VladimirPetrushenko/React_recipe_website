import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Meal } from "./pages/Meal";
import { RandomMeal } from "./pages/RandomMeal";

function App() {
    return (
        <>
            <Router basename='/React_recipe_website'>
                <Header />
                <main className="container content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contact} />
                        <Route path="/random-recipe" component={RandomMeal} />
                        <Route path="/category/:strCategory" component={Category} />
                        <Route path="/meal/:id" component={Meal} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
