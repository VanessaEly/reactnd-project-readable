import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { fetchVotePost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostVoteMenu extends PureComponent {
  vote(option) {
    this.props.updateVote(this.props.id, option);
  }
  render() {
    
    const { voteScore} = this.props;
    return (
      <div className="thumbs-content card-header-icon">
        <span className="card-header-icon" onClick={() => this.vote('upVote')}>
          <i className="fas fa-thumbs-up" />
        </span>
        {voteScore}
        <span className="card-header-icon"  onClick={() => this.vote('downVote')}>
          <i className="fas fa-thumbs-down" />
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
});

export default connect(null, mapDispatchToProps)(PostVoteMenu);