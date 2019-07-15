import React, { Component } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
  min-height:100vh;
  .ql-toolbar{
      background:#f5f5f5;
  }
  .ql-container{
      background:#FAFAFA;
      height:20rem;
  }
`

const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:0;
`

class BlogWriter extends Component {
    constructor(props){
        super(props);
        this.state = { text: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value){
        this.setState({ text: value });
    }

    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];

    render() {
      return (
        <Wrapper>
            <Row>
                <ReactQuill value={this.state.text}
                            onChange={this.handleChange} 
                            modules={this.modules}
                            formats={this.formats}/>
            </Row>
        </Wrapper>
        );
    }
}

export default BlogWriter;