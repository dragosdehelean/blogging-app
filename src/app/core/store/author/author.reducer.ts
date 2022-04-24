import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AuthorActions from './author.actions';

export interface Author {
	id: string;
	name: string;
}

export const authorsFeatureKey = 'authors';

export interface State extends EntityState<Author> {
	// additional entities state properties
}

export const adapter: EntityAdapter<Author> = createEntityAdapter<Author>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
});

export const reducer = createReducer(
	initialState,
	on(AuthorActions.addAuthor, (state, action) =>
		adapter.addOne(action.author, state)
	),
	on(AuthorActions.upsertAuthor, (state, action) =>
		adapter.upsertOne(action.author, state)
	),
	on(AuthorActions.addAuthors, (state, action) =>
		adapter.addMany(action.authors, state)
	),
	on(AuthorActions.upsertAuthors, (state, action) =>
		adapter.upsertMany(action.authors, state)
	),
	on(AuthorActions.updateAuthor, (state, action) =>
		adapter.updateOne(action.author, state)
	),
	on(AuthorActions.updateAuthors, (state, action) =>
		adapter.updateMany(action.authors, state)
	),
	on(AuthorActions.deleteAuthor, (state, action) =>
		adapter.removeOne(action.id, state)
	),
	on(AuthorActions.deleteAuthors, (state, action) =>
		adapter.removeMany(action.ids, state)
	),
	on(AuthorActions.loadAuthors, (state, action) =>
		adapter.setAll(action.authors, state)
	),
	on(AuthorActions.clearAuthors, state => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
	adapter.getSelectors();
