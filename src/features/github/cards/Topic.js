import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap';

class Topic extends Component {
	render() {
		let { data } = this.props;

		return (
			<Col sm={4} className="mb-20">
				<Card>
				  <Card.Header className="card-header">
					  <span>{data.name}</span>
					  <Button
						variant="secondary"
					  	href={`//github.com/topic/${data.name}`}
					  	target="_blank"
					  	rel="noreferrer">
					  		View on Github
					  </Button>
				  </Card.Header>
				  <Card.Body>
				    <Card.Title className="text-center">
				    </Card.Title>
				    <Card.Text className="text-center">
					    <strong>Created By:</strong> {data.created_by || '??'}<br/>
					    {data.short_description || data.description}
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		)
	}
}

export default Topic