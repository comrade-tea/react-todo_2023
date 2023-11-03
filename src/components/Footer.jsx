export const Footer = () => {
    return (
        <footer className="py-3 bg-dark text-white">
            <div className="container">
                <div className="row gy-1 align-items-center justify-content-between">
                    <div className="col-auto">
                        <div>
                            <a className="link-info" href="https://github.com/comrade-tea/react-todo_2023"
                               target="_blank" rel="noreferrer">
                                <i className="bi-github fs-5 me-2"></i>
                                source files
                            </a>
                        </div>
                    </div>
                    <div className="col-auto">
                        created by <a className="link-info" href="https://comrade-tea.github.io/" target="_blank"
                                      rel="noreferrer">comrade-tea</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
