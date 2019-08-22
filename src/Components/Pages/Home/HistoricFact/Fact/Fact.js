import React, { Component } from 'react';
import styled from 'styled-components'
import { AssetService } from '../../../../../Services/AssetService';

const Wrapper = styled.div.attrs({
    className: "col s9"
})`
    color:#FAFAFA;
`
const Quote = styled.p.attrs({
    className: 'signature'
})`
    font-size:12px;
    letter-spacing:0.5px;
`
const Signature = styled.small.attrs({
    className: 'signature'
})`
    display:block;
    text-align:right;
    font-size:12px;
    color: #FAFAFA;
`

class Fact extends Component {
    constructor(props){
        super(props)
        this.state = {
          facts:[],
          allFacts:[],
          isLoading: false
        };
      }
      componentDidMount = async () => {
        this.setState({ isLoading: true })
        await AssetService.getFacts().then(facts => {
          this.setState({
            facts: facts.slice(0,1),
            allFacts: facts,
            isLoading: false,
          })
        })
      }
    render() {
        const { facts, allFacts } = this.state;
        return (
            <Wrapper>
                {facts.map(facts => 
                <Quote>
                    {facts.body}
                    <Signature>{facts.source}</Signature>
                </Quote>
                )}
            </Wrapper>
        )
    }
}

export default Fact;