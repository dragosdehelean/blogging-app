import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from './core/store/post/post.reducer';
import * as fromComments from './core/store/comment/comment.reducer';
import * as fromAuthors from './core/store/author/author.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostComponent } from './post/post.component';

@NgModule({
	declarations: [AppComponent, PostComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
		StoreModule.forFeature(
			fromComments.commentsFeatureKey,
			fromComments.reducer
		),
		StoreModule.forFeature(
			fromAuthors.authorsFeatureKey,
			fromAuthors.reducer
		),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
