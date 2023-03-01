import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             names: importedNames
        }
    }
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filteredNames = importedNames.filter(name1 => {
            return name1.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }
    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <p>matching names found: {this.state.names.length}</p>
                <form>
                    <input
                        onChange={(event) => this.handleChange(event)}
                        type="text"
                        placeholder="searching"
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    {this.state.names.map(name1 => {
                        return <p key={name1}>{name1}</p>
                    })}
                </div>
            </div>
        )
    }
}