import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostActions from './core/store/post/post.actions';
import * as CommentActions from './core/store/comment/comment.actions';
import * as AuthorActions from './core/store/author/author.actions';
import { posts, comments, authors } from './core/services/data';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked {
	title = 'blogging-app';

	constructor(private store: Store) {}

	ngOnInit() {
		// On Initial Loading set the meeting progress display
		this.store.dispatch(PostActions.loadPosts({ posts: posts }));
		this.store.dispatch(
			CommentActions.loadComments({ comments: comments })
		);
		this.store.dispatch(AuthorActions.loadAuthors({ authors: authors }));
	}

	ngAfterViewChecked() {}
}
