import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Displays and handles up and down votes, as long as the user's score
 */
class CardVoteMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVote: false,
    };
  }
  /**
   * Function used to handle up and down votes that were pressed by the user. This calls the
   * 'updateVote' function that was received as props, allowing it to be used by both
   * posts and comments.
   * @param {string} option - Which vote option was pressed, could be 'upVote' or 'downVote'
   */
  handleVote(option) {
    const { id, updateVote } = this.props;
    const { currentVote } = this.state;
    this.setState({ currentVote: option });
    const oppositeOption = option === 'upVote' ? 'downVote' : 'upVote';
    // if there was not vote, simply vote for that option
    if (!currentVote) updateVote(id, option);
    // if we are voting for the opposite option that was selected before, we need to vote two times
    else if (currentVote !== option) updateVote(id, option, true);
    // if the option was already voted, just unvote
    else {
      this.setState({ currentVote: false });
      updateVote(id, oppositeOption);
    }
  }
  render() {
    const { voteScore } = this.props;
    const { currentVote } = this.state;

    return (
      <div className="thumbs-content card-header-icon">
        <span
          className="card-header-icon"
          onClick={() => this.handleVote('upVote')}
          role="presentation"
        >
          <i className={`fas fa-thumbs-up ${currentVote}`} />
        </span>
        {voteScore}
        <span
          className="card-header-icon"
          onClick={() => this.handleVote('downVote')}
          role="presentation"
        >
          <i className={`fas fa-thumbs-down ${currentVote}`} />
        </span>
      </div>
    );
  }
}

CardVoteMenu.propTypes = {
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired,
};

export default CardVoteMenu;
