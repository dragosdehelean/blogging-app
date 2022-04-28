import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComments from './comment.reducer';
import * as AuthorSelectors from '../author/author.selectors';
import { Author } from '../author/author.reducer';
import { Comment } from '../comment/comment.reducer';

export const selectState = createFeatureSelector<fromComments.State>(
	fromComments.commentsFeatureKey
);

/** BASIC SELECTORS */

// an Array of Ids
export const selectIds = createSelector(selectState, fromComments.selectIds);

// a Dictionary of Entities
export const selectEntities = createSelector(
	selectState,
	fromComments.selectEntities
);

// an Array of Entities
export const selectAll = createSelector(selectState, fromComments.selectAll);

// total number of Entities
export const selectTotal = createSelector(
	selectState,
	fromComments.selectTotal
);

/** UTILITY SELECTORS */
export const selectCommentsByPostId = (postId: string) =>
	createSelector(selectIds, selectEntities, (ids: string[], entities) => {
		return ids
			.filter(id => entities[id].postId === postId)
			.map(id => entities[id]);
	});

/** VIEW MODEL SELECTORS */

export const selectCommentsAndAuthorsForPostId = (postId: string) =>
	createSelector(
		selectIds,
		selectEntities,
		AuthorSelectors.selectEntities,
		(commenIds: string[], commentEntities, authorEntities) => {
			const commentsAndAuthors: Array<{
				comment: Comment;
				author: Author;
			}> = commenIds
				.filter(id => commentEntities[id].postId === postId)
				.map(id => ({
					comment: commentEntities[id],
					author: authorEntities[commentEntities[id].authorId],
				}));

			return commentsAndAuthors;
		}
	);
