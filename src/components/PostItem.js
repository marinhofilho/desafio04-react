import React from 'react';

// name and avatar don't require pass
function PostHeader({ author, date }) {
    return ( 
      <div className="postheader">
        <img src={author.avatar} />
        <div className="postheader-details">
          <h3>{author.name}</h3> 
          <p>{date}</p>
        </div>
      </div>
    )
}

//author and avatar don't require passing
function PostComment({ comments, author, avatar }) {
  return (
    <div className="postcomment">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="commentcontent">
          <img src={comment.author.avatar} />
          <p>
            <span>{comment.author.name} </span>
            {comment.content}
          </p>
        </div>
      ))
      }
    </div>
  )
}


function PostItem ({author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComment comments={comments} />
    </div>
    )
}


export default PostItem;