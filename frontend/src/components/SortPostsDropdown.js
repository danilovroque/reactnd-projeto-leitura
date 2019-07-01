import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { handleSavePreferenceOrderPosts } from '../actions/preferences'

const options = [
    { key: 1, text: 'Relevância', value: 'score' },
    { key: 2, text: 'Mais novo', value: 'newest' },
    { key: 3, text: 'Mais velho', value: 'oldest' }
]

class SortPostsDropdown extends Component {

    handleChange = (e, { value }) => {
        this.props.dispatch(handleSavePreferenceOrderPosts(value))
    }

    render () {
        const { orderBy } = this.props
        return (
            <Dropdown 
                text='Ordenar por'
                value={orderBy}
                options={options}
                onChange={this.handleChange}
            />
        )
    }
}

function mapStateToProps({ preferences = {} }) {

    if (preferences.orderBy === undefined || preferences.orderBy === '') {
        preferences.orderBy = 'score'
    }

    const { orderBy } = preferences
    return {
        orderBy
    }
}

export default connect(mapStateToProps)(SortPostsDropdown)