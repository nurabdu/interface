import React, { Component } from 'react';
import styled from 'styled-components';

const ClassStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;
class ClassComponent extends Component {

    constructor(props) {
        super(props)

        this.props = props;
    }
    render() {
        return (<ClassStyle>
            <div>{this.props.name} {this.props.age}</div>
        </ClassStyle>
        )
    }
}

export default ClassComponent;