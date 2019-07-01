import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Image, Menu, Dropdown, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import logo from '../logo.svg';
import NewPost from './Posts/NewPost'
import SortPostsDropdown from './SortPostsDropdown'

class MenuNav extends Component {
    render () {
        console.log('props: ', this.props)
        const { categories, location: { pathname } } = this.props
        return (
            <Menu inverted>
                <Menu.Item as='a' header>
                    <Image
                        size='mini'
                        src={logo}
                    />
                    Leitura
                </Menu.Item>

                <Menu.Menu position='left'>
                    <Menu.Item name='categoria'>
                        <Dropdown text='Categoria'>
                            <Dropdown.Menu>
                                { 
                                    categories.map((c) => (
                                        <Dropdown.Item 
                                            key={c.name} 
                                            text={c.name} 
                                            as={Link}
                                            to={`/${c.path}`}
                                            active={pathname.includes(c.path)}
                                        />
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    
                    <Menu.Item>
                        <SortPostsDropdown />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <NewPost 
                            trigger={(
                                <Button primary size='mini'>
                                    Novo Post
                                </Button>
                            )}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

function mapStateToProps ({ categories }, props) {
    return {
        categories,
        ...props
    }
}

export default withRouter(connect(mapStateToProps)(MenuNav))