---
title: How I use git on a daily basis
author: Jorge Lopes Rodrigues
status: Draft
date: '2021-12-11'
excerpt: A simple collection of tips and flows that I use every single day in git and github for work, pleasure and profit.
url-title: how-use-git-daily
---

# The Git cheat-sheet
You probably know already but Git and GitHub are extremelly powerful tools and as a developer we spend quite a lot of our times working on it. 

These useful commands usually are my go-to ones to get me out of trouble.
I noted these down to make it easier for me to remember which command to use for what. It helped me a lot and maybe it will help you too.

## Basics
Cloning a repo:
`git clone https://repowurl.com`

Committing to your current branch:
`git commit -m "Type your descriptive commit message here"`

Pulling:
`git pull`

Change branches:
`git checkout branchName`

Create a new branch and immediately change to it
`git checkout -b newBranchName`

Changing to another branch:
`git checkout branchName`

## To save my ass
Below are some of the git commands/approaches I often use in some tricky situations.

### - Update feature branch with develop
Whenever I need to update the branch I am working on with changes that were pushed into the project's main branch, this is the command I go for. Please notice `develop` here is our main branch. It could be `main` or any other name.
`git pull origin develop`

### - Get one specific file from develop into your branch 
This is particularly useful when you want to remove a file that you modified from your commit, in case you regreted the change, or pushed it by mistake
      
`git checkout origin/develop -- src/containers/AccountScreen.tsx`

### - Changes made on the wrong branch (before commiting)
In a case where you have done changes in a few files in the wrong branch and you don't want to lose the work done neither you want to commit and push the changes on the wrong branch. 

In this scenario you want to move your changes to another branch. These are the commands to use:
```
git stash
git checkout <new_branch>
git stash apply
````