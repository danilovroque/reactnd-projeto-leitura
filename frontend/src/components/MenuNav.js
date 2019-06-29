import React, { Component } from 'react'
import { Image, Menu, Dropdown, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import logo from '../logo.svg';
import NewPost from './Posts/NewPost'

class MenuNav extends Component {
    render () {
        const { categories } = this.props
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
                                        <Dropdown.Item key={c.name} text={c.name} />
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>

                    <Menu.Item name='register'>
                        <Dropdown text='Ordenar por'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Relevância' />
                                <Dropdown.Item text='Mais novo' />
                                <Dropdown.Item text='Mais velho' />
                            </Dropdown.Menu>
                        </Dropdown>
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

function mapStateToProps ({ categories }) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(MenuNav)