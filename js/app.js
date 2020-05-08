const feed = [
	{
		author: "The Onion", // actually taken from The Onion at https://www.theonion.com/facebook-cracking-down-on-misinformation-by-warning-use-1843288534
		text: '“We want users to see accurate information on our platform, so we’re flagging disreputable sites like Facebook that often traffic in political propaganda for financial incentive.”',
		img: "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/bm6u5slrzwlkoknftrty.jpg",
		title: "Facebook Cracking Down On Misinformation By Warning Users Who Share Links From Facebook",
		description: "MENLO PARK, CA—In an effort to slow the proliferation of fake news, tech giant Facebook announced plans Wednesday to crack down on misinformation by warning users who share links from Facebook.",
		likes: 0,
		dislikes: 0,
		comment: false,
		share: false,
		error: false,
		highscore: false,
		lowscore: false,
		newName: '',
		newComment: '',
		comments: []
	},
	{
		author: "Susan, Your Crazy Cousin",
		text: "Can you all smell the FAKE NEWS on this one?? I can!! Very bad!",
		img: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
		title: "People All Around The World Are Doing Stuff!",
		description: "To everyone's surprise, lots of stuff is happening. In this economy? Yes, even in this economy.",
		likes: 0,
		dislikes: 0,
		comment: false,
		share: false,
		error: false,
		highscore: false,
		lowscore: false,
		newName: '',
		newComment: '',
		comments: []
	},
	{
		author: "Former Classmate",
		text: "Beautiful! This man is a work of art!!",
		img: "https://images.unsplash.com/photo-1587077833251-33d392689bde?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
		title: "DJ Khaled Said Something You Won't Believe",
		description: "To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Learning is cool, but knowing is better, and I know the key to success. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. I’m up to something. Wraith talk. Fan luv. Fan luv. You smart, you loyal, you a genius.",
		likes: 0,
		dislikes: 0,
		comment: false,
		share: false,
		error: false,
		highscore: false,
		lowscore: false,
		newName: '',
		newComment: '',
		comments: []
	}
];

new Vue({
	el: "#app",
	data: {
		feed: feed,
		messages: false,
		account: false,
		games: false,
		closed: false,
		tweet: `https://twitter.com/compose/tweet?text=${encodeURIComponent(`Check out a new social media site made by @lowercasetroy https://codepen.io/troyvassalotti/pen/RwWLyBV`)}`
	},
	methods: {
		showComment (article) {
			article.comment = !article.comment;
		},
		showShare (article) {
			article.share = !article.share;
		},
		like (article) {
			article.likes += 1;
			if (article.likes === 50) {
				article.highscore = true;
			};
		},
		dislike (article) {
			article.dislikes += 1;
			if (article.dislikes === 12) {
				article.lowscore = true;
			};
		},
		postComment (article) {
			if (!article.newName || !article.newComment) {
				article.error = true;
			} else {
				let currentTime = new Date();
				let amp = 'a.m.';
				let hours = currentTime.getHours();
				if (hours >= 12) {
					amp = "p.m."
				};
				if (hours > 12) {
					hours = hours - 12;
				};
				let minutes = currentTime.getMinutes();
				if (minutes < 10) {
					minutes = "0" + minutes;
				};
				article.comments.push({
					name: article.newName,
					comment: article.newComment,
					time: `${hours}:${minutes} ${amp}`
				});
				article.newName = '';
				article.newComment = '';
				article.error = false;
				article.comment = false;
			};
		},
		closeHighscore (article) {
			article.highscore = !article.highscore;
		},
		closeLowscore (article) {
			article.lowscore = !article.lowscore;
		},
		toggleMessages () {
			this.messages = !this.messages;
		},
		toggleGames () {
			this.games = !this.games;
		},
		scrollToFeed () {
			window.scrollTo(0, 0);
		},
		toggleAccount () {
			this.account = !this.account;
		},
		closeAccount () {
			this.toggleAccount();
			this.closed = !this.closed;
		},
		openAccount () {
			this.closed = !this.closed;
		}
	}
})
