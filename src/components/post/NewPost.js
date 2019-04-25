import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../UserAvatar';
import CardBody from '../card/CardBody';
import TextInputField from '../TextInputField';
import { handleAddPost } from '../../actions/posts';
import { generateId } from '../../utils/shared';

/**
 * Displays and handles a new post form
 */
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
   * Handles category selection, setting the category state
   * @param {string} categoryName - name of the category that was selected
   */
  selectCategory = (categoryName) => {
    this.setState({ category: categoryName });
  }
  /**
   * Toggles the post edit mode and clears all inputs
   * @param {bool} mode - boolean, if passed, sets the edit mode to the value that was passed, else,
   * just sets the edit mode as the opposite as it was before.
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
   * Triggered by the 'save' button.
   * Checks if title, author, body and category are filled and handles post addition.
   * @param {string} body - content of the new post
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
                <div className="media-content">
                  <input
                      className="input"
                      type="text"
                      placeholder="Add a new post"
                      value={title}
                      name="title"
                      onChange={this.handleChange}
                    />
                  {isEditMode && title.trim().length === 0
                    && <p className="subtitle is-7 help is-danger">Title requires at least one character</p>
                  }
                </div>
              </div>
            </header>
            {isEditMode
              && <div className='card-content'>
                <div className="tags is-centered">
                  {Object.keys(categories).map((id) =>(
                    <span
                      key={id}
                      className={`tag pointer ${categories[id].name === category ? 'is-primary' : 'is-light'}`}
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

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
