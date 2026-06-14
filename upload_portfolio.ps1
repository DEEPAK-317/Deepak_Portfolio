$username = Read-Host "Enter your GitHub username (default: DEEPAK-317)"
if ([string]::IsNullOrWhiteSpace($username)) {
    $username = "DEEPAK-317"
}
$token = Read-Host "Enter your GitHub Personal Access Token (PAT)"
if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Error "Personal Access Token is required to upload."
    exit
}

$filesToUpload = @(
    "tailwind.config.js",
    "src/index.css",
    "src/App.tsx",
    "src/data/skills.js",
    "src/data/projects.js",
    "src/data/experience.js",
    "src/components/Navbar.jsx",
    "src/components/Education.jsx",
    "src/components/ui/CustomCursor.jsx",
    "src/components/ui/Preloader.jsx",
    "src/components/ui/ParticleBackground.jsx",
    "src/components/ui/ScrollProgress.jsx",
    "src/components/About.tsx",
    "src/components/Hero.tsx",
    "src/components/Experience.tsx",
    "src/components/Projects.tsx",
    "src/components/Skills.tsx",
    "src/components/Footer.tsx",
    "src/components/Contact.tsx",
    "index.html"
)

$headers = @{
    "Authorization" = "Bearer $token"
    "Accept"        = "application/vnd.github+json"
    "X-GitHub-Api-Version" = "2022-11-28"
    "User-Agent"    = "GitHub-Portfolio-Updater-PowerShell"
}

Write-Host "`nUploading updated portfolio components to $username/Deepak_Portfolio repository..." -ForegroundColor Yellow

foreach ($filePath in $filesToUpload) {
    $localPath = Join-Path $PSScriptRoot $filePath
    if (-not (Test-Path $localPath)) {
        Write-Warning "Skipping missing local file: $filePath"
        continue
    }

    $content = Get-Content -Raw -Encoding utf8 $localPath
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($content)
    $encodedContent = [Convert]::ToBase64String($bytes)

    $apiUrl = "https://api.github.com/repos/$username/Deepak_Portfolio/contents/$filePath"

    # Get current file SHA if it exists
    $sha = $null
    try {
        $resGet = Invoke-RestMethod -Uri $apiUrl -Method Get -Headers $headers -ErrorAction Stop
        $sha = $resGet.sha
    } catch {
        # File might not exist in repository yet
    }

    $payload = @{
        message = "docs: update portfolio components with SDE experience, projects, and skills"
        content = $encodedContent
    }

    if ($sha) {
        $payload.sha = $sha
    }

    $bodyJson = $payload | ConvertTo-Json

    try {
        $resPut = Invoke-RestMethod -Uri $apiUrl -Method Put -Headers $headers -Body $bodyJson -ContentType "application/json"
        Write-Host "✅ Successfully updated: $filePath" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to update $filePath: $_" -ForegroundColor Red
    }
}

Write-Host "`nUpload sequence completed." -ForegroundColor Cyan

# --- Optional Vercel Deployment ---
$deployVercel = Read-Host "Do you want to deploy these updates directly to Vercel? (y/N)"
if ($deployVercel -eq 'y' -or $deployVercel -eq 'yes') {
    Write-Host "`nTriggering Vercel deployment..." -ForegroundColor Yellow
    if (Get-Command vercel -ErrorAction SilentlyContinue) {
        vercel --prod
    } else {
        Write-Host "Vercel CLI not found globally. Trying running via npx..." -ForegroundColor Yellow
        npx vercel --prod
    }
}
