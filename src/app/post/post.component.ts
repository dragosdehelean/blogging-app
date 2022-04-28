import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
} from '@angular/core';
import { Post } from '../core/store/post/post.reducer';
import { Comment } from '../core/store/comment/comment.reducer';
import * as PostActions from '../core/store/post/post.actions';
import * as CommentActions from '../core/store/comment/comment.actions';
import * as AuthorActions from '../core/store/author/author.actions';
import * as PostSelectors from '../core/store/post/post.selectors';
import * as CommentSelectors from '../core/store/comment/comment.selectors';
import * as AuthorSelectors from '../core/store/author/author.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Author } from '../core/store/author/author.reducer';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
	@Input() post: Post;

	commentsAndAuthors$: Observable<
		Array<{ comment: Comment; author: Author }>
	>;
	constructor(private store: Store) {}

	ngOnInit(): void {
		this.commentsAndAuthors$ = this.store.select(
			CommentSelectors.selectCommentsAndAuthorsForPostId(this.post.id)
		);
	}

	trackByVMFn(index: number, vm: { comment: Comment; author: Author }) {
		return vm.comment.id;
	}
}
