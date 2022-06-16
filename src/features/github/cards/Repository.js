import React, { Component } from 'react'
import { Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShareNodes } from '@fortawesome/free-solid-svg-icons'

class Repository extends Component {
	render() {
		let { data } = this.props;

		return (
			<Col sm={4} className="mb-20">
				<Card>
				  <Card.Header className="card-header">
					  <OverlayTrigger
					    placement="bottom"
					    delay={{ show: 250, hide: 400 }}
					    overlay={<Tooltip>{data.stargazers_count}</Tooltip>}
					  >
						  <span style={{paddingRight:"5px"}}><FontAwesomeIcon size="2x" icon={faStar} /></span>
					  </OverlayTrigger>
					  <OverlayTrigger
					    placement="bottom"
					    delay={{ show: 250, hide: 400 }}
					    overlay={<Tooltip>{data.forks_count}</Tooltip>}
					  >
					  	<span style={{paddingLeft:"5px",paddingTop:"2px"}}><FontAwesomeIcon size="2x" icon={faShareNodes} /></span>
					  </OverlayTrigger>
					<Button
						variant="secondary"
					  	href={data.html_url}
					  	target="_blank"
					  	rel="noreferrer" >
					  	View on Github
				  	</Button>
				  </Card.Header>
				  <Card.Body>
				    <Card.Title className="text-center">
				    	{data.full_name}
				    </Card.Title>
				    <Card.Text className="text-center">
				    	<strong>Owner: {data.owner.login}<br/></strong>
				    	{data.license ? <span>License: {data.license.name}<br/></span> : ""}
				    	<span>{data.description}</span>
				    </Card.Text>
				  </Card.Body>
				  <Card.Footer>
					<Button
						style={{marginRight: "5px"}}
					  	href={`${data.html_url}/issues`}
					  	target="_blank"
					  	rel="noreferrer" >
					  	Issues
				  	</Button>
					<Button
						style={{marginLeft: "5px"}}
					  	href={`${data.html_url}/pulls`}
					  	target="_blank"
					  	rel="noreferrer" >
					  	Pull Requests
				  	</Button>
				  </Card.Footer>
				</Card>
			</Col>
		)
	}
}

export default Repository