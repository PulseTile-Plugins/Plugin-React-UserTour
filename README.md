# Plugin-React-UserTour

This plugin is used to support User Tour around a PulseTile ReactJS based application.

# Installation

This plugin installed automatically by Yeoman-generator: https://www.npmjs.com/package/generator-helm-phr

Generator does the following:
1) Clone UserTour from GitHub repository;
2) Overwrite directory **_src/components/containers/UserTour/_** in the Core-part

# Working principle

When user login to the site in first time, User Tour is run automatically.

If user has passed the tour, information about it is added to Cookie. 

Button "?" for Tour running is replaced by link to MyHelm.org