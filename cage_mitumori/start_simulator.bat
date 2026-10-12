@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================================
echo   きなとのケージ屋さん 3Dシミュレーター (通常モード)
echo ========================================================
echo.

REM 1. Node.js の存在確認
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [エラー] Node.js が見つかりませんでした。
    echo https://nodejs.org/ よりインストールしてください。
    pause
    exit /b 1
)

REM 2. 依存パッケージの確認
if not exist "node_modules\" (
    echo 依存パッケージをインストール中...
    call npm install
    if %errorlevel% neq 0 (
        echo [エラー] パッケージのインストールに失敗しました。
        pause
        exit /b 1
    )
)

REM 3. ポート 5173 を使用中の既存プロセスを終了（ポート番号のズレを防止）
echo ポート 5173 の使用状況を確認中...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ -gt 0 } | ForEach-Object { Write-Host ('  - 既存のサーバープロセス (PID: ' + $_ + ') を停止して再起動します...'); Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }"

REM ポート解放の安定化のため少し待機
ping 127.0.0.1 -n 2 >nul

echo.
echo 開発サーバー（ポート 5173）を起動しています...
echo ブラウザで通常シミュレーターのURLを自動的に開きます:
echo   URL: http://localhost:5173/
echo.
echo ※終了する場合は、このウィンドウを閉じるか Ctrl + C を押してください。
echo.

REM 4. 2秒後に通常モードのURLでブラウザを開く
start "" cmd /c "ping 127.0.0.1 -n 3 >nul && start http://localhost:5173/"

REM 5. Vite サーバーをポート 5173 固定で起動
call npm run dev -- --port 5173 --strictPort
