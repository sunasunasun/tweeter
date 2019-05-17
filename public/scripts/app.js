
$(function() {
//add new tweets to container
    function renderTweets(tweets) {
        $('#tweet-container').empty()
        tweets.forEach(tweet => {
            var $tweet = createTweetElement(tweet)
            $('#tweet-container').prepend($tweet);
        })
    }

//create the frame of new tweets
    function createTweetElement(tweetData) {
        console.log(tweetData)
        let tweet = $('<article>').addClass("tweet");
        let header = $('<header>').appendTo(tweet);
        let headshot = $(`<img src = "${tweetData.user.avatars.small}">`).appendTo(header);
        let name = $('<span>').addClass("name").text(tweetData.user.name).appendTo(header);
        let atat = $('<span>').addClass("at").text(tweetData.handle).appendTo(header);

        let content = $('<p>').text(tweetData.content.text).appendTo(tweet);

        let footer = $('<footer>').appendTo(tweet);
        let date = $('<p>').text(tweetData.created_at).appendTo(footer);
        let imgLink = $('<a href="#">').appendTo(footer);
        let icon = $('<img class="icon" src="/images/1146293-space.png">').appendTo(imgLink);

        return tweet;
    }

    //load tweets
    function loadTweets() {
        $.ajax({
            url: 'http://localhost:8080/tweets',
            method: 'GET',
            dataType: 'json',
            success: renderTweets,
            failure: function() {
                console.log("failure");
            }
        });

    }
    loadTweets()


//animations for form, different conditions have different actions
    $("form").on('submit', function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        if ($('.empty').val() === "") {
            $(".error").slideDown()
            $(".error").text('tweet is empty')
            return false;
        } else if (data.length > 140) {
            $(".error").slideDown()
            $(".error").text('tweet content is too long')
            return false;
        } else {
            $(".error").slideUp()
            $.ajax({
                url: '/tweets',
                method: 'POST',
                data: data,
                success: loadTweets,
                error: function() {
                    console.log("error")
                }
            })
        }
    });
//animation for compose button
    $('.composeButton').click(function() {
        $('.new-tweet').slideToggle();
        $(".empty").focus();
        $(".empty").select();
    });
    $(".empty").focus();


});