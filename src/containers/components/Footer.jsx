import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-gray-800 mt-8">
                <nav className="text-center p-4 ">
                            <h4
                            className="text-gray-400 mt-1"
                            >
                                Show project on <a href="https://github.com/rygenzx" id="icon-github"
                                ><i className="fab fa-github"></i
                                > Github</a>
                            </h4>
                            <h4 
                            className="text-gray-400 mb-2 mt-1"
                            >
                                Made with <i class="fas fa-coffee"id="icon-coffe"></i> by <a className="font-medium" href="http://rygenzx.github.io" id="name-footer">Rygen Maulana</a>
                            </h4>
                        
                </nav>
            </footer>
        )
    }
}

export default Footer;