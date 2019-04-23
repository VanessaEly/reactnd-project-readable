import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardVoteMenu from './CardVoteMenu';

/**
 * @constructor CardFooter
 * @description Creates the footer part of the post component
 */
const CardFooter = (props) => {
  const { id, category, voteScore, commentCount, updateVote } = props;

  return (
    <div className="card-footer media-content">
      <CardVoteMenu id={id} updateVote={updateVote} voteScore={voteScore} />
      {commentCount !== undefined
        && <Link to={`/${category}/${id}`}>
          <div className="card-header-icon media-right">
            <span className="icon">
              <i className="far fa-comment-alt" />
            </span>
            {`${commentCount} comments`}
          </div>
        </Link>
      }
    </div>
  );
};

CardFooter.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number,
};

export default CardFooter;
