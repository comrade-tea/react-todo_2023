import Card from "@/components/Card.jsx";
import './App.sass'
import {Footer} from "@/components/Footer.jsx";


function App() {
    return (
        <div className="app">
            <header className="bg-light py-4">
                <div className="container">
                    <div className="header">
                        <div className="row">
                            <div className="col-auto">
                                <i className="bi-heartbreak-fill me-2"></i> no logo
                            </div>

                            {/*<div className="col-auto  ms-auto">
                                <em>there will be nav with other projects</em>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </header>

            <main style={{paddingBottom: "10vh"}}>
                <div className="container">
                    <h1 className="my-5">
                        React18 + Bootstrap(css) + Vite = todo-list <i className="bi-heart-fill"></i>
                    </h1>

                    <p>Features! <i className="bi-fire text-danger"></i>: </p>

                    <ul className="list-group-flush">
                        <li><b>"select all"</b> checkbox has 3 states (true/false/indeterminate) and depends on
                            selected "todos"
                        </li>
                        <li><b>inputs</b> have validation</li>
                        <li><b>buttons</b> are locked if there is no actions for them</li>
                        <li><b>overlay</b> in editing mode, and it can be closed by clicking on the overlay</li>
                    </ul>
                    
                    <Card/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default App
