import React from 'react';
import TwitterForm from './TwitterForm';
import Post from './Post';
import axios from 'axios';

class Home extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => this.setState({ posts: res.data }) )
  }
  // FIXME
  addPost = (post) => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts ] })
  }

  render () {
    const { posts } = this.state;
    const twitterPosts = posts.map( p => <Post key={p.id} {...p} /> );
    return (
      <div>
        <TwitterForm addPost={this.addPost} />
        {twitterPosts}
      </div>
    )
  }
}

export default Home;