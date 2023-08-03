# warehousebot_gui
A package which displays the current status of the robot. 

## Installation Guide
1. To install nodejs, copy and paste and run the following command to install the node version manager (nvm) 

```
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
2. Next, we can run (nvm list-remote) to list all of the possible nodejs version which we can use. Please open a new terminal and run the following command:
```
nvm list-remote
```
3. We would want to install V18.17.0 which is the latest LTS version of nodejs 
which is compatible with the ros2 nodejs library.<br>
```
nvm install v18.17.0
```
4. We can verify its installation by running (nvm list)
```
nvm list
```

5. Next, git clone this package into a folder by running:
```
git clone https://github.com/SynapseProgramming/warehousebot_gui.git
```
6. Next, enter the goal_status_gui directory and run the following command:
```
npm install
```
7. Next, run the following command to rebuild the package with electron.
```
./node_modules/.bin/electron-rebuild 
```
### Usage
In the warehousebot_gui package, run the following command:
```
npm start
```
### Building a standalone executable

1. Firstly, go to the electron-packager directory
```
goal_status_gui/node_modules/electron-packager/bin
```
2. Next, run the following command (change the tags accordingly)
```
./electron-packager.js <filepath of electron package to build> <name of built file> --out=<filepath of location to build to>
```
3. To run the program, navigate to the generated file and run the following command:
```
./<name of built file>
```
