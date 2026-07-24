@echo off
title Zaggu Portfolio — Local Server
echo.
echo  ╔══════════════════════════════════════╗
echo  ║   ZAGGU PORTFOLIO — LOCAL SERVER     ║
echo  ║   http://localhost:8080              ║
echo  ╚══════════════════════════════════════╝
echo.
echo  Starting server...
echo  Press Ctrl+C to stop.
echo.
start http://localhost:8080
python -m http.server 8080
pause
