import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class TwitterForm extends React.Component {
  state = { title: '', file: '' }

  onDrop = (files) => {
    this.setState({ file: files[0] })
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { title, file } = this.state;
    data.append('title', title);
    data.append('img', file);
    axios.post('/api/posts', data)
      .then( res => {
        this.props.addPost(res.data)
        this.setState({ title: '', file: '' })
      })
  }

  render() {
    return (
      <div>
        <Header as="h3">What is on your mind?</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          required
          label="Say Something"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Dropzone
          style={
            {
              marinBottom: '15px',
              border: 'solid 1px maroon',
              width: '65%',
              height: '50px',
              textAlign: 'center'
            }
          }
          onDrop={this.onDrop}
          multiple={false}
        >
          Want to add an image?
        </Dropzone>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default TwitterForm;