import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as CommentActions from './comment.actions';

export interface Comment {
	id: string;
	postId: string;
	authorId: string;
	comment: string;
	creationDate?: string;
}

export const commentsFeatureKey = 'comments';

export interface State extends EntityState<Comment> {
	// additional entities state properties
}

export const adapter: EntityAdapter<Comment> = createEntityAdapter<Comment>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
});

export const reducer = createReducer(
	initialState,
	on(CommentActions.addComment, (state, action) =>
		adapter.addOne(action.comment, state)
	),
	on(CommentActions.upsertComment, (state, action) =>
		adapter.upsertOne(action.comment, state)
	),
	on(CommentActions.addComments, (state, action) =>
		adapter.addMany(action.comments, state)
	),
	on(CommentActions.upsertComments, (state, action) =>
		adapter.upsertMany(action.comments, state)
	),
	on(CommentActions.updateComment, (state, action) =>
		adapter.updateOne(action.comment, state)
	),
	on(CommentActions.updateComments, (state, action) =>
		adapter.updateMany(action.comments, state)
	),
	on(CommentActions.deleteComment, (state, action) =>
		adapter.removeOne(action.id, state)
	),
	on(CommentActions.deleteComments, (state, action) =>
		adapter.removeMany(action.ids, state)
	),
	on(CommentActions.loadComments, (state, action) =>
		adapter.setAll(action.comments, state)
	),
	on(CommentActions.clearComments, state => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
	adapter.getSelectors();
