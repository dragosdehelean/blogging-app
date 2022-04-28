import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostActions from './core/store/post/post.actions';
import * as CommentActions from './core/store/comment/comment.actions';
import * as AuthorActions from './core/store/author/author.actions';
import * as PostSelectors from './core/store/post/post.selectors';
import * as CommentSelectors from './core/store/comment/comment.selectors';
import * as AuthorSelectors from './core/store/author/author.selectors';
import { posts, comments, authors } from './core/services/data';
import { Post } from './core/store/post/post.reducer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked {
	allPosts$ = this.store.select(PostSelectors.selectAll);
	commentersOnPost1$ = this.store.select(
		AuthorSelectors.selectCommentersOnPost1
	);

	constructor(private store: Store) {}

	ngOnInit() {
		// populate the store with mock data
		this.store.dispatch(PostActions.loadPosts({ posts: posts }));
		this.store.dispatch(
			CommentActions.loadComments({ comments: comments })
		);
		this.store.dispatch(AuthorActions.loadAuthors({ authors: authors }));
	}

	ngAfterViewChecked() {}

	trackByPostFn(index: number, post: Post) {
		return post.id;
	}
}
