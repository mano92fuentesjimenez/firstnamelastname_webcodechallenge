import React from 'react';
import './post-action.scss';
import { connect } from 'react-redux';
import { selectOpenPost } from "./selectors";
import ReactModal from 'react-modal';
import { PostDescription } from "./components/post-description/post-description";
import { ActionCard } from "./components/action-card/actionCard";

const PostAction = ({ openPost }) => {

  return (
    <ReactModal
      isOpen={openPost !== null}
      className="modal-blank"
      style={{
        overlay: {
          backgroundColor: 'rgba(100, 100, 100, 0.75)'
        }
      }}
    >
      <div className='container post-action-container'>
        <div className='container'>
          <PostDescription post={openPost}/>
          <span className='post-action-instructions'> Drag the card on the left to the desired action </span>
        </div>
        <div className='post-action-cards'>
          <ActionCard actionName='email' actionText='Email to a friend' imgPath='/WarningSign.jpg'/>
          <ActionCard actionName='link' actionText='Open on Reddit' imgPath='/WarningSign.jpg'/>
        </div>
      </div>
    </ReactModal>);
};

const mapStateToProps = state => ({
  openPost: selectOpenPost(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction)
