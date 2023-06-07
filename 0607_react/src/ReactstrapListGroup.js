import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
class ReactstrapListGroup extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color="danger" className="justify-content-between">Badge
            <Badge pill>1000</Badge>
          </ListGroupItem>
          <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
          <ListGroupItem tag="a" href="http://example.com">Link</ListGroupItem>
          <ListGroupItem tag="button" action onClick={e => alert("button")}>Button</ListGroupItem>
          <ListGroupItem tag="button" action onClick={e=> alert("끼에엑")}>누르지마시오</ListGroupItem>
        </ListGroup>
      </>
    )}
}
export default ReactstrapListGroup;