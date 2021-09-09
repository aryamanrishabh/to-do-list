import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/fetchPostsActions";
import { fetchUsers } from "../actions/fetchUsersActions";

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: null,
      showUsers: false,
      showPosts: false,
    };
  }

  //   componentDidMount() {
  //     this.props.fetchPosts();
  //   }

  onChangeValue = (e) => {
    console.log(e.target.value);
  };

  render() {
    console.log(this.props, "blog props");
    // if (this.props.loading) {
    //   return (
    //     <div className="container mt-5">
    //       <div className="row">
    //         <div className="col-md-2">
    //           <div onChange={this.onChangeValue} className="form-check">
    //             <input
    //               className="form-check-input"
    //               type="radio"
    //               value="users"
    //               onClick={this.props.fetchUsers}
    //               name="flexRadioDefault"
    //               id="flexRadioDefault1"
    //             />
    //             <label className="form-check-label" htmlFor="flexRadioDefault1">
    //               Users
    //             </label>
    //           </div>
    //           <div className="form-check">
    //             <input
    //               className="form-check-input"
    //               type="radio"
    //               value="posts"
    //               onClick={this.props.fetchPosts}
    //               name="flexRadioDefault"
    //               id="flexRadioDefault1"
    //             />
    //             <label className="form-check-label" htmlFor="flexRadioDefault1">
    //               Posts
    //             </label>
    //           </div>
    //         </div>
    //         <div className="col-md-10 h1">Loading...</div>
    //       </div>
    //     </div>
    //   );
    // }
    // if (this.props.error) {
    //   return <div className="container mt-5 h1">Request failed!</div>;
    // }

    const condition1 = this.props.error ? (
      <div className="h1">Request Failed!</div>
    ) : this.props.postsLoading || this.props.usersLoading ? (
      <div className="h1">Loading...</div>
    ) : this.state.showPosts ? (
      <div className="card-deck">
        {this.props.posts.slice(0, 4).map((post, i) => (
          <div key={i} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    ) : this.state.showUsers ? (
      <div className="card-deck">
        {this.props.users.slice(0, 3).map((user, i) => (
          <div key={i} className="card">
            <div>{user.name}</div>
          </div>
        ))}
      </div>
    ) : null;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2">
            <div onChange={this.onChangeValue} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="users"
                onClick={() => {
                  if (!this.props.users) {
                    this.props.fetchUsers();
                    this.setState({ showUsers: true, showPosts: false });
                  }
                  this.setState({ showUsers: true, showPosts: false });
                }}
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Users
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="posts"
                onClick={() => {
                  if (!this.props.posts) {
                    this.props.fetchPosts();
                    this.setState({ showPosts: true, showUsers: false });
                  }
                  this.setState({ showPosts: true, showUsers: false });
                }}
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Posts
              </label>
            </div>
          </div>
          <div className="col-md-10">{condition1}</div>
        </div>
      </div>
    );
  }
}

// const posts = (
//   <div className="card-deck">
//     {this.props.posts ? (
//       this.props.posts.slice(0, 4).map((post, i) => (
//         <div key={i} className="card mt-5" style={{ width: "18rem" }}>
//           <div className="card-body">
//             <h5 className="card-title">{post.title}</h5>
//             <p className="card-text">{post.body}</p>
//           </div>
//         </div>
//       ))
//     ) : (
//       <span>Posts?</span>
//     )}
//   </div>
// );

const mapStateToProps = (state) => {
  console.log(state, "blogs");
  return {
    posts: state.posts.posts.data,
    users: state.users.users.data,
    postsLoading: state.posts.loading,
    usersLoading: state.users.loading,
    postError: state.posts.error,
    userError: state.users.error,
  };
};

export default connect(mapStateToProps, {
  fetchPosts,
  fetchUsers,
})(Blogs);
