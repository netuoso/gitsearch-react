import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap';

class Code extends Component {
	render() {
		let { data } = this.props;

		return (
			<Col sm={4} className="mb-20">
				<Card>
				  <Card.Header className="card-header">
					  <span>{data.repository.name}</span>
					  <Button
					  	variant="secondary"
					  	style={{float: "right"}}
					  	href={data.html_url}
					  	target="_blank"
					  	rel="noreferrer">
					  		View on Github
					  	</Button>
				  </Card.Header>
				  <Card.Body>
				    <Card.Title>
					    Name: {data.name}<br/>
					    Path: {data.path}
				    </Card.Title>
				  </Card.Body>
				</Card>
			</Col>
		)
	}
}

export default Code