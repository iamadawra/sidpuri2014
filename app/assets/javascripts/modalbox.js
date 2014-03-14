




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>modalbox/modalbox.js at master · okonet/modalbox</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="okonet/modalbox" name="twitter:title" /><meta content="modalbox - Mac OS X style javascript pop-ups for your browser (based on prototype + script.aculo.us)" name="twitter:description" /><meta content="https://1.gravatar.com/avatar/0c6c742c4c56a2d837a5d6eb7195a8c6?d=https%3A%2F%2Fidenticons.github.com%2F7e2674f6f4343ce9f635b86d124851ce.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://1.gravatar.com/avatar/0c6c742c4c56a2d837a5d6eb7195a8c6?d=https%3A%2F%2Fidenticons.github.com%2F7e2674f6f4343ce9f635b86d124851ce.png&amp;r=x&amp;s=400" property="og:image" /><meta content="okonet/modalbox" property="og:title" /><meta content="https://github.com/okonet/modalbox" property="og:url" /><meta content="modalbox - Mac OS X style javascript pop-ups for your browser (based on prototype + script.aculo.us)" property="og:description" />

    <meta name="hostname" content="github-fe134-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="62F893EF:0B3F:1F151DA:53220C84" name="octolytics-dimension-request_id" /><meta content="1143247" name="octolytics-actor-id" /><meta content="iamadawra" name="octolytics-actor-login" /><meta content="1e0fe7bb8ccc60f7908f3fce60fde5ce9294dad46f8710a25c80c7945ddd4fa1" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="hlSU2kRC/2Wg83ncSYCa6u+fPtWFJdsgPtYNK8nQDvo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-adcf123587b068f65ee2420a9a7988231694ba13.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-0348dd5317f4771e8b58634e380551ffcd576e31.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-9acb89add4e173259bb0e9e81d36276a93db7af4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-e5fa8dd774789368e3a337cb0ef547bbcf93c563.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="448de3c3914c5572b0f4db341dd276ee">

        <link data-pjax-transient rel='permalink' href='/okonet/modalbox/blob/537274d3aaea949a0c0c724b324c8c297117a21e/modalbox.js'>

  <meta name="description" content="modalbox - Mac OS X style javascript pop-ups for your browser (based on prototype + script.aculo.us)" />

  <meta content="11071" name="octolytics-dimension-user_id" /><meta content="okonet" name="octolytics-dimension-user_login" /><meta content="34621" name="octolytics-dimension-repository_id" /><meta content="okonet/modalbox" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="34621" name="octolytics-dimension-repository_network_root_id" /><meta content="okonet/modalbox" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/okonet/modalbox/commits/master.atom" rel="alternate" title="Recent Commits to modalbox:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="iamadawra"
      data-repo="okonet/modalbox"
      data-branch="master"
      data-sha="e6a9734950efaed471bc689b0d95b8b0a4d5aaaf"
  >

    <input type="hidden" name="nwo" value="okonet/modalbox" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/iamadawra" class="name">
        <img alt="Aayush Dawra" class=" js-avatar" data-user="1143247" height="20" src="https://avatars3.githubusercontent.com/u/1143247?s=140" width="20" /> iamadawra
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="okonet/modalbox">This repository</span>
    </li>
      <li>
        <a href="/okonet/modalbox/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="hlSU2kRC/2Wg83ncSYCa6u+fPtWFJdsgPtYNK8nQDvo=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="34621" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/okonet/modalbox/watchers">
        9
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/okonet/modalbox/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar okonet/modalbox" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/okonet/modalbox/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star okonet/modalbox" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/okonet/modalbox/stargazers">
        273
      </a>
  </div>

  </li>


        <li>
          <a href="/okonet/modalbox/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of okonet/modalbox to your account" aria-label="Fork your own copy of okonet/modalbox to your account" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/okonet/modalbox/network" class="social-count">90</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/okonet" class="url fn" itemprop="url" rel="author"><span itemprop="title">okonet</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/okonet/modalbox" class="js-current-repository js-repo-home-link">modalbox</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/okonet/modalbox" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /okonet/modalbox">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/okonet/modalbox/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /okonet/modalbox/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>28</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/okonet/modalbox/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /okonet/modalbox/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/okonet/modalbox/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /okonet/modalbox/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/okonet/modalbox/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /okonet/modalbox/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/okonet/modalbox/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /okonet/modalbox/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/okonet/modalbox/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /okonet/modalbox/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/okonet/modalbox.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/okonet/modalbox.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:okonet/modalbox.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:okonet/modalbox.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/okonet/modalbox" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/okonet/modalbox" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/okonet/modalbox/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download okonet/modalbox as a zip file"
                   title="Download okonet/modalbox as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:51bca57647e172d32b46d7eaf4798c14 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/okonet/modalbox/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/okonet/modalbox/blob/gh-pages/modalbox.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/okonet/modalbox/blob/master/modalbox.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/okonet/modalbox/tree/release1.6.1/modalbox.js"
                 data-name="release1.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="release1.6.1">release1.6.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/okonet/modalbox" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">modalbox</span></a></span></span><span class="separator"> / </span><strong class="final-path">modalbox.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="modalbox.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/8416a23d549c009b2ff4243632ffd347?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><span rel="author">Alexey Kulikov</span></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2012-08-10T11:27:50+02:00" title="2012-08-10 17:27:50">August 10, 2012</time>
    <div class="commit-title">
        <a href="/okonet/modalbox/commit/00bb1a472bc46297a4f83340dc57fdf9c6887f76" class="message" data-pjax="true" title="Added tracking of X Scroll Offsets. In case the page is scrolled horizon...

...tally the modalbox will always appear and remain on screen as well.">Added tracking of X Scroll Offsets. In case the page is scrolled hori…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="okonet" href="/okonet/modalbox/commits/master/modalbox.js?author=okonet"><img alt="Andrey Okonetchnikov" class=" js-avatar" data-user="11071" height="20" src="https://1.gravatar.com/avatar/0c6c742c4c56a2d837a5d6eb7195a8c6?d=https%3A%2F%2Fidenticons.github.com%2F7e2674f6f4343ce9f635b86d124851ce.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="victor-homyakov" href="/okonet/modalbox/commits/master/modalbox.js?author=victor-homyakov"><img alt="Victor Homyakov" class=" js-avatar" data-user="121449" height="20" src="https://2.gravatar.com/avatar/236a0e2bccd00fd9dc3314d296196d05?d=https%3A%2F%2Fidenticons.github.com%2Fd0e541bb871209838bc2abb068fa25a5.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="chasepeeler" href="/okonet/modalbox/commits/master/modalbox.js?author=chasepeeler"><img alt="Chase Peeler" class=" js-avatar" data-user="155993" height="20" src="https://1.gravatar.com/avatar/9f86fe2aa6e5b426e8b295d81025d05b?d=https%3A%2F%2Fidenticons.github.com%2F03512f8eefd34059d837376916045aae.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nairboon" href="/okonet/modalbox/commits/master/modalbox.js?author=nairboon"><img alt="nairboon" class=" js-avatar" data-user="88032" height="20" src="https://2.gravatar.com/avatar/4787ae461e0e0dbb0f247bb0bb8cb854?d=https%3A%2F%2Fidenticons.github.com%2F5f3c856a27181292c2730972038b72b3.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Andrey Okonetchnikov" class=" js-avatar" data-user="11071" height="24" src="https://1.gravatar.com/avatar/0c6c742c4c56a2d837a5d6eb7195a8c6?d=https%3A%2F%2Fidenticons.github.com%2F7e2674f6f4343ce9f635b86d124851ce.png&amp;r=x&amp;s=140" width="24" />
            <a href="/okonet">okonet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Victor Homyakov" class=" js-avatar" data-user="121449" height="24" src="https://2.gravatar.com/avatar/236a0e2bccd00fd9dc3314d296196d05?d=https%3A%2F%2Fidenticons.github.com%2Fd0e541bb871209838bc2abb068fa25a5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/victor-homyakov">victor-homyakov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chase Peeler" class=" js-avatar" data-user="155993" height="24" src="https://1.gravatar.com/avatar/9f86fe2aa6e5b426e8b295d81025d05b?d=https%3A%2F%2Fidenticons.github.com%2F03512f8eefd34059d837376916045aae.png&amp;r=x&amp;s=140" width="24" />
            <a href="/chasepeeler">chasepeeler</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="nairboon" class=" js-avatar" data-user="88032" height="24" src="https://2.gravatar.com/avatar/4787ae461e0e0dbb0f247bb0bb8cb854?d=https%3A%2F%2Fidenticons.github.com%2F5f3c856a27181292c2730972038b72b3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/nairboon">nairboon</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>601 lines (534 sloc)</span>
          <span class="meta-divider"></span>
        <span>23.282 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/okonet/modalbox/edit/master/modalbox.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/okonet/modalbox/raw/master/modalbox.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/okonet/modalbox/blame/master/modalbox.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/okonet/modalbox/commits/master/modalbox.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/okonet/modalbox/delete/master/modalbox.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">//</span></div><div class='line' id='LC2'><span class="c1">//  ModalBox - The pop-up window thingie with AJAX, based on Prototype JS framework.</span></div><div class='line' id='LC3'><span class="c1">//</span></div><div class='line' id='LC4'><span class="c1">//  Created by Andrew Okonetchnikov</span></div><div class='line' id='LC5'><span class="c1">//  Copyright 2006-2010 okonet.ru. All rights reserved.</span></div><div class='line' id='LC6'><span class="c1">//</span></div><div class='line' id='LC7'><span class="c1">//  Licensed under MIT license.</span></div><div class='line' id='LC8'><span class="c1">//</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">IE6</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC11'>	<span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">IE6</span> <span class="o">=</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">appName</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;Microsoft Internet Explorer&quot;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">appVersion</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;MSIE 6.0&quot;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">);</span></div><div class='line' id='LC12'><span class="p">}</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">Modalbox</span><span class="p">)</span></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">Modalbox</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="nx">Modalbox</span><span class="p">.</span><span class="nx">Methods</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC18'>	<span class="nx">overrideAlert</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// Override standard browser alert message with ModalBox</span></div><div class='line' id='LC19'>	<span class="nx">focusableElements</span><span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC20'>	<span class="nx">currFocused</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC21'>	<span class="nx">initialized</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// Modalbox is visible</span></div><div class='line' id='LC22'>	<span class="nx">active</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// Modalbox is visible and active</span></div><div class='line' id='LC23'>	<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC24'>		<span class="nx">title</span><span class="o">:</span> <span class="s2">&quot;ModalBox Window&quot;</span><span class="p">,</span> <span class="c1">// Title of the ModalBox window</span></div><div class='line' id='LC25'>		<span class="nx">overlayClose</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// Close modal box by clicking on overlay</span></div><div class='line' id='LC26'>		<span class="nx">width</span><span class="o">:</span> <span class="mi">500</span><span class="p">,</span> <span class="c1">// Default width in px</span></div><div class='line' id='LC27'>		<span class="nx">height</span><span class="o">:</span> <span class="mi">90</span><span class="p">,</span> <span class="c1">// Default height in px</span></div><div class='line' id='LC28'>		<span class="nx">overlayOpacity</span><span class="o">:</span> <span class="mf">0.65</span><span class="p">,</span> <span class="c1">// Default overlay opacity</span></div><div class='line' id='LC29'>		<span class="nx">overlayDuration</span><span class="o">:</span> <span class="mf">0.25</span><span class="p">,</span> <span class="c1">// Default overlay fade in/out duration in seconds</span></div><div class='line' id='LC30'>		<span class="nx">slideDownDuration</span><span class="o">:</span> <span class="mf">0.5</span><span class="p">,</span> <span class="c1">// Default Modalbox appear slide down effect in seconds</span></div><div class='line' id='LC31'>		<span class="nx">slideUpDuration</span><span class="o">:</span> <span class="mf">0.5</span><span class="p">,</span> <span class="c1">// Default Modalbox hiding slide up effect in seconds</span></div><div class='line' id='LC32'>		<span class="nx">resizeDuration</span><span class="o">:</span> <span class="mf">0.25</span><span class="p">,</span> <span class="c1">// Default resize duration seconds</span></div><div class='line' id='LC33'>		<span class="nx">inactiveFade</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// Fades MB window on inactive state</span></div><div class='line' id='LC34'>		<span class="nx">transitions</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// Toggles transition effects. Transitions are enabled by default</span></div><div class='line' id='LC35'>		<span class="nx">loadingString</span><span class="o">:</span> <span class="s2">&quot;Please wait. Loading...&quot;</span><span class="p">,</span> <span class="c1">// Default loading string message</span></div><div class='line' id='LC36'>		<span class="nx">closeString</span><span class="o">:</span> <span class="s2">&quot;Close window&quot;</span><span class="p">,</span> <span class="c1">// Default title attribute for close window link</span></div><div class='line' id='LC37'>		<span class="nx">closeValue</span><span class="o">:</span> <span class="s2">&quot;&amp;times;&quot;</span><span class="p">,</span> <span class="c1">// Default string for close link in the header</span></div><div class='line' id='LC38'>		<span class="nx">params</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC39'>		<span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;get&#39;</span><span class="p">,</span> <span class="c1">// Default Ajax request method</span></div><div class='line' id='LC40'>		<span class="nx">autoFocusing</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// Toggles auto-focusing for form elements. Disable for long text pages.</span></div><div class='line' id='LC41'>		<span class="nx">aspnet</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// Should be true when using with ASP.NET controls. When true Modalbox window will be injected into the first form element.</span></div><div class='line' id='LC42'>		<span class="nx">resizeCSSID</span><span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC43'>	<span class="p">},</span></div><div class='line' id='LC44'>	<span class="nx">_options</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>	<span class="nx">setOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>		<span class="nb">Object</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC48'>	<span class="p">},</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>	<span class="nx">_init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'>		<span class="c1">// Setting up original options with default options</span></div><div class='line' id='LC52'>		<span class="nb">Object</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_options</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC53'>		<span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>		<span class="c1">// Creating the overlay</span></div><div class='line' id='LC56'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_overlay&quot;</span><span class="p">,</span> <span class="nx">style</span><span class="o">:</span> <span class="s2">&quot;opacity: 0&quot;</span><span class="p">});</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>		<span class="c1">// Creating the modal window</span></div><div class='line' id='LC59'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBwindowwrapper</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_windowwrapper&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span></div><div class='line' id='LC60'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_window&quot;</span><span class="p">,</span> <span class="nx">style</span><span class="o">:</span> <span class="s2">&quot;display: none&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span></div><div class='line' id='LC61'>				<span class="k">this</span><span class="p">.</span><span class="nx">MBframe</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_frame&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span></div><div class='line' id='LC62'>					<span class="k">this</span><span class="p">.</span><span class="nx">MBheader</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_header&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span></div><div class='line' id='LC63'>						<span class="k">this</span><span class="p">.</span><span class="nx">MBcaption</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_caption&quot;</span><span class="p">})</span></div><div class='line' id='LC64'>					<span class="p">)</span></div><div class='line' id='LC65'>				<span class="p">)</span></div><div class='line' id='LC66'>			<span class="p">)</span></div><div class='line' id='LC67'>		<span class="p">);</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_close&quot;</span><span class="p">,</span> <span class="nx">title</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">closeString</span><span class="p">,</span> <span class="nx">href</span><span class="o">:</span> <span class="s2">&quot;#&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span><span class="s2">&quot;&lt;span&gt;&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">closeValue</span> <span class="o">+</span> <span class="s2">&quot;&lt;/span&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC70'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBheader</span><span class="p">.</span><span class="nx">insert</span><span class="p">({</span><span class="s1">&#39;bottom&#39;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">});</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_content&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span></div><div class='line' id='LC73'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBloading</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;MB_loading&quot;</span><span class="p">}).</span><span class="nx">update</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loadingString</span><span class="p">)</span></div><div class='line' id='LC74'>		<span class="p">);</span></div><div class='line' id='LC75'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBframe</span><span class="p">.</span><span class="nx">insert</span><span class="p">({</span><span class="s1">&#39;bottom&#39;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">});</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>		<span class="c1">// Inserting into DOM. If parameter set and form element have been found will inject into it. Otherwise will inject into body as topmost element.</span></div><div class='line' id='LC78'>		<span class="c1">// Be sure to set padding and marging to null via CSS for both body and (in case of asp.net) form elements.</span></div><div class='line' id='LC79'>		<span class="kd">var</span> <span class="nx">injectToEl</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">aspnet</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">).</span><span class="nx">down</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">);</span></div><div class='line' id='LC80'>		<span class="nx">injectToEl</span><span class="p">.</span><span class="nx">insert</span><span class="p">({</span><span class="s1">&#39;top&#39;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindowwrapper</span><span class="p">});</span></div><div class='line' id='LC81'>		<span class="nx">injectToEl</span><span class="p">.</span><span class="nx">insert</span><span class="p">({</span><span class="s1">&#39;top&#39;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">});</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>		<span class="kd">var</span> <span class="nx">scrollOffsets</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">viewport</span><span class="p">.</span><span class="nx">getScrollOffsets</span><span class="p">();</span></div><div class='line' id='LC84'>		<span class="k">if</span> <span class="p">(</span><span class="nx">scrollOffsets</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;MB_window&#39;</span><span class="p">).</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">top</span><span class="o">:</span><span class="nx">scrollOffsets</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC86'>		<span class="p">}</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//apparently the X offset may also come in question		</span></div><div class='line' id='LC89'>		<span class="k">if</span> <span class="p">(</span><span class="nx">scrollOffsets</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;MB_window&#39;</span><span class="p">).</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">left</span><span class="o">:</span><span class="nx">scrollOffsets</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC91'>		<span class="p">}</span>		</div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="nx">Event</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s1">&#39;scroll&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC94'>			<span class="nx">scrollOffsets</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">viewport</span><span class="p">.</span><span class="nx">getScrollOffsets</span><span class="p">();</span></div><div class='line' id='LC95'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;MB_window&#39;</span><span class="p">).</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">top</span><span class="o">:</span><span class="nx">scrollOffsets</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC96'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;MB_window&#39;</span><span class="p">).</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">left</span><span class="o">:</span><span class="nx">scrollOffsets</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC97'>		<span class="p">});</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>		<span class="c1">// Initial scrolling position of the window. To be used for remove scrolling effect during ModalBox appearing</span></div><div class='line' id='LC100'>		<span class="k">this</span><span class="p">.</span><span class="nx">initScrollX</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">pageXOffset</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">;</span></div><div class='line' id='LC101'>		<span class="k">this</span><span class="p">.</span><span class="nx">initScrollY</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">pageYOffset</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">;</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>		<span class="c1">//Adding event observers</span></div><div class='line' id='LC104'>		<span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_hide</span><span class="p">.</span><span class="nx">bindAsEventListener</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC105'>		<span class="k">this</span><span class="p">.</span><span class="nx">kbdObserver</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_kbdHandler</span><span class="p">.</span><span class="nx">bindAsEventListener</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC106'>		<span class="k">this</span><span class="p">.</span><span class="nx">resizeObserver</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_setWidthAndPosition</span><span class="p">.</span><span class="nx">bindAsEventListener</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC107'>		<span class="k">this</span><span class="p">.</span><span class="nx">_initObservers</span><span class="p">();</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		<span class="k">this</span><span class="p">.</span><span class="nx">initialized</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// Mark as initialized</span></div><div class='line' id='LC110'>	<span class="p">},</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>	<span class="nx">show</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">content</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">initialized</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">_init</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span> <span class="c1">// Check if MB is already initialized</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>		<span class="k">this</span><span class="p">.</span><span class="nx">_cleanUpContentIDs</span><span class="p">();</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>		<span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">=</span> <span class="nx">content</span><span class="p">;</span></div><div class='line' id='LC118'>		<span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Updating title of the MB</span></div><div class='line' id='LC121'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBcaption</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">title</span><span class="p">);</span></div><div class='line' id='LC122'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// If title isn&#39;t given, the header will not displayed</span></div><div class='line' id='LC123'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBheader</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC124'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBcaption</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC125'>		<span class="p">}</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">==</span> <span class="s2">&quot;none&quot;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// First modal box appearing</span></div><div class='line' id='LC128'>			<span class="k">this</span><span class="p">.</span><span class="nx">_appear</span><span class="p">();</span></div><div class='line' id='LC129'>			<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;onShow&quot;</span><span class="p">);</span> <span class="c1">// Passing onShow callback</span></div><div class='line' id='LC130'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// If MB already on the screen, update it</span></div><div class='line' id='LC131'>			<span class="k">this</span><span class="p">.</span><span class="nx">_update</span><span class="p">();</span></div><div class='line' id='LC132'>			<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;onUpdate&quot;</span><span class="p">);</span> <span class="c1">// Passing onUpdate callback</span></div><div class='line' id='LC133'>		<span class="p">}</span></div><div class='line' id='LC134'>	<span class="p">},</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>	<span class="nx">hide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// External hide method to use from external HTML and JS</span></div><div class='line' id='LC137'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">initialized</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>			<span class="c1">// Reading for options/callbacks except if event given as a parameter</span></div><div class='line' id='LC139'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">Object</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">element</span><span class="p">))</span></div><div class='line' id='LC140'>				<span class="nb">Object</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC141'>			<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;beforeHide&quot;</span><span class="p">);</span> <span class="c1">// Passing beforeHide callback</span></div><div class='line' id='LC142'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transitions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>				<span class="nx">Effect</span><span class="p">.</span><span class="nx">SlideUp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">,</span> <span class="p">{</span> <span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">slideUpDuration</span><span class="p">,</span> <span class="nx">transition</span><span class="o">:</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">Transitions</span><span class="p">.</span><span class="nx">sinoidal</span><span class="p">,</span> <span class="nx">afterFinish</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_deinit</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span> <span class="p">});</span></div><div class='line' id='LC144'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC145'>				<span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC146'>				<span class="k">this</span><span class="p">.</span><span class="nx">_deinit</span><span class="p">();</span></div><div class='line' id='LC147'>			<span class="p">}</span></div><div class='line' id='LC148'>			<span class="nx">Event</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s1">&#39;scroll&#39;</span><span class="p">);</span></div><div class='line' id='LC149'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC150'>			<span class="k">throw</span><span class="p">(</span><span class="s2">&quot;Modalbox is not initialized.&quot;</span><span class="p">);</span></div><div class='line' id='LC151'>		<span class="p">}</span></div><div class='line' id='LC152'>	<span class="p">},</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>	<span class="nx">_hide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Internal hide method to use with overlay and close link</span></div><div class='line' id='LC155'>		<span class="nx">event</span><span class="p">.</span><span class="nx">stop</span><span class="p">();</span> <span class="c1">// Stop event propagation for link elements</span></div><div class='line' id='LC156'>		<span class="c1">// When clicked on overlay we&#39;ll check the option and in case of overlayClose == false we&#39;ll break hiding execution [Fix for #139]</span></div><div class='line' id='LC157'>		<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">element</span><span class="p">().</span><span class="nx">id</span> <span class="o">==</span> <span class="s1">&#39;MB_overlay&#39;</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayClose</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC158'>		<span class="k">this</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC159'>	<span class="p">},</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>	<span class="nx">alert</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">){</span></div><div class='line' id='LC162'>		<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;MB_alert&quot;&gt;&lt;p&gt;&#39;</span> <span class="o">+</span> <span class="nx">message</span> <span class="o">+</span> <span class="s1">&#39;&lt;/p&gt;&lt;input type=&quot;button&quot; onclick=&quot;Modalbox.hide()&quot; value=&quot;OK&quot; /&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC163'>		<span class="nx">Modalbox</span><span class="p">.</span><span class="nx">show</span><span class="p">(</span><span class="nx">html</span><span class="p">,</span> <span class="p">{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Alert: &#39;</span> <span class="o">+</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="nx">width</span><span class="o">:</span> <span class="mi">300</span><span class="p">});</span></div><div class='line' id='LC164'>	<span class="p">},</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>	<span class="nx">_appear</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="c1">// First appearing of MB</span></div><div class='line' id='LC167'>		<span class="k">if</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">IE6</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Preparing IE 6 for showing modalbox</span></div><div class='line' id='LC168'>			<span class="nb">window</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC169'>			<span class="k">this</span><span class="p">.</span><span class="nx">_prepareIEHtml</span><span class="p">(</span><span class="s2">&quot;100%&quot;</span><span class="p">,</span> <span class="s2">&quot;hidden&quot;</span><span class="p">);</span></div><div class='line' id='LC170'>			<span class="k">this</span><span class="p">.</span><span class="nx">_prepareIESelects</span><span class="p">(</span><span class="s2">&quot;hidden&quot;</span><span class="p">);</span></div><div class='line' id='LC171'>		<span class="p">}</span></div><div class='line' id='LC172'>		<span class="k">this</span><span class="p">.</span><span class="nx">_setWidth</span><span class="p">();</span></div><div class='line' id='LC173'>		<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transitions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">setOpacity</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC175'>			<span class="k">new</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">Fade</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC176'>				<span class="nx">from</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC177'>				<span class="nx">to</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayOpacity</span><span class="p">,</span></div><div class='line' id='LC178'>				<span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayDuration</span><span class="p">,</span></div><div class='line' id='LC179'>				<span class="nx">afterFinish</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC180'>					<span class="k">new</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">SlideDown</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC181'>						<span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">slideDownDuration</span><span class="p">,</span></div><div class='line' id='LC182'>						<span class="nx">transition</span><span class="o">:</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">Transitions</span><span class="p">.</span><span class="nx">sinoidal</span><span class="p">,</span></div><div class='line' id='LC183'>						<span class="nx">afterFinish</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">loadContent</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC184'>					<span class="p">});</span></div><div class='line' id='LC185'>				<span class="p">}).</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC186'>			<span class="p">});</span></div><div class='line' id='LC187'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC188'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">setOpacity</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayOpacity</span><span class="p">);</span></div><div class='line' id='LC189'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC190'>			<span class="k">this</span><span class="p">.</span><span class="nx">loadContent</span><span class="p">();</span></div><div class='line' id='LC191'>		<span class="p">}</span></div><div class='line' id='LC192'>		<span class="nx">Event</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">resizeObserver</span><span class="p">);</span></div><div class='line' id='LC193'>	<span class="p">},</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>	<span class="nx">resize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">byWidth</span><span class="p">,</span> <span class="nx">byHeight</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Change size of MB without content reloading</span></div><div class='line' id='LC196'>		<span class="kd">var</span> <span class="nx">oWidth</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">).</span><span class="nx">getWidth</span><span class="p">();</span></div><div class='line' id='LC197'>		<span class="kd">var</span> <span class="nx">wHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">).</span><span class="nx">getHeight</span><span class="p">();</span></div><div class='line' id='LC198'>		<span class="kd">var</span> <span class="nx">wWidth</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">).</span><span class="nx">getWidth</span><span class="p">();</span></div><div class='line' id='LC199'>		<span class="kd">var</span> <span class="nx">hHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBheader</span><span class="p">).</span><span class="nx">getHeight</span><span class="p">();</span></div><div class='line' id='LC200'>		<span class="kd">var</span> <span class="nx">cHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">getHeight</span><span class="p">();</span></div><div class='line' id='LC201'>		<span class="kd">var</span> <span class="nx">newHeight</span> <span class="o">=</span> <span class="p">((</span><span class="nx">wHeight</span> <span class="o">-</span> <span class="nx">hHeight</span> <span class="o">+</span> <span class="nx">byHeight</span><span class="p">)</span> <span class="o">&lt;</span> <span class="nx">cHeight</span><span class="p">)</span> <span class="o">?</span> <span class="p">(</span><span class="nx">cHeight</span> <span class="o">+</span> <span class="nx">hHeight</span><span class="p">)</span> <span class="o">:</span> <span class="p">(</span><span class="nx">wHeight</span> <span class="o">+</span> <span class="nx">byHeight</span><span class="p">);</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>		<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">);</span></div><div class='line' id='LC204'>		<span class="kd">var</span> <span class="nx">contentEl</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">);</span></div><div class='line' id='LC205'>		<span class="kd">var</span> <span class="nx">windowBottomMargin</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span></div><div class='line' id='LC206'>		<span class="nx">newHeight</span> <span class="o">+=</span> <span class="nx">windowBottomMargin</span><span class="p">;</span></div><div class='line' id='LC207'>		<span class="kd">var</span> <span class="nx">windowOffset</span> <span class="o">=</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;margin-top&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;margin-bottom&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;border-top-width&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;border-bottom-width&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">))</span> <span class="o">+</span> <span class="nx">windowBottomMargin</span><span class="p">;</span></div><div class='line' id='LC208'>		<span class="kd">var</span> <span class="nx">contentPadding</span> <span class="o">=</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">contentEl</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;padding-top&#39;</span><span class="p">))</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">contentEl</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;padding-bottom&#39;</span><span class="p">)));</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>		<span class="k">if</span> <span class="p">((</span><span class="nx">newHeight</span> <span class="o">+</span> <span class="nx">windowOffset</span> <span class="o">+</span> <span class="nx">contentPadding</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">viewport</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC211'>			<span class="c1">// adjust window height to account for margins and border widths</span></div><div class='line' id='LC212'>			<span class="nx">newHeight</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">viewport</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">()</span> <span class="o">-</span> <span class="nx">windowOffset</span> <span class="o">-</span> <span class="nx">windowBottomMargin</span><span class="p">;</span></div><div class='line' id='LC213'>			<span class="c1">// calculate content height including header height and padding values</span></div><div class='line' id='LC214'>			<span class="nx">newcHeight</span> <span class="o">=</span> <span class="nx">newHeight</span> <span class="o">-</span> <span class="nx">hHeight</span> <span class="o">-</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBframe</span><span class="p">).</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;padding-bottom&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;padding-bottom&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC215'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">height</span><span class="o">:</span><span class="nx">newcHeight</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC216'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC217'>			<span class="c1">// release any MB_content height set prior to establish scrollbars in content area</span></div><div class='line' id='LC218'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">height</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">});</span></div><div class='line' id='LC219'>		<span class="p">}</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>		<span class="kd">var</span> <span class="nx">newWidth</span> <span class="o">=</span> <span class="nx">wWidth</span> <span class="o">+</span> <span class="nx">byWidth</span><span class="p">;</span></div><div class='line' id='LC222'>		<span class="c1">//var newStyle = {width: newWidth + &quot;px&quot;, height: newHeight + &quot;px&quot;, left: (o.width - newWidth)/2 + &quot;px&quot;};</span></div><div class='line' id='LC223'>		<span class="kd">var</span> <span class="nx">newStyle</span> <span class="o">=</span> <span class="p">{</span><span class="nx">width</span><span class="o">:</span> <span class="nx">newWidth</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">,</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">newHeight</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">};</span></div><div class='line' id='LC224'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">newWidth</span><span class="p">;</span></div><div class='line' id='LC225'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span> <span class="c1">// Passing callbacks</span></div><div class='line' id='LC226'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transitions</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">Modalbox</span><span class="p">.</span><span class="nx">animating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>			<span class="nx">Modalbox</span><span class="p">.</span><span class="nx">animating</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC228'>			<span class="k">new</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">Morph</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC229'>				<span class="nx">style</span><span class="o">:</span> <span class="nx">newStyle</span><span class="p">,</span></div><div class='line' id='LC230'>				<span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeDuration</span><span class="p">,</span></div><div class='line' id='LC231'>				<span class="nx">beforeStart</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fx</span><span class="p">){</span></div><div class='line' id='LC232'>					<span class="nx">fx</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">overflow</span><span class="o">:</span> <span class="s2">&quot;hidden&quot;</span><span class="p">});</span> <span class="c1">// Fix for MSIE 6 to resize correctly</span></div><div class='line' id='LC233'>				<span class="p">},</span></div><div class='line' id='LC234'>				<span class="nx">afterFinish</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">fx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>					<span class="nx">fx</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">overflow</span><span class="o">:</span> <span class="s2">&quot;visible&quot;</span><span class="p">});</span></div><div class='line' id='LC236'>					<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;_afterResize&quot;</span><span class="p">);</span> <span class="c1">// Passing internal callback</span></div><div class='line' id='LC237'>					<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;afterResize&quot;</span><span class="p">);</span> <span class="c1">// Passing callback</span></div><div class='line' id='LC238'>					<span class="nx">Modalbox</span><span class="p">.</span><span class="nx">animating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC239'>				<span class="p">}).</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC240'>			<span class="p">});</span></div><div class='line' id='LC241'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC242'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">(</span><span class="nx">newStyle</span><span class="p">);</span></div><div class='line' id='LC243'>			<span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC244'>				<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;_afterResize&quot;</span><span class="p">);</span> <span class="c1">// Passing internal callback</span></div><div class='line' id='LC245'>				<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;afterResize&quot;</span><span class="p">);</span> <span class="c1">// Passing callback</span></div><div class='line' id='LC246'>			<span class="p">}).</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">defer</span><span class="p">();</span></div><div class='line' id='LC247'>		<span class="p">}</span></div><div class='line' id='LC248'>	<span class="p">},</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>	<span class="nx">resizeToContent</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC251'>		<span class="c1">// Resizes the modalbox window to the actual content height.</span></div><div class='line' id='LC252'>		<span class="c1">// This might be useful to resize modalbox after some content modifications which were changed content height.</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>			<span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC256'>		<span class="p">}</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>		<span class="c1">// check to see if MB_content includes any images</span></div><div class='line' id='LC259'>		<span class="kd">var</span> <span class="nx">mbimages</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;MB_content&#39;</span><span class="p">).</span><span class="nx">select</span><span class="p">(</span><span class="s1">&#39;img&#39;</span><span class="p">);</span></div><div class='line' id='LC260'>		<span class="kd">var</span> <span class="nx">totalimages</span> <span class="o">=</span> <span class="nx">mbimages</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC261'>		<span class="k">if</span> <span class="p">(</span><span class="nx">mbimages</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC262'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">imagesloaded</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>				<span class="kd">var</span> <span class="nx">loadedImages</span> <span class="o">=</span> <span class="nx">$A</span><span class="p">();</span></div><div class='line' id='LC265'>				<span class="kd">var</span> <span class="nx">loadedImageTotal</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC266'>				<span class="nx">mbimages</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">idx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC267'>					<span class="nx">loadedImages</span><span class="p">[</span><span class="nx">idx</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Image</span><span class="p">();</span></div><div class='line' id='LC268'>					<span class="nx">loadedImages</span><span class="p">[</span><span class="nx">idx</span><span class="p">].</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">src</span><span class="p">;</span></div><div class='line' id='LC269'>					<span class="nx">loadedImages</span><span class="p">[</span><span class="nx">idx</span><span class="p">].</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC270'>						<span class="nx">loadedImageTotal</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC271'>						<span class="k">if</span> <span class="p">(</span><span class="nx">loadedImageTotal</span> <span class="o">==</span> <span class="nx">totalimages</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC272'>							<span class="c1">// make sure all images have been rendered by checking their height</span></div><div class='line' id='LC273'>							<span class="kd">var</span> <span class="nx">imageincomplete</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC274'>							<span class="nx">mbimages</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>								<span class="k">if</span> <span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">height</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'>									<span class="nx">imageincomplete</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC277'>								<span class="p">}</span></div><div class='line' id='LC278'>							<span class="p">});</span></div><div class='line' id='LC279'>							<span class="k">if</span> <span class="p">(</span><span class="nx">imageincomplete</span> <span class="o">||</span> <span class="nx">Modalbox</span><span class="p">.</span><span class="nx">animating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC280'>								<span class="c1">// some image hasn&#39;t been rendered yet, trigger resize loop until it is</span></div><div class='line' id='LC281'>								<span class="nx">Modalbox</span><span class="p">.</span><span class="nx">resizeToContent</span><span class="p">();</span></div><div class='line' id='LC282'>							<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC283'>								<span class="c1">// trigger one final resize, but set imagesloaded option to skip inspection of images</span></div><div class='line' id='LC284'>								<span class="nx">options</span><span class="p">.</span><span class="nx">imagesloaded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC285'>								<span class="nx">Modalbox</span><span class="p">.</span><span class="nx">resizeToContent</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC286'>							<span class="p">}</span></div><div class='line' id='LC287'>						<span class="p">}</span></div><div class='line' id='LC288'>					<span class="p">}</span></div><div class='line' id='LC289'>				<span class="p">})</span></div><div class='line' id='LC290'>			<span class="p">}</span></div><div class='line' id='LC291'>		<span class="p">}</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>		<span class="kd">var</span> <span class="nx">byWidth</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">byHeight</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">();</span></div><div class='line' id='LC294'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeCSSID</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeCSSID</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC295'>			<span class="c1">// byWidth is the amount of pixels needed to increase/decrease window to meet width of options.resizeCSSID</span></div><div class='line' id='LC296'>			<span class="c1">// plus a 10 pixel margin to accommodate scrollbars</span></div><div class='line' id='LC297'>			<span class="nx">byWidth</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">resizeCSSID</span><span class="p">).</span><span class="nx">getWidth</span><span class="p">()</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">).</span><span class="nx">getWidth</span><span class="p">()</span> <span class="o">+</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;padding-left&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">).</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;padding-right&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">))</span> <span class="o">+</span> <span class="mi">15</span><span class="p">;</span></div><div class='line' id='LC298'>		<span class="p">}</span></div><div class='line' id='LC299'>		<span class="k">if</span> <span class="p">(</span><span class="nx">byHeight</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>			<span class="k">this</span><span class="p">.</span><span class="nx">resize</span><span class="p">(</span><span class="nx">byWidth</span><span class="p">,</span> <span class="nx">byHeight</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC301'>		<span class="p">}</span></div><div class='line' id='LC302'>	<span class="p">},</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>	<span class="nx">resizeToInclude</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC305'>		<span class="c1">// Resizes the modalbox window to the cumulative height of element. Calculations are using CSS properties for margins and border.</span></div><div class='line' id='LC306'>		<span class="c1">// This method might be useful to resize modalbox before including or updating content.</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>		<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC309'>		<span class="kd">var</span> <span class="nx">elHeight</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">()</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;margin-top&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;margin-bottom&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;border-top-width&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getStyle</span><span class="p">(</span><span class="s1">&#39;border-bottom-width&#39;</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC310'>		<span class="k">if</span> <span class="p">(</span><span class="nx">elHeight</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>			<span class="k">this</span><span class="p">.</span><span class="nx">resize</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">elHeight</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC312'>		<span class="p">}</span></div><div class='line' id='LC313'>	<span class="p">},</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>	<span class="nx">_update</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="c1">// Updating MB in case of wizards</span></div><div class='line' id='LC316'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBloading</span><span class="p">).</span><span class="nx">update</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loadingString</span><span class="p">));</span></div><div class='line' id='LC317'>		<span class="k">this</span><span class="p">.</span><span class="nx">loadContent</span><span class="p">();</span></div><div class='line' id='LC318'>	<span class="p">},</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>	<span class="nx">loadContent</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC321'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;beforeLoad&quot;</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// If callback passed false, skip loading of the content</span></div><div class='line' id='LC322'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'>				<span class="kd">var</span> <span class="nx">htmlRegExp</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="sr">/&lt;\/?[^&gt;]+&gt;/gi</span><span class="p">);</span></div><div class='line' id='LC324'>				<span class="k">if</span> <span class="p">(</span><span class="nx">htmlRegExp</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">))</span> <span class="p">{</span> <span class="c1">// Plain HTML given as a parameter</span></div><div class='line' id='LC325'>					<span class="k">this</span><span class="p">.</span><span class="nx">_processContent</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">);</span></div><div class='line' id='LC326'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// URL given as a parameter. We&#39;ll request it via Ajax</span></div><div class='line' id='LC327'>					<span class="k">new</span> <span class="nx">Ajax</span><span class="p">.</span><span class="nx">Request</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC328'>						<span class="nx">method</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">method</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC329'>						<span class="nx">parameters</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span></div><div class='line' id='LC330'>						<span class="nx">onComplete</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>							<span class="k">this</span><span class="p">.</span><span class="nx">_processContent</span><span class="p">(</span><span class="nx">response</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC332'>						<span class="p">}).</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC333'>						<span class="nx">onException</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">exception</span><span class="p">){</span></div><div class='line' id='LC334'>							<span class="nx">Modalbox</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC335'>							<span class="k">throw</span><span class="p">(</span><span class="s1">&#39;Modalbox Loading Error: &#39;</span> <span class="o">+</span> <span class="nx">exception</span><span class="p">);</span></div><div class='line' id='LC336'>						<span class="p">}</span></div><div class='line' id='LC337'>					<span class="p">});</span></div><div class='line' id='LC338'>				<span class="p">}</span></div><div class='line' id='LC339'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// HTML Object is given</span></div><div class='line' id='LC340'>				<span class="k">this</span><span class="p">.</span><span class="nx">_insertContent</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">);</span></div><div class='line' id='LC341'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC342'>				<span class="k">this</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC343'>				<span class="k">throw</span><span class="p">(</span><span class="s1">&#39;Modalbox Parameters Error: Please specify correct URL or HTML element (plain HTML or object)&#39;</span><span class="p">);</span></div><div class='line' id='LC344'>			<span class="p">}</span></div><div class='line' id='LC345'>		<span class="p">}</span></div><div class='line' id='LC346'>	<span class="p">},</span></div><div class='line' id='LC347'><br/></div><div class='line' id='LC348'>	<span class="nx">_processContent</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">content</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC349'>		<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="nx">content</span><span class="p">.</span><span class="nx">stripScripts</span><span class="p">(),</span> <span class="nx">scripts</span> <span class="o">=</span> <span class="nx">content</span><span class="p">.</span><span class="nx">extractScripts</span><span class="p">();</span></div><div class='line' id='LC350'>		<span class="k">this</span><span class="p">.</span><span class="nx">_insertContent</span><span class="p">(</span><span class="nx">html</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC351'>			<span class="nx">scripts</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">script</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'>				<span class="k">return</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">script</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s2">&quot;&lt;!--&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="s2">&quot;// --&gt;&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">));</span></div><div class='line' id='LC353'>			<span class="p">},</span> <span class="nb">window</span><span class="p">);</span></div><div class='line' id='LC354'>		<span class="p">});</span></div><div class='line' id='LC355'>	<span class="p">},</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>	<span class="nx">_insertContent</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">content</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC358'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">hide</span><span class="p">().</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">content</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Plain HTML is given</span></div><div class='line' id='LC361'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">style</span><span class="o">:</span> <span class="s2">&quot;display: none&quot;</span> <span class="p">}).</span><span class="nx">update</span><span class="p">(</span><span class="nx">content</span><span class="p">)).</span><span class="nx">down</span><span class="p">().</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC362'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">content</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// HTML Object is given</span></div><div class='line' id='LC363'>			<span class="kd">var</span> <span class="nx">_htmlObj</span> <span class="o">=</span> <span class="nx">content</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span> <span class="c1">// If node is already a part of DOM we&#39;ll clone it</span></div><div class='line' id='LC364'>			<span class="c1">// If cloneable element has ID attribute defined, modify it to prevent duplicates</span></div><div class='line' id='LC365'>			<span class="k">if</span> <span class="p">(</span><span class="nx">content</span><span class="p">.</span><span class="nx">id</span><span class="p">)</span> <span class="nx">content</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s2">&quot;MB_&quot;</span> <span class="o">+</span> <span class="nx">content</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC366'>			<span class="c1">// Add prefix for IDs on all elements inside the DOM node</span></div><div class='line' id='LC367'>			<span class="nx">$</span><span class="p">(</span><span class="nx">content</span><span class="p">).</span><span class="nx">select</span><span class="p">(</span><span class="s1">&#39;*[id]&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span> <span class="nx">el</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s2">&quot;MB_&quot;</span> <span class="o">+</span> <span class="nx">el</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC368'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="nx">_htmlObj</span><span class="p">).</span><span class="nx">down</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC369'>			<span class="k">if</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">IE6</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Toggling back visibility for hidden selects in IE</span></div><div class='line' id='LC370'>				<span class="k">this</span><span class="p">.</span><span class="nx">_prepareIESelects</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="s2">&quot;#MB_content &quot;</span><span class="p">);</span></div><div class='line' id='LC371'>			<span class="p">}</span></div><div class='line' id='LC372'>		<span class="p">}</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'>		<span class="c1">// Prepare and resize modal box for content</span></div><div class='line' id='LC375'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>			<span class="k">this</span><span class="p">.</span><span class="nx">resize</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">).</span><span class="nx">getWidth</span><span class="p">()),</span> <span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">()</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">).</span><span class="nx">getHeight</span><span class="p">()</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">MBheader</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">(),</span> <span class="p">{</span></div><div class='line' id='LC377'>				<span class="nx">afterResize</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC378'>					<span class="k">this</span><span class="p">.</span><span class="nx">_putContent</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">callback</span><span class="p">).</span><span class="nx">defer</span><span class="p">();</span> <span class="c1">// MSIE fix</span></div><div class='line' id='LC379'>				<span class="p">}).</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC380'>			<span class="p">});</span></div><div class='line' id='LC381'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// Height is defined. Creating a scrollable window</span></div><div class='line' id='LC382'>			<span class="k">this</span><span class="p">.</span><span class="nx">_setWidth</span><span class="p">();</span></div><div class='line' id='LC383'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">({</span></div><div class='line' id='LC384'>				<span class="nx">overflow</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="p">,</span></div><div class='line' id='LC385'>				<span class="nx">height</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">()</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">MBheader</span><span class="p">.</span><span class="nx">getHeight</span><span class="p">()</span> <span class="o">-</span> <span class="mi">13</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span></div><div class='line' id='LC386'>			<span class="p">});</span></div><div class='line' id='LC387'>			<span class="k">this</span><span class="p">.</span><span class="nx">_putContent</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">callback</span><span class="p">).</span><span class="nx">defer</span><span class="p">();</span> <span class="c1">// MSIE fix</span></div><div class='line' id='LC388'>		<span class="p">}</span></div><div class='line' id='LC389'>	<span class="p">},</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>	<span class="nx">_putContent</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC392'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC393'>		<span class="k">this</span><span class="p">.</span><span class="nx">_findFocusableElements</span><span class="p">();</span></div><div class='line' id='LC394'>		<span class="k">this</span><span class="p">.</span><span class="nx">_setFocus</span><span class="p">();</span> <span class="c1">// Setting focus on first &#39;focusable&#39; element in content (input, select, textarea, link or button)</span></div><div class='line' id='LC395'>		<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">callback</span><span class="p">))</span></div><div class='line' id='LC396'>			<span class="nx">callback</span><span class="p">();</span> <span class="c1">// Executing internal JS from loaded content</span></div><div class='line' id='LC397'>		<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;afterLoad&quot;</span><span class="p">);</span> <span class="c1">// Passing callback</span></div><div class='line' id='LC398'>	<span class="p">},</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>	<span class="nx">activate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC401'>		<span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC402'>		<span class="k">this</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC403'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayClose</span><span class="p">)</span></div><div class='line' id='LC404'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">);</span></div><div class='line' id='LC405'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC406'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transitions</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">inactiveFade</span><span class="p">)</span></div><div class='line' id='LC407'>			<span class="k">new</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">Appear</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">,</span> <span class="p">{</span><span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">slideUpDuration</span><span class="p">});</span></div><div class='line' id='LC408'>	<span class="p">},</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'>	<span class="nx">deactivate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC411'>		<span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC412'>		<span class="k">this</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC413'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayClose</span><span class="p">)</span></div><div class='line' id='LC414'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">);</span></div><div class='line' id='LC415'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC416'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transitions</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">inactiveFade</span><span class="p">)</span></div><div class='line' id='LC417'>			<span class="k">new</span> <span class="nx">Effect</span><span class="p">.</span><span class="nx">Fade</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">,</span> <span class="p">{</span><span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">slideUpDuration</span><span class="p">,</span> <span class="nx">to</span><span class="o">:</span> <span class="mf">0.75</span><span class="p">});</span></div><div class='line' id='LC418'>	<span class="p">},</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>	<span class="nx">_initObservers</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC421'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">);</span></div><div class='line' id='LC422'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayClose</span><span class="p">)</span></div><div class='line' id='LC423'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">);</span></div><div class='line' id='LC424'>		<span class="c1">// Gecko and Opera are moving focus a way too fast, all other browsers are okay with keydown</span></div><div class='line' id='LC425'>		<span class="kd">var</span> <span class="nx">kbdEvent</span> <span class="o">=</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">Gecko</span> <span class="o">||</span> <span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">Opera</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;keypress&quot;</span> <span class="o">:</span> <span class="s2">&quot;keydown&quot;</span><span class="p">;</span></div><div class='line' id='LC426'>		<span class="nx">Event</span><span class="p">.</span><span class="nx">observe</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">kbdEvent</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">kbdObserver</span><span class="p">);</span></div><div class='line' id='LC427'>	<span class="p">},</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>	<span class="nx">_removeObservers</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC430'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">);</span></div><div class='line' id='LC431'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayClose</span><span class="p">)</span></div><div class='line' id='LC432'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hideObserver</span><span class="p">);</span></div><div class='line' id='LC433'>		<span class="kd">var</span> <span class="nx">kbdEvent</span> <span class="o">=</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">Gecko</span> <span class="o">||</span> <span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">Opera</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;keypress&quot;</span> <span class="o">:</span> <span class="s2">&quot;keydown&quot;</span><span class="p">;</span></div><div class='line' id='LC434'>		<span class="nx">Event</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">kbdEvent</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">kbdObserver</span><span class="p">);</span></div><div class='line' id='LC435'>	<span class="p">},</span></div><div class='line' id='LC436'><br/></div><div class='line' id='LC437'>	<span class="nx">_setFocus</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC438'>		<span class="c1">// Setting focus to the first &#39;focusable&#39; element which is one with tabindex = 1 or the first in the form loaded.</span></div><div class='line' id='LC439'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">autoFocusing</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// autoFocusing should is enabled in options. Fixes #30</span></div><div class='line' id='LC440'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC441'>				<span class="kd">var</span> <span class="nx">firstEl</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">el</span><span class="p">){</span></div><div class='line' id='LC442'>					<span class="k">return</span> <span class="nx">el</span><span class="p">.</span><span class="nx">tabIndex</span> <span class="o">==</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC443'>				<span class="p">})</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC444'>				<span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">toArray</span><span class="p">().</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">firstEl</span><span class="p">);</span></div><div class='line' id='LC445'>				<span class="nx">firstEl</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span> <span class="c1">// Focus on first focusable element except close button</span></div><div class='line' id='LC446'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">.</span><span class="nx">visible</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC447'>				<span class="k">this</span><span class="p">.</span><span class="nx">MBclose</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span> <span class="c1">// If no focusable elements exist focus on close button</span></div><div class='line' id='LC448'>			<span class="p">}</span></div><div class='line' id='LC449'>		<span class="p">}</span></div><div class='line' id='LC450'>	<span class="p">},</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>	<span class="nx">_findFocusableElements</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="c1">// Collect form elements and links from MB content</span></div><div class='line' id='LC453'>		<span class="c1">// TODO maybe add :enabled to select and textarea elements</span></div><div class='line' id='LC454'>		<span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="s1">&#39;input:not([type=hidden]):enabled, select, textarea, button, a[href]&#39;</span><span class="p">);</span></div><div class='line' id='LC455'>	<span class="p">},</span></div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>	<span class="nx">_kbdHandler</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>		<span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">element</span><span class="p">();</span></div><div class='line' id='LC459'>		<span class="k">switch</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_TAB</span><span class="o">:</span></div><div class='line' id='LC461'>				<span class="nx">event</span><span class="p">.</span><span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC462'>				<span class="k">this</span><span class="p">.</span><span class="nx">_findFocusableElements</span><span class="p">();</span></div><div class='line' id='LC463'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="c1">// Do nothing if there is no elements to gain focus</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>				<span class="c1">// Switching currFocused to the element which was focused by mouse instead of TAB-key. Fix for #134</span></div><div class='line' id='LC466'>				<span class="k">if</span> <span class="p">(</span><span class="nx">node</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span><span class="p">])</span></div><div class='line' id='LC467'>					<span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></div><div class='line' id='LC468'><br/></div><div class='line' id='LC469'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Focusing in direct order</span></div><div class='line' id='LC470'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC471'>						<span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC472'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC473'>						<span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC474'>					<span class="p">}</span></div><div class='line' id='LC475'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// Shift key is pressed. Focusing in reverse order</span></div><div class='line' id='LC476'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC477'>						<span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC478'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC479'>						<span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC480'>					<span class="p">}</span></div><div class='line' id='LC481'>				<span class="p">}</span></div><div class='line' id='LC482'>				<span class="k">this</span><span class="p">.</span><span class="nx">focusableElements</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">currFocused</span><span class="p">].</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC483'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC484'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_ESC</span><span class="o">:</span></div><div class='line' id='LC485'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">active</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">_hide</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC486'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC487'>			<span class="k">case</span> <span class="mi">32</span><span class="o">:</span></div><div class='line' id='LC488'>				<span class="k">this</span><span class="p">.</span><span class="nx">_preventScroll</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC489'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC490'>			<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="c1">// For Gecko browsers compatibility</span></div><div class='line' id='LC491'>				<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="o">==</span> <span class="mi">32</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">_preventScroll</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC492'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC493'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_UP</span><span class="o">:</span></div><div class='line' id='LC494'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_DOWN</span><span class="o">:</span></div><div class='line' id='LC495'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_PAGEDOWN</span><span class="o">:</span></div><div class='line' id='LC496'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_PAGEUP</span><span class="o">:</span></div><div class='line' id='LC497'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_HOME</span><span class="o">:</span></div><div class='line' id='LC498'>			<span class="k">case</span> <span class="nx">Event</span><span class="p">.</span><span class="nx">KEY_END</span><span class="o">:</span></div><div class='line' id='LC499'>				<span class="kd">var</span> <span class="nx">tagName</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC500'>				<span class="c1">// Safari operates in slightly different way. This realization is still buggy in Safari.</span></div><div class='line' id='LC501'>				<span class="k">if</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">WebKit</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">[</span><span class="s2">&quot;textarea&quot;</span><span class="p">,</span> <span class="s2">&quot;select&quot;</span><span class="p">].</span><span class="nx">include</span><span class="p">(</span><span class="nx">tagName</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC502'>					<span class="nx">event</span><span class="p">.</span><span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC503'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">tagName</span> <span class="o">==</span> <span class="s2">&quot;input&quot;</span> <span class="o">&amp;&amp;</span> <span class="p">[</span><span class="s2">&quot;submit&quot;</span><span class="p">,</span> <span class="s2">&quot;button&quot;</span><span class="p">].</span><span class="nx">include</span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">type</span><span class="p">))</span> <span class="o">||</span> <span class="p">(</span><span class="nx">tagName</span> <span class="o">==</span> <span class="s2">&quot;a&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC504'>					<span class="nx">event</span><span class="p">.</span><span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC505'>				<span class="p">}</span></div><div class='line' id='LC506'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC507'>		<span class="p">}</span></div><div class='line' id='LC508'>	<span class="p">},</span></div><div class='line' id='LC509'><br/></div><div class='line' id='LC510'>	<span class="nx">_preventScroll</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Disabling scrolling by &quot;space&quot; key</span></div><div class='line' id='LC511'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">[</span><span class="s2">&quot;input&quot;</span><span class="p">,</span> <span class="s2">&quot;textarea&quot;</span><span class="p">,</span> <span class="s2">&quot;select&quot;</span><span class="p">,</span> <span class="s2">&quot;button&quot;</span><span class="p">].</span><span class="nx">include</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">element</span><span class="p">().</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()))</span></div><div class='line' id='LC512'>			<span class="nx">event</span><span class="p">.</span><span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC513'>	<span class="p">},</span></div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>	<span class="nx">_deinit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC516'>		<span class="k">this</span><span class="p">.</span><span class="nx">_removeObservers</span><span class="p">();</span></div><div class='line' id='LC517'>		<span class="nx">Event</span><span class="p">.</span><span class="nx">stopObserving</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">resizeObserver</span><span class="p">);</span></div><div class='line' id='LC518'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transitions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC519'>			<span class="nx">Effect</span><span class="p">.</span><span class="nx">toggle</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">,</span> <span class="s1">&#39;appear&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">duration</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overlayDuration</span><span class="p">,</span> <span class="nx">afterFinish</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_removeElements</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span> <span class="p">});</span></div><div class='line' id='LC520'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC521'>			<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC522'>			<span class="k">this</span><span class="p">.</span><span class="nx">_removeElements</span><span class="p">();</span></div><div class='line' id='LC523'>		<span class="p">}</span></div><div class='line' id='LC524'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBcontent</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">overflow</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">height</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">});</span></div><div class='line' id='LC525'>	<span class="p">},</span></div><div class='line' id='LC526'><br/></div><div class='line' id='LC527'>	<span class="nx">_cleanUpContentIDs</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC528'>		<span class="c1">// Replace prefixes &#39;MB_&#39; in IDs for the original content</span></div><div class='line' id='LC529'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC530'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">id</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/MB_/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC531'>				<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/MB_/</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC532'>			<span class="p">}</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>			<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="s1">&#39;*[id]&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC535'>				<span class="nx">el</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/MB_/</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC536'>			<span class="p">});</span></div><div class='line' id='LC537'>		<span class="p">}</span></div><div class='line' id='LC538'>	<span class="p">},</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>	<span class="nx">_removeElements</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC541'>		<span class="k">if</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">Opera</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Remove overlay after-effects in Opera</span></div><div class='line' id='LC542'>			<span class="nb">window</span><span class="p">.</span><span class="nx">scrollBy</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC543'>		<span class="p">}</span></div><div class='line' id='LC544'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBoverlay</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC545'>		<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">MBwindowwrapper</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC546'>		<span class="k">if</span> <span class="p">(</span><span class="nx">Prototype</span><span class="p">.</span><span class="nx">Browser</span><span class="p">.</span><span class="nx">IE6</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>			<span class="k">this</span><span class="p">.</span><span class="nx">_prepareIEHtml</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// If set to auto MSIE will show horizontal scrolling</span></div><div class='line' id='LC548'>			<span class="k">this</span><span class="p">.</span><span class="nx">_prepareIESelects</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC549'>			<span class="nb">window</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">initScrollX</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">initScrollY</span><span class="p">);</span></div><div class='line' id='LC550'>		<span class="p">}</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>		<span class="k">this</span><span class="p">.</span><span class="nx">_cleanUpContentIDs</span><span class="p">();</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>		<span class="c1">// Initialized will be set to false</span></div><div class='line' id='LC555'>		<span class="k">this</span><span class="p">.</span><span class="nx">initialized</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC556'>		<span class="k">this</span><span class="p">.</span><span class="nx">event</span><span class="p">(</span><span class="s2">&quot;afterHide&quot;</span><span class="p">);</span> <span class="c1">// Passing afterHide callback</span></div><div class='line' id='LC557'>		<span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_options</span><span class="p">);</span> <span class="c1">// Settings options object into initial state</span></div><div class='line' id='LC558'>	<span class="p">},</span></div><div class='line' id='LC559'><br/></div><div class='line' id='LC560'>	<span class="nx">_setWidth</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="c1">// Set size</span></div><div class='line' id='LC561'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">({</span><span class="nx">width</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">,</span> <span class="nx">height</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">});</span></div><div class='line' id='LC562'>	<span class="p">},</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>	<span class="nx">_setWidthAndPosition</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC565'>		<span class="k">this</span><span class="p">.</span><span class="nx">MBwindow</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">({</span></div><div class='line' id='LC566'>			<span class="nx">width</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span></div><div class='line' id='LC567'>		<span class="p">});</span></div><div class='line' id='LC568'>	<span class="p">},</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>	<span class="nx">_prepareIEHtml</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">height</span><span class="p">,</span> <span class="nx">overflow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC571'>		<span class="c1">// IE6 requires width and height set to 100% and overflow hidden</span></div><div class='line' id='LC572'>		<span class="nx">$$</span><span class="p">(</span><span class="s1">&#39;html, body&#39;</span><span class="p">).</span><span class="nx">invoke</span><span class="p">(</span><span class="s1">&#39;setStyle&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC573'>			<span class="nx">width</span><span class="o">:</span> <span class="nx">height</span><span class="p">,</span></div><div class='line' id='LC574'>			<span class="nx">height</span><span class="o">:</span> <span class="nx">height</span><span class="p">,</span></div><div class='line' id='LC575'>			<span class="nx">overflow</span><span class="o">:</span> <span class="nx">overflow</span></div><div class='line' id='LC576'>		<span class="p">});</span></div><div class='line' id='LC577'>	<span class="p">},</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'>	<span class="nx">_prepareIESelects</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">visibility</span><span class="p">,</span> <span class="nx">prefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC580'>		<span class="c1">// Toggle visibility for select elements</span></div><div class='line' id='LC581'>		<span class="nx">$$</span><span class="p">((</span><span class="nx">prefix</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;select&quot;</span><span class="p">).</span><span class="nx">invoke</span><span class="p">(</span><span class="s1">&#39;setStyle&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC582'>			<span class="s1">&#39;visibility&#39;</span><span class="o">:</span> <span class="nx">visibility</span></div><div class='line' id='LC583'>		<span class="p">});</span></div><div class='line' id='LC584'>	<span class="p">},</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'>	<span class="nx">event</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC587'>		<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC588'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">eventName</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC589'>			<span class="kd">var</span> <span class="nx">returnValue</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">eventName</span><span class="p">]();</span> <span class="c1">// Executing callback</span></div><div class='line' id='LC590'>			<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">eventName</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span> <span class="c1">// Removing callback after execution</span></div><div class='line' id='LC591'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">Object</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">returnValue</span><span class="p">))</span></div><div class='line' id='LC592'>				<span class="nx">r</span> <span class="o">=</span> <span class="nx">returnValue</span><span class="p">;</span></div><div class='line' id='LC593'>		<span class="p">}</span></div><div class='line' id='LC594'>		<span class="k">return</span> <span class="nx">r</span><span class="p">;</span></div><div class='line' id='LC595'>	<span class="p">}</span></div><div class='line' id='LC596'><span class="p">};</span></div><div class='line' id='LC597'><br/></div><div class='line' id='LC598'><span class="nb">Object</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Modalbox</span><span class="p">,</span> <span class="nx">Modalbox</span><span class="p">.</span><span class="nx">Methods</span><span class="p">);</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'><span class="k">if</span> <span class="p">(</span><span class="nx">Modalbox</span><span class="p">.</span><span class="nx">overrideAlert</span><span class="p">)</span> <span class="nb">window</span><span class="p">.</span><span class="nx">alert</span> <span class="o">=</span> <span class="nx">Modalbox</span><span class="p">.</span><span class="nx">alert</span><span class="p">;</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.08981s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

