import { Author } from '../store/author/author.reducer';
import { Post } from '../store/post/post.reducer';
import { Comment } from '../store/comment/comment.reducer';

export const posts: Post[] = [
	{
		id: '1',
		authorId: '2',
		body: "This is the first post I've ever written",
	},
	{
		id: '2',
		authorId: '3',
		body: 'Because of this, the recommended approach to managing relational or nested data in a Redux... ',
	},
	{
		id: '3',
		authorId: '4',
		body: 'When a piece of data is duplicated in several places, it becomes harder to make sure that it is updated appropriately... ',
	},
];

export const authors: Author[] = [
	{
		id: '1',
		name: 'Davide',
	},
	{
		id: '2',
		name: 'Tuan',
	},
	{
		id: '3',
		name: 'Nuno',
	},

	{
		id: '4',
		name: 'Nerijus',
	},

	{
		id: '5',
		name: 'Mohammed',
	},
	{
		id: '6',
		name: 'Martin',
	},
];

export const comments: Comment[] = [
	{ id: '1', postId: '1', authorId: '1', comment: "you're going good, bro!" },
	{ id: '2', postId: '2', authorId: '6', comment: 'makes me wonder...' },
	{
		id: '3',
		postId: '3',
		authorId: '5',
		comment: 'If  only i had known!',
	},
	{
		id: '4',
		postId: '1',
		authorId: '5',
		comment: 'Good point there!',
	},
];
