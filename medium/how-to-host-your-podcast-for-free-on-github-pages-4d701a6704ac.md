
# How To Host Your Podcast For Free On Github Pages

Do you have a story to tell and want to share it with the world but do not know where to start? Are you a developer looking to start a tech podcast? Are you looking to save money for hosting? Well this article is for you!
> TL;DR; You can fork this repo and customize it for your podcast!
[**rodydavis/podcast-player**
*Podcast Player with Flutter. Contribute to rodydavis/podcast-player development by creating an account on GitHub.*github.com](https://github.com/rodydavis/podcast-player)

![](https://cdn-images-1.medium.com/max/2560/1*HohTRnjW5zr0jvWiFC-pRw.jpeg)

[Github Pages](https://pages.github.com/) allows you to host any website for free on Github. You can host any kind of file or content and will be distributed with Github CDN around the world. You can even setup your Podcast to release new content with [Github Actions](https://github.com/features/actions) for each new episode.

## Create New Repo

If you already familiar with Github you can skip this step.
[**Creating a new repository**
*You can create a new repository on your personal account or any organization where you have sufficient permissions. In…*help.github.com](https://help.github.com/en/enterprise/2.14/user/articles/creating-a-new-repository)

Login or Create a free account for [Github](https://github.com/) and follow the instructions for creating the repo.

<iframe src="https://medium.com/media/8cd4ba127724c5cecc1fffb050dbcc52" frameborder=0></iframe>

## Clone the Repo

Now that you have the repo created on Github, download the project using Github Desktop.
[**Cloning a repository from GitHub to GitHub Desktop**
*You can use GitHub to clone remote repositories to GitHub Desktop. Sign in to GitHub and GitHub Desktop before you…*help.github.com](https://help.github.com/en/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)

After it finishes downloading you can open up the project in your favorite text editor. In this example we will be using VSCode.
[**Visual Studio Code - Code Editing. Redefined**
*Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud…*code.visualstudio.com](https://code.visualstudio.com/)

## Create the Website

You can create the website with whatever tech stack you wish but in this example we will be using Flutter. You can skip this step if you do not want an online player.
[**Flutter - Beautiful native apps in record time**
*Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from…*flutter.dev](https://flutter.dev/)

Open up the project if you haven’t already with VSCode and open the terminal and type the following:

    flutter create player

Once the process finishes then you can edit the application UI. Make sure you have Flutter installed.
[**Install**
*How to set up your code editor.*flutter.dev](https://flutter.dev/docs/get-started/install)

Edit the website files to the following:
[**rodydavis/podcast-player**
*A new Flutter project. This project is a starting point for a Flutter application. A few resources to get you started…*github.com](https://github.com/rodydavis/podcast-player/tree/master/player)

## Setting up Github Actions

Create a new Github Action that will release the new episode pushed to the master branch. If you chose not to have a podcast player and just want to host the files then you can add the audio files and the rss feed directly to the gh-pages or master branch and the files will be hosted instantly. Regardless make sure you have a file call .nojekyll so the web deployment will be much faster.

<iframe src="https://medium.com/media/8806cac2877ad42417ebed03d59d90f6" frameborder=0></iframe>

## Custom Domain

If you want to have your podcast hosted with a custom domain you can easily do this with Github pages. Follow this guide to set up your custom domain:
[**Configuring a custom domain for your GitHub Pages site**
*You can customize the domain name of your GitHub Pages site. GitHub Pages is available in public repositories with…*help.github.com](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)

## Releasing new Content

When you have a new episode to release the steps are very simple. Make sure to export your audio file to mono and use mp3 format so it is smaller that 100mb otherwise you will need to set up Git LFS for the repo.
[**Git Large File Storage**
*Download and install the Git command line extension. Once downloaded and installed, set up Git LFS for your user…*git-lfs.github.com](https://git-lfs.github.com/)

Put the new mp3 audio file in the “player/web/audio” folder. Now edit the RSS feed which is located at “player/web/feed.xml” and add the following:

<iframe src="https://medium.com/media/18981e312a082068ca78d09e586e0c60" frameborder=0></iframe>

For every episode you just have to add a new item to the feed and change the info for the episode. I would suggest putting the new episodes at the bottom.

    <item>      
    <author>COMMA_SEPERATED_LIST_OF_AUTHORS</author>      
    <itunes:author>COMMA_SEPERATED_LIST_OF_AUTHORS</itunes:author>      <title>PODCAST_EPISODE_TITLE</title>      
    <pubDate>Mon, 13 Apr 2020 13:00:00 GMT</pubDate>      
    <enclosure url="LINK_TO_AUDIO_FILE" type="audio/mpeg" length="34216300" />      
    <itunes:duration>54:08</itunes:duration>      
    <guid isPermaLink="false">cepod01</guid>      <itunes:explicit>no</itunes:explicit>      
    <description>
    Show Notes Here!       
    </description>    
    </item>

<iframe src="https://medium.com/media/15df4f5ea4ce8d46e0b3cc4e52bbeee1" frameborder=0></iframe>

## Publishing

Once your Github Action is finished building you now have an RSS feed that you can use to submit to Apple Podcasts, Google Podcasts and Spotify for Podcasters.

    [https://GITHUB_USERNAME.github.io/GITHUB_REPO/feed.xml](https://rodydavis.github.io/podcast-player/feed.xml)

You can also use this RSS Feed link to support any podcast player!

<iframe src="https://medium.com/media/46a8a563f1ce9e14a0ffa3b5a4662a93" frameborder=0></iframe>

## Conclusion

Hopefully you can see now how easy it is to host your podcast for free on Github Pages. You can find the final code for this example here:
[**rodydavis/podcast-player**
*Podcast Player with Flutter. Contribute to rodydavis/podcast-player development by creating an account on GitHub.*github.com](https://github.com/rodydavis/podcast-player)

## Live Example

My “Creative Engineering” podcast is hosted using this technique.

**Google Podcasts**
[**Google Podcasts**
*With Google Podcasts, you can find and listen to the world's podcasts for free.*podcasts.google.com](https://podcasts.google.com/?feed=aHR0cHM6Ly9yb2R5ZGF2aXMuZ2l0aHViLmlvL2NyZWF0aXZlX2VuZ2luZWVyaW5nL2ZlZWQueG1s&ved=0CAAQ4aUDahcKEwiI156Dz4npAhUAAAAAHQAAAAAQAQ&hl=en)

**Spotify Podcasts**

<iframe src="https://medium.com/media/defca7610f4b60a2ac1f63b3153c6714" frameborder=0></iframe>

**Apple Podcasts**
[**‎Creative Engineering on Apple Podcasts**
*Exploring Flutter, VR, AR, Cross-Platform Projects Exploring Flutter, VR, AR, Cross-Platform Projects Flutter Testing…*podcasts.apple.com](https://podcasts.apple.com/us/podcast/creative-engineering/id1507852833)
