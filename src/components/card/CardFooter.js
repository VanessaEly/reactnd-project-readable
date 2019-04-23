import React from 'react';
import PropTypes from 'prop-types';
import CardVoteMenu from './CardVoteMenu';

/**
 * @constructor CardFooter
 * @description Creates the footer part of the post component
 */
const CardFooter = (props) => {
  const { id, voteScore, commentCount, updateVote } = props;
  
  return (
    <div className="card-footer media-content">
      <CardVoteMenu id={id} updateVote={updateVote} voteScore={voteScore} />
      {commentCount !== undefined
        && <div className="card-header-icon media-right">
          <span className="icon">
            <i className="far fa-comment-alt" />
          </span>
          {`${commentCount} comments`}
        </div>
      }
    </div>
  );
};

CardFooter.propTypes = {
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number,
};

export default CardFooter;
