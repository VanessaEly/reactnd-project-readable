import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../UserAvatar';
import CardBody from '../card/CardBody';
import TextInputField from '../TextInputField';
import { handleAddPost } from '../../actions/posts';
import { generateId } from '../../utils/shared';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      title: '',
      author: '',
      category: false,
    }
  }
  /**
   * Handles changes on the inputs
   */
  handleChange = (e) => {
    this.setState({[e.target.name.toLowerCase()]: e.target.value});
  }
  /**
   * Handles category selection
   */
  selectCategory = (categoryName) => {
    this.setState({ category: categoryName });
  }
  selectCategory
  /**
   * Toggles the post edit mode and clears all inputs
   */
  toggleEditMode = (mode) => {
    this.setState(({ isEditMode }) => ({
      isEditMode: mode ? mode : !isEditMode,
      title: '',
      author: '',
      category: false,
    }));
  }
  /**
   * Handles the savePost method, which is triggered by the 'save' button.
   */
  handleSavePost = (body) => {
    const { addPost } = this.props;
    const { title, author, category } = this.state;
    if (title.trim().length > 0 && author.trim().length > 0 && body.trim().length > 0 && category) {
      const newPost = {
        id: generateId(),
        title,
        author,
        body,
        timestamp: Date.now(),
        category,
      };
      addPost(newPost);
      this.toggleEditMode();
    }
  }
  render() {
    const {
      title,
      author,
      isEditMode,
      category,
    } = this.state;
    const { categories } = this.props;
    
    return (
      <div className="columns is-centered">
        <div className="column is-half is-centered">
          <div className="card">
            <header className="card-header" onClick={() => this.toggleEditMode(true)}>
              <div className="media card-header-title">
                <UserAvatar author={author}/>
                <input
                    className="input"
                    type="text"
                    placeholder="Add a new post"
                    value={title}
                    name="title"
                    onChange={this.handleChange}
                  />
                {isEditMode && title.trim().length === 0
                  && <p className="help is-danger">Title requires at least one character</p>
                }
              </div>
            </header>
            {isEditMode
              && <div className='card-content'>
                <div className="tags is-centered">
                  {Object.keys(categories).map((id) =>(
                    <span
                      key={id}
                      className={`tag ${categories[id].name === category ? 'is-primary' : 'is-light'}`}
                      onClick={() => this.selectCategory(categories[id].name)}>
                      {categories[id].name}
                    </span>
                  ))}
                </div>
                {!category
                  && <span className="tags is-centered help is-danger">Select a category</span>
                }
                <TextInputField name='Author' withLabel={true} value={author} handleChange={this.handleChange} />
                <CardBody
                  body={''}
                  withLabel={true}
                  handleSave={this.handleSavePost}
                  toggleEditMode={this.toggleEditMode}
                />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addPost: (details) => {
    dispatch(handleAddPost(details));
  },
});

function mapStateToProps ({ categories }) {
  return {
    categories,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);