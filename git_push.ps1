$remoteUrl = "https://github.com/iaminaadhikari/Bajra_Tech_Interview_Prep.git"
git remote remove origin
git remote add origin $remoteUrl

$files = git status --porcelain | ForEach-Object { $_.Substring(3) }

foreach ($file in $files) {
    if (-not [string]::IsNullOrWhiteSpace($file)) {
        Write-Host "Processing: $file"
        git add $file
        git commit -m "Add/Update $file"
        git push origin main
    }
}
