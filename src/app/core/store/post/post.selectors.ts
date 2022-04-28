import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from './post.reducer';
import * as AuthorSelectors from '../author/author.selectors';
import * as CommentSelectors from '../comment/comment.selectors';
import { Comment } from '../comment/comment.reducer';

export const selectState = createFeatureSelector<fromPosts.State>(
	fromPosts.postsFeatureKey
);

/** BASIC SELECTORS */

// an Array of Ids
export const selectIds = createSelector(selectState, fromPosts.selectIds);

// a Dictionary of Entities
export const selectEntities = createSelector(
	selectState,
	fromPosts.selectEntities
);

// an Array of Entities
export const selectAll = createSelector(selectState, fromPosts.selectAll);

// total number of Entities
export const selectTotal = createSelector(selectState, fromPosts.selectTotal);

/** UTILITY SELECTORS */

/** VIEW MODEL SELECTORS */
