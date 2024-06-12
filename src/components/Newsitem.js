import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,description,imageurl,newsUrl,author}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
  <img src={imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
  <span class="badge text-bg-danger">By {author?author :"unknown"}</span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {description}
    </p>
   
    
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
      Read More
    </a>
  </div>
</div>

      </div>
    )
  }
}

export default Newsitem
