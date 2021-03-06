import React from 'react';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBdb2oXirels7hkonROcrAdzLBXEkRiZtM",
    authDomain: "first-database-bbc57.firebaseapp.com",
    databaseURL: "https://first-database-bbc57.firebaseio.com",
    projectId: "first-database-bbc57",
    storageBucket: "first-database-bbc57.appspot.com",
    messagingSenderId: "391925072969"
  };

firebase.initializeApp(config);

const database = firebase.database();


class BookList extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleErrors = this.handleErrors.bind(this);
            this.state = {
                bookList: [],
                title: '',
                author: '',
                errors: [],
                success: ''
            }
        }
        componentDidMount() {
            database.ref('books').on('value', (snapshot) => {
                    const newArray = [];
                    snapshot.forEach((item) => {
                        newArray.push({id: item.key, ...item.val()})
                    })

                    this.setState({bookList: newArray})
                }
            )
        }
        handleClick(id) {
            database.ref(`books/${id}`).remove();
            this.setState({success: '', errors: []})
        }
        handleSubmit(e) {
            e.preventDefault();

            const title = e.target.title.value.toLowerCase();
            const author = e.target.author.value.toLowerCase();

            const errors = this.handleErrors(title,author);

            if(errors.length > 0) {
                this.setState({errors, success: ''});
                return;
            }
            database.ref('books').push({title, author});
            this.setState({success: `${e.target.title.value} was added successfully!`, title: '', author: '',errors: []});

        }
        handleErrors(title,author) {
            const errors = [];

            if (title.length === 0) {
                errors.push("Title can't be blank!");
            }

            if (author.length === 0) {
                errors.push("Author can't be blank!");
            }

            this.state.bookList.forEach((item) => {
                if(item.title === title) {
                    errors.push("Title already added! Please add a new title.");
                }
            })
           
            return errors;
        }
        render() {
            return (
                <div>
                    { this.state.errors.map((item,i) => <h3 key={i}>{item}</h3>) }
                    { this.state.success !== '' && <h3 id='success'>{this.state.success}</h3> }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-field">
                            <label>Title: </label>
                            <input type="text" name="title" value={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
                        </div>
                        <div className="form-field">
                            <label>Author: </label>
                            <input type="text" name="author" value={this.state.author} onChange={e => this.setState({author: e.target.value})}/>
                        </div>
                        <input type="submit" value="&#x2714;"/>
                    </form>
                    <ul>
                        {this.state.bookList.map((item) => 
                            <li key={item.id}>
                            <span id="title" className="result"><span className="liHeader">Title:</span> {item.title.toUpperCase()}</span>
                            <span id="author" className="result"><span className="liHeader">Author:</span> {item.author.toUpperCase()}</span>
                            <button onClick={() => this.handleClick(item.id)}>X</button>
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }

export default BookList;


