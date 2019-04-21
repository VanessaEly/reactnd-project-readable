// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export default class NewPost extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       isEditing: false,
//     };
//   }
//   handleChange = () => {

//   }
//   handleEditMode = () => {
//     this.setState({isEditing: true})
//   }
//   render() {
//     const {
//       isEditMode,
//       closeEditMode,
//       postDetails
//     } = this.props;
//     return (
//       <div className="column is-half is-centered">
//         <div className="card">
//           <header className="card-header"></header>
//           <form className='card-content' onSubmit={this.handleSubmit}>
//             <div className="field is-horizontal">
//               <div className="field-body">
//                 <div className="field">
//                   <input className="input" type="text"
//                     placeholder="Post content"
//                     value={postDetails.body}
//                     onChange={this.handleChange}
//                     className='textarea'
//                     maxLength={280} />
//                 </div>
//               </div>
//             </div>
//             <button type='submit' className='btn' disabled={postDetails.body === ''}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// NewPost.propTypes = {
//   isEditMode: PropTypes.bool,
//   closeEditMode: PropTypes.func.isRequired,
//   postDetails: PropTypes.shape({
//     id: PropTypes.string,
//   }),
// };
