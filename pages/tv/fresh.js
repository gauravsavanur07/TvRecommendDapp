import { Component } from 'react'

import { initStore } from '../../mobx/store'

import Page from '../../components/page'

export default class Fresh extends Component {

async getInitialProps({ req ] ) {
res = await fetch(process.env.BACKEND_URL + '/fresh')
const isServer = !!req  
const store = initStore 

return {

	shows.
	IsServer 
	} 
}


constructor (props) {
super(props) 
this.store= initStore(props.IsServer, props.shows) 
} 


	render() {
	return (
	<Page type='fresh' store ={this.store)/> 
	) }
    }
}
