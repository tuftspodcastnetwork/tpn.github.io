# tuftspodcastnetwork.github.io

How to upload your podcast to the website:
1. Make sure your podcast has been uploaded to Soundcloud.
2. Go to https://github.com/tuftspodcastnetwork/tuftspodcastnetwork.github.io/tree/master/img/projects and upload an accompanying image file for your podcast (click on upload files and then drag your image onto the screen)
   * Make sure it has a short, but identifying name (e.g. "lit1" for Episode 1 of It's Lit)
2. Go to https://github.com/tuftspodcastnetwork/tuftspodcastnetwork.github.io/blob/master/portfolio-projects.json (click on the pencil icon to edit)
3. Press enter after line 1 to create a blank line 2, copy and paste the following code (but fill in brackets with your podcast info)
  ```
  {
    "pub" : "[NAME OF PODCAST]",
    "headline" : "[SHORT DESCRIPTION OF PODCAST]",
    "subhead" : "",
    "url" : "[COPY AND PASTE FROM SOUNDCLOUD PAGE FOR PODCAST]",
    "thumbnail" : "projects/[IMAGE FILE NAME.EXTENSION]"
  },
  ```
  If you need help, try to look at previous podcast entries for reference or reach out to me (Jenna)
