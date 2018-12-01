# Restaurant Reviews - Stage 1

## Project Overview

A static design that lacks accessibility, is hardly responsive is given as starter code. The end application is a responsive, accessible and an offline-first web application.

### Project Highlights
- use of pure CSS for responsive design
- responsive Images using srcset and sizes attributes
- improved accessibility using ARIA semantics and Javascript keyboard events
- future-ready Service Workers that provide offline-first experience in supported browsers

### Installation steps

The following steps are to be followed in order to run the program in a local environment:
1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.
    * Note - For Windows systems, Python 3.x is installed as python by default. To start a Python 3.x server, you can simply enter python -m http.server 8000 .

2. With your server running, visit the site: http://localhost:8000 to see the web application running online.

3. In order to test the offline-ready state of the application, click through the application for the first few pages online in order to register the service worker and cache the files. Then either disconnect the internet or enable offline mode in Network -> Offline in Chrome Developer Tools if using Chrome. The application will still run the same way, except the files will be loaded from the cache and you can see that there are no requests made in the terminal to the network.