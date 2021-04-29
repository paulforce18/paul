function about(){
    if(document.body.contains(document.querySelector(".cheatSheet")))
    document.querySelector(".root").removeChild(document.querySelector(".cheatSheet"));
    document.querySelector(".name > h1").innerHTML = "John Paul C. Alimango"
    aboutMe();
}
function gitSheet(){
    if(document.body.contains(document.querySelector(".about")))
    document.querySelector(".root").removeChild(document.querySelector(".about"));
    cheatSheetHandler(cheatSheet);
    document.querySelector(".name > h1").innerHTML = "Git"
}


const cheatSheet = {
    "Creating Snapshot":[
    {
        title: "Initializing a repository",
        commands: [
            "git init"
        ]
    },
    {
        title: "Staging files",
        commands: [
            "git add file1.js","# Stages a single file", 
            "git add file1.js file2.js","# Stages multiple files",
            "git add *.js","# Stages with a pattern",
            "git add .","# Stages the current directory and all its content"
        ]
    },
    {
        title: "Viewing the status",
        commands: [
            "git status","# Full status",
            "git status -s","# Short status",
        ]
    },
    {
        title: "Committing the staged files",
        commands: [
            "git commit -m “Message”","# Commits with a one-line message",
            "git commit","# Opens the default editor to type a long message",
        ]
    },
    {
        title: "Skipping the staging area",
        commands: [
            "git commit -am “Message”"
        ]
    },
    {
        title: "Removing files",
        commands: [
            "git rm file1.js","# Removes from working directory and staging area",
            "git rm --cached file1.js","# Removes from staging area only"
        ]
    },
    {
        title: "Renaming or moving files",
        commands: [
            "git mv file1.js file1.txt"
        ]
    },
    {
        title: "Viewing the staged/unstaged changes",
        commands: [
            "git diff","# Shows unstaged changes",
            "git diff --staged","# Shows staged changes", 
            "git diff --cached","# Same as the above"
        ]
    },
    {
        title: "Viewing the history",
        commands: [
            "git log" ,"# Full history", 
            "git log --oneline" ,"# Summary", 
            "git log --reverse" ,"# Lists the commits from the oldest to the newest"
        ]
    },
    {
        title: "Viewing a commit",
        commands: [
            "git show 921a2ff","# Shows the given commit", 
            "git show HEAD","# Shows the last commit",
            "git show HEAD~2","# Two steps before the last commit",
            "git show HEAD:file.js","# Shows the version of file.js stored in the last commit"
        ]
    },
    {
        title: "Unstaging files (undoing git add)",
        commands: [
            "git restore --staged file.js","# Copies the last version of file.js from repo to index"
        ]
    },
    {
        title: "Discarding local changes",
        commands: [
            "git restore file.js","# Copies file.js from index to working directory", 
            "git restore file1.js file2.js","# Restores multiple files in working directory", 
            "git restore .","# Discards all local changes (except untracked files)",
            "git clean -fd","# Removes all untracked files"
        ]
    },
    {
        title: "Restoring an earlier version of a file",
        commands: [
            "git restore --source=HEAD~2 file.js"
        ]
    },
    ],
    "Browsing History":[
        {
            title: "Viewing the history",
            commands: [
                "git log --stat","# Shows the list of modified files", 
                "git log --patch","# Shows the actual changes (patches)"
            ]
        },
        {
            title: "Filtering the history",
            commands: [
                "git log -3","# Shows the last 3 entries", 
                "git log --author=“Mosh”","#", 
                "git log --before=“2020-08-17”","#", 
                "git log --after=“one week ago”","#",
                "git log --grep=“GUI”","# Commits with “GUI” in their message", 
                "git log -S“GUI”","# Commits with “GUI” in their patches", 
                "git log hash1..hash2","# Range of commits",
                "git log file.txt","# Commits that touched file.txt" 
            ]
        },
        {
            title: "Formatting the log output",
            commands: [
                "git log --pretty=format:”%an committed %H”" 
            ]
        },
        {
            title: "Creating an alias",
            commands: [
                "git config --global alias.lg “log --oneline“" 
            ]
        },
        {
            title: "Viewing a commit",
            commands: [
                "git show HEAD~2","#", 
                "git show HEAD~2:file1.txt","# Shows the version of file stored in this commit"
            ]
        },
        {
            title: "Comparing commits",
            commands: [
                "git diff HEAD~2 HEAD", "# Shows the changes between two commits",
                "git diff HEAD~2 HEAD file.txt", "# Changes to file.txt only",
            ]
        },
        {
            title: "Checking out a commit",
            commands: [
                "git checkout dad47ed","# Checks out the given commit", 
                "git checkout master","# Checks out the master branch",
            ]
        },
        {
            title: "Finding a bad commit",
            commands: [ 
                "git bisect start","#", 
                "git bisect bad","# Marks the current commit as a bad commit", 
                "git bisect good ca49180","# Marks the given commit as a good commit",
                "git bisect reset","# Terminates the bisect session"
            ]
        },
        {
            title: "Finding contributors",
            commands: [ 
                "git shortlog"
            ]
        },
        {
            title: "Viewing the history of a file",
            commands: [  
                "git log file.txt", "# Shows the commits that touched file.txt",
                "git log --stat file.txt", "# Shows statistics (the number of changes) for file.txt", 
                "git log --patch file.txt", "# Shows the patches (changes) applied to file.txt"
            ]
        },
        {
            title: "Finding the author of lines",
            commands: [  
                "git blame file.txt","# Shows the author of each line in file.txt"
            ]
        },
        {
            title: "Tagging",
            commands: [  
                "git tag v1.0","# Tags the last commit as v1.0",
                "git tag v1.0 5e7a828","# Tags an earlier commit", 
                "git tag","# Lists all the tags", 
                "git tag -d v1.0","# Deletes the given tag"
            ]
        },
        
    ],
    "Branching & Merging":[
        {
            title: "Managing branches",
            commands: [
                "git branch bugfix","# Creates a new branch called bugfix", 
                "git checkout bugfix","# Switches to the bugfix branch",
                "git switch bugfix","# Same as the above",
                "git switch -C bugfix","# Creates and switches", 
                "git branch -d bugfix","# Deletes the bugfix branch" 
            ]
        },
        {
            title: "Comparing branches",
            commands: [
                "git log master..bugfix","# Lists the commits in the bugfix branch not in master", 
                "git diff master..bugfix","# Shows the summary of changes"
            ]
        },
        {
            title: "Stashing ",
            commands: [
                "git stash push -m “New tax rules”","# Creates a new stash", 
                "git stash list","# Lists all the stashes",
                "git stash show stash@{1}","# Shows the given stash", 
                "git stash show 1","# shortcut for stash@{1}", 
                "git stash apply 1","# Applies the given stash to the working dir", 
                "git stash drop 1","# Deletes the given stash",
                "git stash clear","# Deletes all the stashes",
            ]
        },
        {
            title: "Merging ",
            commands: [
                "git merge bugfix", "# Merges the bugfix branch into the current branch",
                "git merge --no-ff bugfix", "# Creates a merge commit even if FF is possible", 
                "git merge --squash bugfix", "# Performs a squash merge", 
                "git merge --abort", "# Aborts the merge",
            ]
        },
        {
            title: "Viewing the merged branches ",
            commands: [
                "git branch --merged","# Shows the merged branches", 
                "git branch --no-merged","# Shows the unmerged branches",
            ]
        },
        {
            title: "Rebasing",
            commands: [ 
                "git rebase master", "# Changes the base of the current branch" 
            ]
        },
        {
            title: "Cherry picking",
            commands: [  
                "git cherry-pick dad47ed", "# Applies the given commit on the current branch" 
            ]
        },
    ],
    "Collaboration":[
        {
            title: "Cloning a repository",
            commands: [
                "git clone url" 
            ]
        },
        {
            title: "Syncing with remotes",
            commands: [
                "git fetch origin master","# Fetches master from origin", 
                "git fetch origin","# Fetches all objects from origin",
                "git fetch","# Shortcut for “git fetch origin”",
                "git pull","# Fetch + merge ",
                "git push origin master","# Pushes master to origin", 
                "git push","# Shortcut for “git push origin master”"
            ]
        },
        {
            title: "Sharing tags",
            commands: [
                "git push origin v1.0","# Pushes tag v1.0 to origin",
                "git push origin —delete v1.0","#"
            ]
        },
        {
            title: "Sharing branches",
            commands: [
                "git branch -r","# Shows remote tracking branches",
                "git branch -vv","# Shows local & remote tracking branches", 
                "git push -u origin bugfix","# Pushes bugfix to origin",
                "git push -d origin bugfix","# Removes bugfix from origin"
            ]
        },
        {
            title: "Managing remotes",
            commands: [ 
                "git remote","# Shows remote repos",
                "git remote add upstream url","# Adds a new remote called upstream",
                "git remote rm upstream","# Remotes upstream"
            ]
        },
    ],
    "Rewriting History":[
        {
            title: "Undoing commits",
            commands: [ 
                "git reset --soft HEAD^","# Removes the last commit, keeps changed staged",
                "git reset --mixed HEAD^","# Unstages the changes as well",
                "git reset --hard HEAD^","# Discards local changes",
            ]
        },
        {
            title: "Reverting commits",
            commands: [ 
                "git revert 72856ea","# Reverts the given commit",
                "git revert HEAD~3..","# Reverts the last three commits", 
                "git revert --no-commit HEAD~3..","#"
            ]
        },
        {
            title: "Recovering lost commits",
            commands: [ 
                "git reflog","# Shows the history of HEAD", 
                "git reflog show bugfix","# Shows the history of bugfix pointer"
            ]
        },
        {
            title: "Amending the last commit",
            commands: [
                "git commit --amend" 
            ]
        },
        {
            title: "Interactive rebasing",
            commands: [
                "git rebase -i HEAD~5" 
            ]
        },
    ]
}

const cheatSheetHandler = (sheet) => {
    const div = document.createElement("div");
    div.className = "cheatSheet";
    let content = ``;
    const keys = Object.keys(sheet);
    for(let i=0; i<keys.length; i++){
        content += `<h2 class="title">${keys[i]}</h2>`
        for(let j=0; j<sheet[keys[i]].length; j++){
            content += `<h3 class="sec">${sheet[keys[i]][j].title}</h3> <ul class="commands">`
            for(let k=0; k < sheet[keys[i]][j].commands.length; k++){
                content += `<li><p>${sheet[keys[i]][j].commands[k]}</p></li>`
            }
            content += `</ul>`
        }
    }
    content += `<h2 style="margin-bottom: 20px;">SOURCE: <a href="https://www.youtube.com/watch?v=8JJ101D3knE">Programming with Mosh</a></h2>`
    div.innerHTML = content;
    document.getElementById("gitSheetBtn").disabled = true;
    document.getElementById("aboutBtn").disabled = false
    document.querySelector(".root").append(div);
}

const aboutMe =()=> {
    const div = document.createElement("div");
    div.className = "about"
    let content = `
    <br>
    <br><br>
    <h2>ABOUT</h2>
    <p>i'm John Paul, student in
        Pambayang dalubhasaan ng marilao, I have a basic knowledge in HTML, CSS, JavaScript</p>
    `;
    div.innerHTML = content;
    document.getElementById("aboutBtn").disabled = true
    document.getElementById("gitSheetBtn").disabled = false
    document.querySelector(".root").append(div);
}