@echo off
title Zaggu Portfolio — Next.js Local Server
echo.
echo  ╔════════════════════════════════════════════════════╗
echo  ║       ZAGGU PORTFOLIO — NEXT.JS DEV SERVER       ║
echo  ║             http://localhost:3000                  ║
echo  ╚════════════════════════════════════════════════════╝
echo.
echo  Starting dev server...
echo  Press Ctrl+C to stop.
echo.
timeout /t 2 /nobreak >nul
start http://localhost:3000
cmd /c "npm run dev"
pause
