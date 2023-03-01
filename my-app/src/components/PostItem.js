import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            const title = post.title
            const name = post.name
            const description = post.description
            const paragraph = post.paragraph
            const image = post.image

            return <div className={css.SearchItem} key={title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} alt="random image"/>
                <p>{description}</p>
                <p>{paragraph}</p>
                
            </div>
            }
        )
    )
}

export default PostItem