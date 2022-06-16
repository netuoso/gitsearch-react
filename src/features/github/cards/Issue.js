import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap';

class Issue extends Component {
	render() {
		let { data } = this.props;

		return (
			<Col sm={4} className="mb-20">
				<Card>
				  <Card.Header className="card-header">
					  <span>
						  <a 
						  	target="_blank"
						  	rel="noreferrer"
						  	href={`//github.com/${data.user.login}`}>
						  	{data.user.login}
						  </a>
					  </span>
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
					    {data.title}
				    </Card.Title>
				    <Card.Text className="scroll-body">
				    	{data.body}
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		)
	}
}

export default Issue