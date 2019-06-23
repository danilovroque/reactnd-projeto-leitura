import React from 'react'
import { Container, Image, Menu, Dropdown } from 'semantic-ui-react'
import logo from '../logo.svg';

export default () => (
    <Menu inverted>
        <Menu.Item as='a' header>
            <Image
                size='mini'
                src={logo}
            />
            Leitura
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='categoria'>
                <Dropdown text='Categoria'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Teste1' />
                        <Dropdown.Item text='Teste2' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

            <Menu.Item name='register'>
                <Dropdown text='Ordenar por'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Relevância' />
                        <Dropdown.Item text='Data' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)