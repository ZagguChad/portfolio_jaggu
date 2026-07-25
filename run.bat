@echo off
title Zaggu Portfolio — Next.js Local Server
echo.
echo  ╔════════════════════════════════════════════════════╗
echo  ║       ZAGGU PORTFOLIO — NEXT.JS DEV SERVER       ║
echo  ║             http://localhost:3000                  ║
echo  ╚════════════════════════════════════════════════════╝
echo.
echo  Starting Next.js dev server...
echo  Browser will open automatically as soon as the server is compiled & ready.
echo.

:: Background watcher to open browser ONLY when http://localhost:3000 returns HTTP 200
start "" /min powershell -NoProfile -ExecutionPolicy Bypass -Command "for ($i=0; $i -lt 40; $i++) { Start-Sleep -Seconds 1; try { $res = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 2; if ($res.StatusCode -eq 200) { Start-Process 'http://localhost:3000'; break } } catch {} }"

cmd /c "npm run dev"
pause
