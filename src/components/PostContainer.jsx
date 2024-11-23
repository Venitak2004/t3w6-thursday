import EditablePost from "./EditablePost";
import ReadOnlyPost from "./ReadOnlyPost";
import React, { Component } from 'react';

export default class PostContainer extends Component {

    constructor() {
        super();

        this.state = {
            isEditing: false,
            author: "",
            dateCreated: Date.now(),
            location: "",
            content: "",
            lastUpdated: Date.now()
        }
        }

        toggleEditMode = () => {
            this.setState(
                {
                    isEditing: !this.state.isEditing
                }
            )
        }
        render() {
            return(
                <>
                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
                {
                    this.state.isEditing ? 
                    <EditablePost
                    // Pass all of them using props, one at a time
                    author={this.state.author}
                    dateCreated={this.state.dateCreated}
                    location={this.state.location}
                    content={this.state.content}
                    lastUpdated={this.state.lastUpdated}

                    // Could pass the entire state variable in one go
                    parentState={this.state}
                    />:
                    <ReadOnlyPost 
                    // Pass all of them using props, one at a time
                    author={this.state.author}
                    dateCreated={this.state.dateCreated}
                    location={this.state.location}
                    content={this.state.content}
                    lastUpdated={this.state.lastUpdated}

                    // Could pass the entire state variable in one go
                    parentState={this.state}/>
                }
                </>
            )
        }
}