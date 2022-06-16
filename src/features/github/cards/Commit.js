import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap';

class Commit extends Component {
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
				    <Card.Title
				    	style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
					    {data.commit.author.name}<br/>
					    <span style={{fontSize: '13px'}}>{data.sha}</span>
				    </Card.Title>
				    <Card.Text className="scroll-body">
					    {data.commit.message}
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		)
	}
}

export default Commit