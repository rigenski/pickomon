import React, {Fragment, Component} from 'react'
import Hero from './Content/Hero'
import Card from './Content/Card'
import axios from 'axios'

class Content extends Component {
    state = {
        data: [],
        count: 100
    }

    getDataAPI = async (id) => {
        const getData = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = getData.data
        this.setState({
            data: [...this.state.data, result]
        })
        
    }
    
    componentDidMount() {
        for (let i = 1; i <= this.state.count; i++) {
            setTimeout(() =>{
                this.getDataAPI(i)
            }, 1000)
        }

    }

    render() {
        return (
            <Fragment>
            <div id="container" className="w-5/5 mx-auto container mx-auto">
                <div className="flex flex-col sm:flex-row flex-wrap">
                    <Hero />
                    {
                        this.state.data.map(data => {
                            return <Card data={data}/>
                        })
                    }
                </div>
            </div>
        </Fragment>
        )
    }
}

export default Content;