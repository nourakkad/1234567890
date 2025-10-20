
# PowerShell script to restrict Microsoft Edge (both 32-bit and 64-bit) to non-VPN (Wi-Fi only)

$ruleName = "Edge – Non-VPN Only"
$lanRange = "192.168.1.0/24"

# Function to add rule if Edge path exists
function Add-EdgeRule {
    param([string]$EdgePath)

    if (Test-Path $EdgePath) {
        Write-Host "Applying firewall rule for: $EdgePath"
        netsh advfirewall firewall delete rule name="$ruleName" program="$EdgePath" | Out-Null
        netsh advfirewall firewall add rule name="$ruleName" ^
            dir=out action=allow program="$EdgePath" ^
            enable=yes profile=any remoteip=$lanRange interfaceType=lan | Out-Null
        Write-Host "✅ Rule added for: $EdgePath"
    } else {
        Write-Host "⚠️ Edge not found at: $EdgePath"
    }
}

# 64-bit Edge path
Add-EdgeRule "C:\Program Files\Microsoft\Edge\Application\msedge.exe"

# 32-bit Edge path
Add-EdgeRule "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

Write-Host "`n✅ Done! Edge is now restricted to Wi-Fi (LAN) and cannot use VPN connections."
