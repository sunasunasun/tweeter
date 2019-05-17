# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

### Navigation Bar
When a user clicks the Compose button in the Navigation Bar:
if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
if the Compose Tweet box is currently showing, then it is hidden
in either case, transitions between 'shown' and 'hidden' states should be animated
### haracter Counter
When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

### Compose Tweet
When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)


## Final Product
!["Tweet1"](https://github.com/sunasunasun/tweeter/blob/master/doc/tweetc.png?raw=true)
!["Tweet hide form"](https://github.com/sunasunasun/tweeter/blob/master/doc/tweeta.png?raw=true)
!["Tweet is empty"](https://github.com/sunasunasun/tweeter/blob/master/doc/tweetb.png?raw=true)

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- mongodb


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.