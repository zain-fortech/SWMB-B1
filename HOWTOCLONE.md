https://github.com/zain-fortech/SWMB-B1

1. Go to Top Right icon of your profile
2. Click Settings
3. Click SSH and GPG keys
4. Click New SSH key
5. Enter a suitable title i.e. name of your machine
6. Open your terminal in local computer and run this command: ssh-keygen -t ed25519 -C "your_email@example.com". Don't forget to replace your email.
7. Keep the terminal open and run: clip < ~/.ssh/id_ed25519.pub.
8. Go back to GitHub and paste the contents in your clipboard.
9. Hit Add SSH Key.
10. Create a folder/directory in your computer.
11. Open it in your VS Code.
12. Open integrated terminal and select Git Bash from terminal Type.
13. Run: git clone git@github.com:zain-fortech/SWMB-B1.git

Here you go...
