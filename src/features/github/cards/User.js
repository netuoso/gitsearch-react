import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap';

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			detailedInfo: false
		}
	}

	componentDidMount() {
		if (this.props.detailed) {
			fetch(this.props.data.url)
				.then(async (resp) => {
						console.log(resp)
					if(resp.ok) {
						this.setState({detailedInfo: JSON.parse(await resp.text())})
					} else {
						this.setState({error: JSON.parse(await resp.text())})
					}
				})
				.catch((err) => {
					console.error(err);
				})
		}
	}

	componentWillUnmount() {
		this.setState({error: false, detailedInfo: false})
	}

	renderCard = () => {
		let { error, detailedInfo } = this.state;
		let { data, detailed } = this.props;

		if(error) {
			return (
				<Card>
				  <Card.Header className="card-header">
					    <img alt="avatar" width="250px" src={data.avatar_url} />
				  </Card.Header>
				  <Card.Body>
				    <Card.Title className="text-center">
				    	{JSON.stringify(error)}
				    </Card.Title>
				  </Card.Body>
				</Card>
			)
		} else if (detailed) {
			return (
				<Card>
				  <Card.Header className="text-center">
					    <img alt="avatar" width="250px" src={data.avatar_url} />
				  </Card.Header>
				  <Card.Body>
				    <Card.Title className="text-center">
				    	<p>{detailedInfo.name} - ({detailedInfo.login})</p>
				    	<p>{detailedInfo.company}</p>
				    	<p>{detailedInfo.bio}</p>
				    	<p>Followers: {detailedInfo.followers}</p>
				    	<p>Followering: {detailedInfo.following}</p>
				    	<p>Public Repo #: {detailedInfo.public_repos}</p>
				    </Card.Title>
				  </Card.Body>
				</Card>	
			)
		} else {
			return (
				<Col sm={3} className="mb-20">
					<Card>
					  <Card.Header>
						  <Button variant="secondary" href={data.html_url} target="_blank" rel="noreferrer">View on Github</Button>
					  </Card.Header>
				      <Card.Img variant="top" src={data.avatar_url} />
					  <Card.Body>
					    <Card.Title className="text-center">
						    <Button
						    	className="btn btn-primary"
						    	onClick={() => this.props.setSelectedUser(data)} >
						    	{data.login}'s Details
					    	</Button>
					    </Card.Title>
					  </Card.Body>
					</Card>
				</Col>
			)
		}
	}

	render() {
		return this.renderCard();
	}
}

export default User