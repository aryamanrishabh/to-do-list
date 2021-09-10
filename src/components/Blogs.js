import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/fetchPostsActions";
import { fetchUsers } from "../actions/fetchUsersActions";
import Result from "./Result";

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: null,
      showUsers: false,
      showPosts: false,
    };
  }
  generateRandomPosts = () => {
    let posts = new Set();
    while (posts.size !== 3) {
      posts.add(Math.floor(Math.random() * 100));
    }
    return Array.from(posts);
  };

  generateRandomUsers = () => {
    let users = new Set();
    while (users.size !== 3) {
      users.add(Math.floor(Math.random() * 10));
    }
    return Array.from(users);
  };

  render() {
    console.log(this.props, "blog props");

    const posts = this.generateRandomPosts();
    const users = this.generateRandomUsers();

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2">
            <div className="form-check">
              <input
                className="form-check-input my-1"
                type="radio"
                value="users"
                onClick={() => {
                  if (!this.props.users) {
                    this.props.fetchUsers();
                    this.setState({ showUsers: true, showPosts: false });
                  } else this.setState({ showUsers: true, showPosts: false });
                }}
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label h5 text-white"
                htmlFor="flexRadioDefault1"
              >
                Users
              </label>
            </div>
            <div className="form-check my-1">
              <input
                className="form-check-input"
                type="radio"
                value="posts"
                onClick={() => {
                  if (!this.props.posts) {
                    this.props.fetchPosts();
                    this.setState({ showPosts: true, showUsers: false });
                  } else this.setState({ showPosts: true, showUsers: false });
                }}
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label h5 text-white"
                htmlFor="flexRadioDefault1"
              >
                Posts
              </label>
            </div>
          </div>
          <div className="col-md-10">
            <Result
              showPosts={this.state.showPosts}
              showUsers={this.state.showUsers}
              randomPosts={posts}
              randomUsers={users}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, {
  fetchPosts,
  fetchUsers,
})(Blogs);
