import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardVoteMenu from './CardVoteMenu';

/**
 * Creates the footer part of cards
 */
const CardFooter = (props) => {
  const {
    id,
    category,
    voteScore,
    commentCount,
    updateVote,
  } = props;

  return (
    <div className="card-footer media-content">
      <CardVoteMenu id={id} updateVote={updateVote} voteScore={voteScore} />
      {commentCount !== undefined && (
        <Link to={`/${category}/${id}`}>
          <div className="card-header-icon media-right">
            <span className="icon">
              <i className="far fa-comment-alt" />
            </span>
            {`${commentCount} comments`}
          </div>
        </Link>
      )}
    </div>
  );
};

CardFooter.defaultProps = {
  commentCount: undefined,
  category: '',
};

CardFooter.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number,
  updateVote: PropTypes.func.isRequired,
};

export default CardFooter;
