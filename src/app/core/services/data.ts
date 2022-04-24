import { Author } from '../store/author/author.reducer';
import { Post } from '../store/post/post.reducer';
import { Comment } from '../store/comment/comment.reducer';

export const posts: Post[] = [
	{
		id: '1',
		authorId: '2',
		body: "This is the first post I've ever written",
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
];
