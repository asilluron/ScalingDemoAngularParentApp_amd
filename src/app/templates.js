define([], function() { return function($templateCache){   'use strict';

  $templateCache.put('src/app/components/blog-content/aggregates/aggregates.html',
    "<div class=\"blog-post\" ng-repeat=\"blog in Blogs\">\n" +
    "            <h2 class=\"blog-post-title\">{{blog.title}}</h2>\n" +
    "            <p class=\"blog-post-meta\">{{blog.date | date:\"medium\"}} by<a href=\"#\">{{blog.author}}</a></p>\n" +
    "            <p class=\"blog-summary\">{{blog.summary}}</p>\n" +
    "</div><!-- /.blog-post -->\n" +
    "          \n" +
    "<ul class=\"pager\">\n" +
    "  <li><a href=\"#\">Previous</a></li>\n" +
    "  <li><a href=\"#\">Next</a></li>\n" +
    "</ul>"
  );


  $templateCache.put('src/app/components/blog-content/archives/archives.html',
    "<div class=\"sidebar-module sidebar-module-inset\">\n" +
    "            <h4>About</h4>\n" +
    "            <p>This demonstration should spark some ideas for how you can leverage modular code to create intricate compositions</p>\n" +
    "          </div>\n" +
    "          <div class=\"sidebar-module\">\n" +
    "            <h4>Archives</h4>\n" +
    "            <ol class=\"list-unstyled\">\n" +
    "              <li><a href=\"#\">January 2014</a></li>\n" +
    "              <li><a href=\"#\">December 2013</a></li>\n" +
    "              <li><a href=\"#\">November 2013</a></li>\n" +
    "              <li><a href=\"#\">October 2013</a></li>\n" +
    "              <li><a href=\"#\">September 2013</a></li>\n" +
    "              <li><a href=\"#\">August 2013</a></li>\n" +
    "              <li><a href=\"#\">July 2013</a></li>\n" +
    "              <li><a href=\"#\">June 2013</a></li>\n" +
    "              <li><a href=\"#\">May 2013</a></li>\n" +
    "              <li><a href=\"#\">April 2013</a></li>\n" +
    "              <li><a href=\"#\">March 2013</a></li>\n" +
    "              <li><a href=\"#\">February 2013</a></li>\n" +
    "            </ol>\n" +
    "          </div>\n" +
    "          <div class=\"sidebar-module\">\n" +
    "            <h4>Elsewhere</h4>\n" +
    "            <ol class=\"list-unstyled\">\n" +
    "              <li><a href=\"#\">GitHub</a></li>\n" +
    "              <li><a href=\"#\">Twitter</a></li>\n" +
    "              <li><a href=\"#\">Facebook</a></li>\n" +
    "            </ol>\n" +
    "          </div>"
  );
 }; });