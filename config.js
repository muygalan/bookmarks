var launchbotConfig = {

  // Enter absolute URIs 'http://', 'https://', 'ftp://' …
  sets: [

    // First example set
    {
      name: 'Messaging',
      items: [
        'https://messages.android.com/',
        'https://web.whatsapp.com/',
        'http://joaoapps.com/join/web',
        'https://web.skype.com/',
        'https://www.messenger.com/',
        'https://www.google.com/gmail/about/#',
      ]
    },

    // Second example set
    {
      name: 'Social Media',
      items: [
        'http://www.facebook.com/',
        'http://www.twitter.com/',
        'https://tweetdeck.twitter.com/',
        'http://www.instagram.com/',
        'https://plus.google.com/',
        'http://www.linkedin.com/',
        'http://www.pinterest.com/',
        'http://www.tumblr.com/',
        'http://www.meetup.com/'
      ]
    },

     // Third example set
    {
      name: 'Research',
      items: [
        'http://www.google.com/',
        'http://www.craigslist.com/',
        'http://www.yelp.com/',
        'http://www.wikipedia.com/',
        'http://www.imdb.com/',
        'https://reelgood.com/',
        'https://www.similarsites.com/',
      ]
    },

    // Fourth example set
    {
      name: 'Shopping',
      items: [
        'http://www.amazon.com/',
        'http://www.ebay.com/',
        'http://www.bestbuy.com/',
        'http://www.walmart.com/',
        'http://www.target.com/',
        'http://www.retailmenot.com/',
        'http://www.publix.com/',
      ]
    },

      // Fith example set
    {
      name: 'Banking',
      items: [
        'http://www.wellsfargo.com/',
        'http://www.chase.com/',
        'http://www.psecu.com/',
      ]
    },

      // Sixth example set
    {
      name: 'Entertainment',
      items: [
        'https://1337x.to/',
        'http://rarbg.to/',
        'http://forum.mobilism.org/index.php',
        'http://www.reddit.com/',
        'http://www.feedly.com/',
        'http://www.medium.com/',
        'https://www.indiehackers.com/',
        'http://www.youtube.com/',
        'https://www.youtube.com/tv',
        'http://www.imgur.com/',
        'https://www.skytorrents.in/',
        'http://www.hiphopearly.com/',
        'http://plixid.com/',
        'https://www.xclusivejams.xyz/',
        'http://rgf.is/',
      ]
    },

      // Seventh example set
    {
      name: 'Music',
      items: [
        'https://music.amazon.com/',
        'http://dashradio.com/',
        'https://www.mixcloud.com/',
        'http://www.soundcloud.com/',
        'https://play.spotify.com/',
        'https://focusmusic.fm/',
      ]
    },

         // Eight example set
    {
      name: 'Productivity',
      items: [
        'http://www.trello.com/',
        'https://drive.google.com/drive/my-drive',
        'https://www.dropbox.com/home',
        'https://paper.dropbox.com/folders',
        'https://keep.google.com/',
        'http://www.workflowy.com/',
        'https://todo.microsoft.com/',
        'https://getpocket.com/a/queue/list/',
        'hhttps://stackedit.io/',
        'https://zave.co/dashboard/',
        'https://todoist.com/',
        'http://exist.io/',
        'https://www.evernote.com/Home.action',
        'https://notejoy.com/',
        'https://app.standardnotes.org/',
        'https://agenda.edo.io/login',
        'https://raindrop.io/app#/collection/0/',
        'https://additor.io/',
        'http://www.wiz.cn/',
        'https://nachapp.com/',
        'https://app.nuclino.com/login',
        'https://www.notion.so/login',
        'https://bufferapp.com/',
        'https://hootsuite.com/dashboard',
        'https://kanban-chi.appspot.com/dashboard',
        'http://www.airmore.com/web.html',
        'https://app.simplenote.com/signin',
        'http://www.ticktick.com/',
        'https://slack.com/?new=1',
      ]
    },

             // Ninth example set
    {
      name: 'Coding',
      items: [
        'https://webmakerapp.com/',
        'https://openclassrooms.com/dashboard',
        'http://progate.com/languages',
        'https://teamtreehouse.com/library',
        'https://thimble.mozilla.org/en-US/',
        'https://codeanywhere.com/',
        'https://repl.it/',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
        'https://codesandbox.io/',
        'https://learn-anything.xyz/',
        'https://github.com/muygalan',
      ]
    },

    // Add more sets below, don’t forget to add a comma after the previous set.

  ],

  // For favorites bar, enter absolute URIs 'http://', 'https://', 'ftp://' …
  favs: [
    'https://mail.google.com',
    'http://www.trello.com',
    'https://www.twitter.com',
    'https://www.github.com',
    'http://10minutemail.com/10MinuteMail/index.html',
    'https://github.com/muygalan/ascii',
    'http://en.savefrom.net/',
  ],

  // Optional settings
  options: {
    searchEngine: 'https://www.google.com/search',
    faviconSize: 16,
    faviconService: 'http://www.google.com/s2/favicons?domain=',
    linkTarget: '_blank'
  },
  plugins: {
    weather: {
      enabled: true,
      zipCode: 33020,
      country: 'USA',
      useCelcius: false
    }
  }
};