import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div>
        {this.props.error ? (
          <div className="h1">Request Failed!</div>
        ) : this.props.postsLoading || this.props.usersLoading ? (
          <div className="h1">Loading...</div>
        ) : this.props.showPosts ? (
          <div className="card-deck">
            {this.props.posts.map((post, i) =>
              this.props.randomPosts.includes(i) ? (
                <div key={i} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : this.props.showUsers ? (
          <div className="card-deck">
            {this.props.randomUsers.map((u, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <h5 className="card-title">{this.props.users[u].name}</h5>
                  <p className="card-subtitle text-muted">
                    {this.props.users[u].email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts.data,
    users: state.users.users.data,
    postsLoading: state.posts.loading,
    usersLoading: state.users.loading,
    postError: state.posts.error,
    userError: state.users.error,
  };
};

export default connect(mapStateToProps)(Result);
