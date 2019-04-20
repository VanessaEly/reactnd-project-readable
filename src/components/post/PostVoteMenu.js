import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { fetchVotePost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostVoteMenu extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      upVote: false,
      downVote: false,
      voted: false,
    }
  }
  handleVote(option) {
    const { id, updateVote } = this.props;
    const { upVote, downVote, voted } = this.state;

    switch (option) {
      case 'downVote' :
        this.setState({downVote: !downVote})
        if (upVote) {
          this.setState({upVote: false})
        }
        break
      case 'upVote' :
        this.setState({upVote: !upVote})
        if (downVote) {
          this.setState({downVote: false})
        }
        break
      default: break;
    };

    let notActived
    let opposite

    switch (option) {
      default:
      case 'downVote' :
        opposite = 'upVote'
        notActived = downVote
        break
      case 'upVote' :
        opposite = 'downVote'
        notActived = upVote
        break
    }
    console.log('state = ', this.state);

    if (!notActived) {
      if (voted) {
        updateVote(id, option)
      }
      this.setState({voted: true})
      return updateVote(id, option)
    }
    else {
      this.setState({voted: false})
      return updateVote(id, opposite)
    }
    
  }
  render() {
    
    const { voteScore} = this.props;
    return (
      <div className="thumbs-content card-header-icon">
        <span className="card-header-icon" onClick={() => this.handleVote('upVote')}>
          <i className={`fas fa-thumbs-up${this.state.upVote ? ' upVote' : ''}`} />
        </span>
        {voteScore}
        <span className="card-header-icon" onClick={() => this.handleVote('downVote')}>
          <i className={`fas fa-thumbs-down${this.state.downVote ? ' downVote' : ''}`} />
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