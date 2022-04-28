import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthors from './author.reducer';
import * as CommentSelectors from '../comment/comment.selectors';
import { Comment } from '../comment/comment.reducer';

export const selectState = createFeatureSelector<fromAuthors.State>(
	fromAuthors.authorsFeatureKey
);

/** BASIC SELECTORS */

// an Array of Ids
export const selectIds = createSelector(selectState, fromAuthors.selectIds);

// a Dictionary of Entities
export const selectEntities = createSelector(
	selectState,
	fromAuthors.selectEntities
);

// an Array of Entities
export const selectAll = createSelector(selectState, fromAuthors.selectAll);

// total number of Entities
export const selectTotal = createSelector(selectState, fromAuthors.selectTotal);

/** UTILITY SELECTORS */

/** VIEW MODEL SELECTORS */

// who commented on Post nr 1
export const selectCommentersOnPost1 = createSelector(
	selectIds,
	selectEntities,
	CommentSelectors.selectCommentsByPostId('1'),
	(ids: string[], entities, commentsOnPost: Comment[]) => {
		const allAuthorIds = commentsOnPost.map(item => item.authorId);
		const uniqueAuthorIds = Array.from(new Set(allAuthorIds));

		return uniqueAuthorIds.map(id => entities[id]);
	}
);
