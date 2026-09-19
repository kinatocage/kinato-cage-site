@echo off
setlocal
cd /d "%~dp0"

echo ========================================================
echo   Kinato Cage 3D Simulator Starting...
echo ========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js was not found.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Package installation failed.
        pause
        exit /b 1
    )
)

echo Starting development server...
echo Browser will automatically open at http://localhost:5173/
echo.
echo Press Ctrl + C or close this window to stop.
echo.

start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:5173/"

call npm run dev
