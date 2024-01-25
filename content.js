var pages = {
	'home' : `
		<article class="generic-element-1" id="current-article">
			<h3>Welcome to Roger's World!</h3>

			<div class="artwork-container">
				<div class="artwork">
					<a href='https://twitter.com/JhoseSama' target="_blank" class="imglink">
						<img src="fanart/by_jhosechii_0.png" class="artwork-image generic-element-2" alt="Fanart of Roger's IRL self.">
					</a>	
					<div class="artwork-desc">By <a href='https://twitter.com/JhoseSama' target="_blank">JhoseChii</a></div>						
				</div>

				<div class="artwork">
					<a href='https://www.instagram.com/leezodie/' target="_blank" class="imglink">
						<img src="fanart/by_zodie_0.png" class="artwork-image generic-element-2" alt="Fanart of Roger's character.">
					</a>	
					<div class="artwork-desc">By <a href='https://www.instagram.com/leezodie/' target="_blank">Zodie</a></div>						
				</div>

			</div>

			<p>My name is <strong>Roger</strong>, and i mostly make <a href='https://youtube.com/@ZGURemixer'>sparta remixes</a> and <a href='https://open.spotify.com/artist/5ZraQB0Q12VezWtnPo3HKN'>original pieces</a> as a hobby.</p>
			<p>My pronouns are he/him and I am a cis man.</p>
		</article>
	`,

	'socials' : `
		<article class="generic-element-1" id="current-article">
			<h3>Socials</h3>
			<p>Here are several places where you can find me.</p>
			<div class="artwork-container">
				<iframe id="bandcamp-player" src="https://bandcamp.com/EmbeddedPlayer/album=434844440/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=false/" seamless><a href="https://zguremixer.bandcamp.com/album/the-origins">THE ORIGINS by ZGURemixer</a>
				</iframe>
			</div>
			<p>more text goes here lololol</p>
			<p>hi victor!!!</p>
		</article>
	`,

	'error' : `
		<article class="generic-element-1" id="current-article">
			<h3>Error</h3>

			<p>	Page not found.</p>
		</article>
	`,
};

function getPageContent(page){
	var contentToReturn;
	switch(page){
		case 'home':
			contentToReturn = pages.home;
			break;
		case 'socials':
			contentToReturn = pages.socials;
			break;			
		default:
			contentToReturn = pages.error;
			break;				
	}
	document.getElementById('article-container').innerHTML = contentToReturn; 
}