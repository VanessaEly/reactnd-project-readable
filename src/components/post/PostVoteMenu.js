import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { fetchVotePost, fetchDoubleVotePost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostVoteMenu extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      currentVote: false,
    }
  }
  handleVote(option) {
    const { id, updateVote, doubleUpdateVote } = this.props;
    const { currentVote } = this.state;
    this.setState({currentVote: option});
    let oppositeOption = option === 'upVote' ? 'downVote' : 'upVote';
    // if there was not vote, simply vote for that option
    if (!currentVote) updateVote(id, option);
    // if we are voting for the opposite option that was selected before, we need to vote two times,
    // one to reset the previous vote, and one to count for the current vote
    else if (currentVote !== option) doubleUpdateVote(id, option);
    // if the option was already voted, just unvote
    else {
      this.setState({currentVote: false});
      updateVote(id, oppositeOption);
    }
  }
  render() {
    
    const { voteScore} = this.props;
    return (
      <div className="thumbs-content card-header-icon">
        <span className="card-header-icon" onClick={() => this.handleVote('upVote')}>
          <i className={`fas fa-thumbs-up ${this.state.currentVote}`} />
        </span>
        {voteScore}
        <span className="card-header-icon" onClick={() => this.handleVote('downVote')}>
          <i className={`fas fa-thumbs-down ${this.state.currentVote}`} />
        </span>
      </div>
    )
  }
}
PostVoteMenu.propTypes = {
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateVote: (id, option) => {
    dispatch(fetchVotePost(id, option));
  },
  doubleUpdateVote: (id, option) => {
    dispatch(fetchDoubleVotePost(id, option));
  },
});

export default connect(null, mapDispatchToProps)(PostVoteMenu);