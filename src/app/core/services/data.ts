import { Author } from '../store/author/author.reducer';
import { Post } from '../store/post/post.reducer';
import { Comment } from '../store/comment/comment.reducer';

export const posts: Post[] = [
	{
		id: '1',
		authorId: '2',
		body: 'The NgRx Entity Adapter provides many helper methods for performing operations against a collection of entities. These methods can change one to many records at a time.',
	},
	{
		id: '2',
		authorId: '3',
		body: 'NgRx Selectors give you a lot of power and flexibility. They provide: efficient querying of data through memoization, composability to build up new data models, and synchronous operate with state.',
	},
	{
		id: '3',
		authorId: '4',
		body: 'When a piece of data is duplicated in several places, it becomes harder to make sure that it is updated appropriately. Nested data means the reducer logic has to be more nested and complex ',
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
	{
		id: '1',
		postId: '1',
		authorId: '2',
		comment: 'Seems like a yes we can atitude ;) ',
		creationDate: 'Thu Apr 28 2022 06:13:11 GMT+0200',
	},
	{ id: '2', postId: '2', authorId: '1', comment: 'makes me wonder...' },
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
	{
		id: '5',
		postId: '2',
		authorId: '4',
		comment: 'You make my head spin! slow down...',
	},
	{
		id: '6',
		postId: '3',
		authorId: '3',
		comment: "This is yesterday's news!",
	},
	{
		id: '7',
		postId: '3',
		authorId: '6',
		comment: "True, I've seen an use case",
	},
	{
		id: '8',
		postId: '2',
		authorId: '2',
		comment: 'Nice!',
	},
	{
		id: '9',
		postId: '1',
		authorId: '5',
		comment: 'You made me read till the end ;)',
	},
];
